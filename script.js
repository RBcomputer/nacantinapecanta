/* ============================================
   NÀ CANTINA PE CANTÀ — script.js — v1.7
   ============================================ */

function initSite() {

  /* ---------- FORZA SCROLL IN CIMA ALL'APERTURA ---------- */
  window.scrollTo(0, 0);

  /* ---------- HEADER: sfondo allo scroll ---------- */
  var header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.background = '#1c1917';
        header.style.boxShadow  = '0 4px 20px rgba(0,0,0,0.5)';
        header.style.padding    = '0.5rem 0';
      } else {
        header.style.background = 'transparent';
        header.style.boxShadow  = 'none';
        header.style.padding    = '1rem 0';
      }
    });
  }

  /* ---------- MENU MOBILE ---------- */
  var btn      = document.getElementById('mobile-menu-btn');
  var menu     = document.getElementById('mobile-menu');
  var menuIcon = document.getElementById('menu-icon');

  if (btn && menu && menuIcon) {
    btn.addEventListener('click', function () {
      var isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';
      if (isOpen) {
        menu.style.maxHeight = '0px';
        menu.style.opacity   = '0';
        menuIcon.innerHTML   = '<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>';
      } else {
        menu.style.maxHeight = '400px';
        menu.style.opacity   = '1';
        menuIcon.innerHTML   = '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>';
      }
    });

    /* Chiudi menu al click su un link */
    var mobileLinks = document.querySelectorAll('.mobile-link');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function () {
        menu.style.maxHeight = '0px';
        menu.style.opacity   = '0';
        menuIcon.innerHTML   = '<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>';
      });
    }
  }
}

/* Blocca il ripristino automatico dello scroll del browser mobile */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* Funziona sia in locale che online */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}

/* ---------- COOKIE BANNER ---------- */
(function () {
  var banner  = document.getElementById('cookie-banner');
  var accept  = document.getElementById('cookie-accept');
  var decline = document.getElementById('cookie-decline');

  if (!banner) return;

  /* Mostra solo se non ha ancora scelto */
  if (!localStorage.getItem('cookieChoice')) {
    banner.style.display = 'block';
  }

  if (accept) {
    accept.addEventListener('click', function () {
      localStorage.setItem('cookieChoice', 'accepted');
      banner.style.opacity = '0';
      banner.style.transition = 'opacity 0.4s';
      setTimeout(function() { banner.style.display = 'none'; }, 400);
    });
  }

  if (decline) {
    decline.addEventListener('click', function () {
      localStorage.setItem('cookieChoice', 'declined');
      banner.style.opacity = '0';
      banner.style.transition = 'opacity 0.4s';
      setTimeout(function() { banner.style.display = 'none'; }, 400);
    });
  }
})();
