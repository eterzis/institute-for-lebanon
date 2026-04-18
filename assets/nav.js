/* ===================================================================
   Institute for Lebanon — Shared Mobile Nav Helper
   ===================================================================
   Handles hamburger toggle, outside-click close, escape-to-close, and
   auto-close on link selection. Loaded by every page so the mobile
   drawer behaves consistently across the site.

   This script is defensive: it binds the click handler directly to
   the button rather than relying on the onclick="toggleMobileMenu()"
   attribute, so the menu works even if the attribute runs before the
   helper function is defined. The onclick attribute remains for
   progressive enhancement. */

(function () {
  function getEls() {
    return {
      links: document.querySelector('.nav-links'),
      btn:   document.querySelector('.nav-mobile-btn'),
    };
  }

  function open() {
    var e = getEls();
    if (!e.links) return;
    e.links.classList.add('mobile-open');
    if (e.btn) {
      e.btn.classList.add('open');
      e.btn.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-open');
  }
  function close() {
    var e = getEls();
    if (!e.links) return;
    e.links.classList.remove('mobile-open');
    if (e.btn) {
      e.btn.classList.remove('open');
      e.btn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-open');
  }
  function toggle(ev) {
    if (ev) { ev.preventDefault(); ev.stopPropagation(); }
    var e = getEls();
    if (!e.links) return;
    if (e.links.classList.contains('mobile-open')) close();
    else open();
  }

  // Expose globally so onclick="toggleMobileMenu()" markup keeps working.
  window.toggleMobileMenu = toggle;
  window.closeMobileMenu  = close;

  function bind() {
    var e = getEls();
    if (e.btn && !e.btn.dataset.navBound) {
      e.btn.dataset.navBound = '1';
      e.btn.setAttribute('aria-expanded', 'false');
      // Strip any inline onclick="toggleMobileMenu()" so we don't double-fire.
      // We rebind cleanly here.
      if (e.btn.hasAttribute('onclick')) e.btn.removeAttribute('onclick');
      e.btn.addEventListener('click', toggle);
    }

    if (e.links && !e.links.dataset.navBound) {
      e.links.dataset.navBound = '1';
      // Auto-close drawer on link tap (so anchor scrolling works cleanly).
      e.links.addEventListener('click', function (ev) {
        var a = ev.target.closest('a');
        if (a) close();
      });
    }
  }

  // Bind as soon as DOM is ready — but if we're already past that point
  // (script placed at end of body), bind immediately.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  // Outside-click close. Bind once on the document.
  document.addEventListener('click', function (ev) {
    if (ev.target.closest('.nav-links') || ev.target.closest('.nav-mobile-btn')) return;
    close();
  });

  // Escape key closes it.
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') close();
  });

  // Resize past mobile breakpoint resets state cleanly.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) close();
  });

})();
