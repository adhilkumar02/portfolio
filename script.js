// Ultra-Modern Theme Toggle & mobile menu
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const saved = localStorage.getItem('theme');

  function applyTheme(mode) {
    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  applyTheme(saved || (prefersLight.matches ? 'light' : 'dark'));

  themeToggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
    themeToggle.innerHTML = isLight ? '☀️' : '🌙';
    themeToggle.style.transform = 'rotate(360deg)';
    themeToggle.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    setTimeout(() => themeToggle.style.transform = 'rotate(0deg)', 500);
  });

  // Mobile menu toggle with icon change
  menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks?.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (icon) {
        icon.className = 'ph ph-x';
      }
    } else {
      document.body.style.overflow = '';
      if (icon) {
        icon.className = 'ph ph-list';
      }
    }
  });

  // Close mobile menu when clicking on a link
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      document.body.style.overflow = '';
      const icon = menuToggle?.querySelector('i');
      if (icon) {
        icon.className = 'ph ph-list';
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks?.classList.contains('open') && 
        !navLinks.contains(e.target) && 
        !menuToggle?.contains(e.target)) {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
      const icon = menuToggle?.querySelector('i');
      if (icon) {
        icon.className = 'ph ph-list';
      }
    }
  });

  // Close mobile menu on window resize to desktop size
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks?.classList.contains('open')) {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
      const icon = menuToggle?.querySelector('i');
      if (icon) {
        icon.className = 'ph ph-list';
      }
    }
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
})();

// Sticky nav active link highlight
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const linkMap = new Map();
  links.forEach(l => linkMap.set(l.getAttribute('href')?.slice(1), l));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(l => l.classList.remove('active'));
        linkMap.get(id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

  sections.forEach(s => io.observe(s));
})();

// Hero circuit animation enhancements (GSAP)
(function () {
  if (!window.gsap) return;
  const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } });
  tl.to('.circuit .line', { strokeDashoffset: -400, duration: 16 }, 0);

  // Content entrance
  gsap.from('.hero .hero-text > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' });
  gsap.from('.hero .avatar', { y: 10, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });
})();

// Lightweight parallax on elements with data-parallax (disabled on mobile for performance)
(function () {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  
  // Disable parallax on mobile devices for better performance
  const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
  if (isMobile) return;
  
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  let ticking = false;
  
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const vh = window.innerHeight;
        els.forEach(el => {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - vh / 2;
          const speed = Number(el.getAttribute('data-speed')) || 0.2;
          const offset = clamp(center * speed * 0.2, -40, 40);
          el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }
  
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Animate numbers on view
(function () {
  const nums = document.querySelectorAll('.stat .num');

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains('num')) {
        const el = entry.target;
        const target = Number(el.getAttribute('data-target')) || 0;
        const start = performance.now();
        const duration = 1200;
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = Math.round(p * target).toString();
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  nums.forEach(n => io.observe(n));
})();

// Contact form: EmailJS with graceful mailto fallback
(function () {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  const EMAILJS_PUBLIC_KEY = 'NFoPvELGHW5rhZwXU';
  const EMAILJS_SERVICE_ID = 'service_j7n6hgo';
  const EMAILJS_TEMPLATE_ID = 'template_8niamsp';

  const hasEmailJS = typeof window !== 'undefined' && window.emailjs && typeof window.emailjs.init === 'function';
  if (hasEmailJS) {
    try {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (_) { /* ignore init errors; will use fallback */ }
  }

  function mailtoFallback(name, email, subjectInput, message) {
    const subject = subjectInput
      ? encodeURIComponent(subjectInput)
      : encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:aadhilkumar989@gmail.com?subject=${subject}&body=${body}`;
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = /** @type {HTMLInputElement} */(document.getElementById('name')).value.trim();
    const email = /** @type {HTMLInputElement} */(document.getElementById('email')).value.trim();
    const subjectField = document.getElementById('subject');
    const subjectInput = subjectField?.value.trim() || '';
    const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message')).value.trim();

    if (!name || !email || !message) {
      note.textContent = 'Please fill out required fields.';
      return;
    }

    note.textContent = hasEmailJS ? 'Sending your message…' : 'Opening your email client…';

    if (hasEmailJS) {
      try {
        const params = {
          from_name: name,
          from_email: email,
          subject: subjectInput || `Portfolio contact from ${name}`,
          message,
        };
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        note.textContent = 'Message sent successfully! Thank you for reaching out.';
        form.reset();
        setTimeout(() => { note.textContent = ''; }, 4000);
      } catch (err) {
        note.textContent = 'Sending failed. Switching to your email client…';
        mailtoFallback(name, email, subjectInput, message);
        setTimeout(() => { note.textContent = ''; form.reset(); }, 3000);
      }
    } else {
      mailtoFallback(name, email, subjectInput, message);
      setTimeout(() => { note.textContent = ''; form.reset(); }, 3000);
    }
  });
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear().toString();

// Scroll-float for section headings (Projects / Skills / Contact / Education)
(function () {
  // Respect user's reduced motion setting
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Select all targeted section titles in one query for robustness
  const els = Array.from(document.querySelectorAll('#projects .section-title, #skills .section-title, #contact .section-title, #education .section-title'));
  if (!els.length) return;

  // Set initial GPU-accelerated hint where possible
  els.forEach(el => {
    el.style.willChange = 'transform';
    // allow optional per-heading tuning via data-scroll-speed
    if (!el.hasAttribute('data-scroll-speed')) {
      el.setAttribute('data-scroll-speed', '0.06');
    }
  });

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  let ticking = false;

  function update() {
    const vh = window.innerHeight;
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      // center distance from viewport center
      const center = rect.top + rect.height / 2 - vh / 2;
      const speed = Number(el.getAttribute('data-scroll-speed')) || 0.06;
      // small multiplier to keep motion subtle
      const offset = clamp(center * speed, -36, 36);
      // apply vertical translation only (preserve any existing inline translateZ if present)
      el.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Initialize and bind listeners
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
})();



