/* ===================================
   BlackLineSteel - Main JavaScript
   Interactive Features & Animations
   =================================== */

// ============== Dark/Light Mode Toggle ==============
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.init();
  }

  init() {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(this.prefersDark ? 'dark' : 'light');
    }

    // Listen for theme toggle
    this.themeToggle?.addEventListener('click', () => this.toggle());

    // Listen for system theme change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.setTheme(e.matches ? 'dark' : 'light');
    });
  }

  toggle() {
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme) {
    const isLight = theme === 'light';
    const isDark = theme === 'dark';

    if (isLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }

    // Update toggle button text
    if (this.themeToggle) {
      this.themeToggle.textContent = isLight ? '🌙' : '☀️';
    }

    localStorage.setItem('theme', theme);
  }
}

// ============== Mobile Navigation ==============
class MobileNav {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.navUl = document.querySelector('nav ul');
    this.navLinks = document.querySelectorAll('nav a:not(.logo)');
    this.init();
  }

  init() {
    this.hamburger?.addEventListener('click', () => this.toggleMenu());
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && this.navUl?.classList.contains('active')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navUl?.classList.toggle('active');
    this.hamburger?.classList.toggle('active');
  }

  closeMenu() {
    this.navUl?.classList.remove('active');
    this.hamburger?.classList.remove('active');
  }
}

// ============== Scroll Reveal Animation ==============
class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.scroll-reveal');
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, this.options);

    this.elements.forEach(el => observer.observe(el));
  }
}

// ============== Image Helper ==============
// Dinamically find images regardless of extension
function findImage(imagePath) {
  // imagePath should be like 'assets/images/mese_1' without extension
  // Server will serve the correct file
  return imagePath;
}

// ============== Product Gallery Modal ==============
class ProductGallery {
  constructor() {
    this.modal = document.getElementById('productModal');
    this.productCards = document.querySelectorAll('.product-card');
    this.modalClose = document.querySelector('.modal-close');
    this.products = [
      {
        id: 1,
        name: 'Masă de Cafea Industrial',
        category: 'mese',
        icon: '🪑',
        image: 'assets/images/mese_1.jfif',
        description: 'Masă din oțel și lemn masiv, perfect pentru medii industriale. Rezistență maximă și design elegant. Dimensiuni personalizabile conform nevoilor dumneavoastră.'
      },
      {
        id: 2,
        name: 'Masă de Lucru',
        category: 'mese',
        icon: '🪑',
        image: 'assets/images/mese_2.jfif',
        description: 'Masă de lucru din oțel de înaltă rezistență. Suprafață stabilă și durabilă, ideală pentru ateliere și birouri. Finisaj profesional și design modern.'
      },
      {
        id: 3,
        name: 'Structură Metalică Personalizată',
        category: 'structuri',
        icon: '🏗️',
        image: 'assets/images/structuri_1.jfif',
        description: 'Structuri metalice custom pentru orice aplicație. Proiectare inginerească profesională și finisaj de cea mai înaltă calitate.'
      }
    ];
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.renderProducts();
    this.attachEventListeners();
    this.attachFilterListeners();
  }

  renderProducts() {
    const container = document.querySelector('.products-grid');
    if (!container) return;

    // Get all product cards
    const allCards = container.querySelectorAll('.product-card');
    
    // Filter and show/hide based on current filter
    allCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (this.currentFilter === 'all' || category === this.currentFilter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  attachEventListeners() {
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const productId = parseInt(card.dataset.productId);
        const product = this.products.find(p => p.id === productId);
        if (product) {
          this.openModal(product);
        }
      });
    });

    this.modalClose?.addEventListener('click', () => this.closeModal());
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  attachFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.renderProducts();
      });
    });
  }

  openModal(product) {
    if (!this.modal) return;

    const modalImage = this.modal.querySelector('.modal-image');
    const modalBody = this.modal.querySelector('.modal-body');
    
    if (modalImage) {
      modalImage.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    }
    
    if (modalBody) {
      modalBody.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Categorie:</strong> ${this.getCategoryName(product.category)}</p>
        <p>${product.description}</p>
        <p style="margin-top: 1.5rem; color: var(--color-primary);">
          <strong>Interesat?</strong> <a href="#contact">Contactați-ne pentru ofertă personalizată</a>
        </p>
      `;
    }

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  getCategoryName(category) {
    const names = {
      'mese': 'Mese',
      'rafturi': 'Rafturi',
      'structuri': 'Structuri',
      'suporturi': 'Suporturi', 
    };
    return names[category] || category;
  }
}

// ============== Configurator ==============
class Configurator {
  constructor() {
    this.preview = document.getElementById('configuratorPreview');
    this.furnitureSelect = document.getElementById('furnitureType');
    this.colorButtons = document.querySelectorAll('.color-option');
    this.finishSelect = document.getElementById('finishType');
    this.products = {
      table: { icon: '🪑', name: 'Masă' },
      shelf: { icon: '📦', name: 'Raft' },
      frame: { icon: '⚙️', name: 'Structură' }
    };
    this.colors = {
      black: { name: 'Negru', class: 'black' },
      steel: { name: 'Oțel', class: 'steel' },
      copper: { name: 'Cupru', class: 'copper' },
      silver: { name: 'Argintiu', class: 'silver' }
    };
    this.finishes = {
      matte: 'Mat',
      gloss: 'Lucios',
      brushed: 'Periat'
    };
    this.state = {
      furniture: 'table',
      color: 'black',
      finish: 'matte'
    };
    this.init();
  }

  init() {
    if (!this.preview) return;

    this.furnitureSelect?.addEventListener('change', (e) => {
      this.state.furniture = e.target.value;
      this.update();
    });

    this.finishSelect?.addEventListener('change', (e) => {
      this.state.finish = e.target.value;
      this.update();
    });

    this.colorButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.color = btn.dataset.color;
        this.update();
      });
    });

    this.update();
  }

  update() {
    if (this.preview) {
      const img = this.preview.querySelector('img');
      if (img) {
        this.preview.style.opacity = '0.8';
        setTimeout(() => {
          this.preview.style.opacity = '1';
        }, 100);
      }
    }
  }
}

// ============== Contact Form ==============
class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Validate form
    if (!this.validateForm(data)) {
      return;
    }

    // Show success message (in real app, would submit to backend/Netlify Forms)
    this.showStatus('success', 'Mulțumim pentru mesaj! Vă vom contacta în curând.');

    // Reset form
    this.form.reset();

    // Scroll to form
    setTimeout(() => {
      this.form.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  validateForm(data) {
    if (!data.name || data.name.trim() === '') {
      this.showStatus('error', 'Vă rugăm introduceți numele.');
      return false;
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      this.showStatus('error', 'Vă rugăm introduceți o adresă de email validă.');
      return false;
    }

    if (!data.message || data.message.trim() === '') {
      this.showStatus('error', 'Vă rugăm introduceți un mesaj.');
      return false;
    }

    return true;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showStatus(type, message) {
    const statusDiv = this.form?.querySelector('.form-status') || this.createStatusDiv();
    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;

    if (!this.form?.querySelector('.form-status')) {
      this.form?.appendChild(statusDiv);
    }

    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 5000);
  }

  createStatusDiv() {
    const div = document.createElement('div');
    div.className = 'form-status';
    return div;
  }
}

// ============== Active Navigation Link ==============
class ActiveNav {
  constructor() {
    this.navLinks = document.querySelectorAll('nav a:not(.logo)');
    this.init();
  }

  init() {
    this.updateActiveLink();
    window.addEventListener('scroll', () => this.updateActiveLink());

    // Also update on navigation click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => this.updateActiveLink(), 100);
      });
    });
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
}

// ============== Smooth Scroll Polyfill ==============
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// ============== Lazy Loading Images ==============
class LazyLoader {
  constructor() {
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
}

// ============== Performance Monitor ==============
class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    // Log Core Web Vitals (if available)
    if ('web-vital' in window) {
      console.log('Performance monitoring enabled');
    }
  }
}

// ============== Initialize All ==============
document.addEventListener('DOMContentLoaded', () => {
  console.log('BlackLineSteel Website Loading...');

  // Initialize all modules
  new ThemeManager();
  new MobileNav();
  new ScrollReveal();
  new ProductGallery();
  new Configurator();
  new ContactForm();
  new ActiveNav();
  new SmoothScroll();
  new LazyLoader();
  new PerformanceMonitor();

  console.log('BlackLineSteel Website Ready!');
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations
    document.body.style.animationPlayState = 'paused';
  } else {
    // Resume animations
    document.body.style.animationPlayState = 'running';
  }
});
