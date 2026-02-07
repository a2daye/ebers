/**
 * EBERS Header Loader
 * Fetches and injects the global header, sets active nav, handles mobile menu
 */
(function() {
  'use strict';

  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;

  const currentPage = document.body.dataset.page || 
    (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') ? 'home' :
     window.location.pathname.replace('.html', '').split('/').pop() || 'home');

  fetch('components/header.html')
    .then(function(res) { return res.text(); })
    .then(function(html) {
      placeholder.outerHTML = html;
      initHeader();
    })
    .catch(function() {
      placeholder.innerHTML = '<header class="p-4 bg-gray-100"><a href="index.html" class="font-bold text-[#003399]">EBERS</a></header>';
    });

  function initHeader() {
    // Set active nav link
    document.querySelectorAll('[data-nav="' + currentPage + '"], [data-nav-mobile="' + currentPage + '"]').forEach(function(el) {
      el.classList.add('nav-active');
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
      });
    }
  }
})();
