/**
 * EBERS Medical Diagnostic Center - Shared JavaScript
 * Handles: Mobile menu, AOS scroll reveal, Appointment form validation
 */

(function() {
  'use strict';

  // Mobile menu is handled by header.js after header is injected

  // ========== AOS-style Scroll Reveal (vanilla, no dependency) ==========
  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealOnScroll = function() {
    revealElements.forEach(function(el) {
      const rect = el.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const threshold = winHeight * 0.85;
      if (rect.top < threshold && !el.classList.contains('revealed')) {
        el.classList.add('revealed');
      }
    });
  };
  if (revealElements.length) {
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('load', revealOnScroll);
    revealOnScroll(); // Initial check
  }

  // ========== Appointment Form Validation (simulated) ==========
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('form-name');
      const phone = document.getElementById('form-phone');
      const service = document.getElementById('form-service');
      const date = document.getElementById('form-date');
      let isValid = true;
      let firstError = null;

      [name, phone, service, date].forEach(function(field) {
        const wrapper = field.closest('.form-group');
        const errEl = wrapper ? wrapper.querySelector('.form-error') : null;
        if (field.value.trim() === '') {
          isValid = false;
          if (wrapper) wrapper.classList.add('has-error');
          if (errEl) errEl.textContent = 'This field is required';
          if (!firstError) firstError = field;
        } else {
          if (wrapper) wrapper.classList.remove('has-error');
          if (errEl) errEl.textContent = '';
        }
      });

      // Basic phone validation
      if (phone && phone.value.trim() && !/^[\d\s\+\-\(\)]{8,}$/.test(phone.value)) {
        isValid = false;
        const wrapper = phone.closest('.form-group');
        const errEl = wrapper ? wrapper.querySelector('.form-error') : null;
        if (wrapper) wrapper.classList.add('has-error');
        if (errEl) errEl.textContent = 'Enter a valid phone number';
      }

      if (isValid) {
        const msg = document.getElementById('form-success');
        if (msg) {
          msg.classList.remove('hidden');
          appointmentForm.reset();
        }
        // Simulated: In production, send to backend
      } else if (firstError) {
        firstError.focus();
      }
    });
  }

  // ========== Equipment Lightbox ==========
  const lightboxTriggers = document.querySelectorAll('[data-lightbox]');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    lightboxTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const src = this.getAttribute('data-lightbox') || this.getAttribute('href') || this.querySelector('img')?.src;
        if (src) {
          lightboxImg.src = src;
          lightboxImg.alt = this.querySelector('img')?.alt || 'Equipment image';
          lightbox.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    function closeLightbox() {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLightbox(); });
  }
})();
