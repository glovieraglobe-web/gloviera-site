class GlovieraNav extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(235, 209, 209, 0.95);
          backdrop-filter: blur(6px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          animation: fadeInNav 0.8s ease-in-out;
          padding-top: calc(env(safe-area-inset-top, 0px) + 2px);
        }

        @keyframes fadeInNav {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spinY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes glowText {
          0% { text-shadow: 0 0 4px rgba(237,154,154,0.4), 0 0 8px rgba(237,154,154,0.3); }
          50% { text-shadow: 0 0 12px rgba(237,154,154,0.9), 0 0 22px rgba(237,154,154,0.45); }
          100% { text-shadow: 0 0 4px rgba(237,154,154,0.4), 0 0 8px rgba(237,154,154,0.3); }
        }

        @keyframes haloPulse {
          0% { filter: drop-shadow(0 0 2px rgba(237,154,154,0.35)); }
          50% { filter: drop-shadow(0 0 12px rgba(237,154,154,0.85)); }
          100% { filter: drop-shadow(0 0 2px rgba(237,154,154,0.35)); }
        }

        .nav-wrapper {
          position: relative;
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 8px 20px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 10px;
          perspective: 900px;
        }

        .logo {
          height: 52px;
          width: 52px;
          cursor: pointer;
          transition: transform .3s ease, filter .3s ease;
          transform-origin: center;
          transform-style: preserve-3d;
          animation: spinY 10s linear infinite, haloPulse 3.2s ease-in-out infinite;
          display: block;
        }

        .logo:hover {
          animation-play-state: paused;
          transform: scale(1.06) rotateY(0deg);
          filter: drop-shadow(0 0 8px rgba(237,154,154,0.6));
        }

        .brand {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #4f2222;
          letter-spacing: 1px;
          transition: color .3s ease, text-shadow .3s ease;
          text-transform: uppercase;
          animation: glowText 3s ease-in-out infinite;
        }

        .brand:hover {
          color: #ed9a9a;
          text-shadow: 0 0 6px rgba(237,154,154,0.6), 0 0 10px rgba(237,154,154,0.3);
        }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        :host([data-page="account"]) {
          background: #b08a8a;
        }

        :host([data-page="account"]) nav {
          padding: 6px 16px 8px;
          gap: 10px;
        }

        :host([data-page="account"]) .logo {
          height: 42px;
          width: 42px;
        }

        :host([data-page="account"]) .brand {
          font-size: 1.2rem;
          color: #fff;
        }

        :host([data-page="account"]) .nav-links {
          gap: 16px;
          flex-wrap: nowrap;
        }

        :host([data-page="account"]) .nav-link {
          color: rgba(255,255,255,0.92);
        }

        :host([data-page="account"]) .nav-link:hover {
          color: #fff;
        }

        :host([data-page="account"]) .btn-small {
          padding: 6px 12px;
          border-color: rgba(255,255,255,0.4);
          color: #fff;
        }

        :host([data-page="account"]) .btn-small:hover {
          background: #fff;
          color: #b08a8a;
        }

        :host([data-page="account"]) .cart-badge {
          background: #fff;
          color: #b08a8a;
        }

        :host([data-page="account"]) .menu-toggle {
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.15);
        }

        :host([data-page="account"]) .menu-toggle span {
          background: #fff;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 6px;
          border-radius: 8px;
          border: 1px solid rgba(79,34,34,0.2);
          background: rgba(255,255,255,0.9);
          cursor: pointer;
          transition: background .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        .menu-toggle span {
          display: block;
          height: 2px;
          background: #4f2222;
          border-radius: 999px;
          transition: transform .3s ease, opacity .3s ease;
        }

        .menu-toggle.open {
          background: #4f2222;
          border-color: #4f2222;
          box-shadow: 0 8px 18px rgba(79,34,34,0.25);
        }

        .menu-toggle.open span {
          background: #fff;
        }

        .menu-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .nav-link {
          text-decoration: none;
          color: #4f2222;
          font-weight: 600;
          transition: color .3s ease, text-shadow .3s ease;
        }

        .nav-link:hover {
          color: #ed9a9a;
          text-shadow: 0 0 6px rgba(237,154,154,0.6);
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-spacer {
          height: calc(env(safe-area-inset-top, 0px) + 2px);
          width: 100%;
        }

        @media (max-width: 768px) {
          nav { padding: 14px 16px 10px; }
          .menu-toggle { display: flex; }
          .logo { height: 40px; width: 40px; }
          .brand { font-size: 1.3rem; }
          .actions { margin-left: auto; }
          .nav-links {
            display: none;
            flex-direction: column;
            gap: 16px;
            position: absolute;
            top: calc(100% + 10px);
            right: 16px;
            left: 16px;
            padding: 18px;
            background: rgba(255,255,255,0.98);
            border-radius: 14px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.12);
            border: 1px solid rgba(237,154,154,0.3);
            animation: fadeInNav 0.3s ease;
          }
          .nav-links.open {
            display: flex;
          }
          .nav-link {
            width: 100%;
          }
        }

        .btn-small {
          background: transparent;
          border: 1px solid rgba(79,34,34,0.2);
          padding: 8px 14px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          color: #4f2222;
          transition: all .3s ease;
        }

        .btn-small:hover {
          background: #ed9a9a;
          color: #fff;
          box-shadow: 0 0 10px rgba(237,154,154,0.4);
        }

        .back-home {
          display: none;
          align-items: center;
          gap: 6px;
          background: #4f2222;
          color: #fff;
          border-color: transparent;
          text-decoration: none;
          box-shadow: 0 8px 18px rgba(79,34,34,0.2);
        }

        .back-home::before {
          content: "\\2190";
          font-weight: 700;
        }

        .back-home.show {
          display: inline-flex;
        }

        .cart-badge {
          background: #ed9a9a;
          color: white;
          border-radius: 999px;
          padding: 3px 7px;
          margin-left: 6px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        @media (max-width: 560px) {
          nav { flex-direction: column; align-items: stretch; gap: 12px; }
          .left { justify-content: space-between; width: 100%; }
          .actions {
            width: 100%;
            justify-content: space-between;
          }
          .btn-small {
            flex: 1;
            text-align: center;
          }
          .logo { height: 34px; width: 34px; }
        }

        :host([data-platform="ios"]) {
          padding-top: 0;
        }

        :host([data-platform="ios"]) .status-spacer {
          display: none;
          height: 0;
        }

        :host([data-platform="ios"]) nav {
          padding-top: calc(8px + env(safe-area-inset-top, 0px));
        }

        @media (max-width: 560px) {
          :host([data-platform="ios"]) nav {
            padding-top: calc(6px + env(safe-area-inset-top, 0px));
          }
        }
      </style>

      <div class="nav-wrapper">
        <div class="status-spacer" aria-hidden="true"></div>

        <nav>
          <div class="left">
            <img class="logo" src="images/logo.png" alt="Gloviéra Logo" id="logo">
            <div class="brand">GLOVIÉRA</div>
            <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="#appointments" class="nav-link">Services</a>
            <a href="products/index.html" class="nav-link">Products</a>
            <a href="about.html" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <div class="actions">
            <a href="/" class="btn-small back-home" id="backHomeBtn">Back to Home</a>
            <div id="auth-section"></div>
            <button id="cartBtn" class="btn-small">
              Cart <span id="cartCount" class="cart-badge">0</span>
            </button>
          </div>
        </nav>
      </div>
    `;

    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
    this.setAttribute('data-platform', isIOS ? 'ios' : 'default');
    const currentPath = (window.location.pathname || '').toLowerCase();
    this.isAccountPage = currentPath.includes('account');
    this.setAttribute('data-page', this.isAccountPage ? 'account' : 'default');

    this.menuToggle = this.shadowRoot.querySelector('.menu-toggle');
    this.navLinks = this.shadowRoot.querySelector('.nav-links');

    if (this.menuToggle && this.navLinks) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
      this.navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => this.closeMenu());
      });
    }

    this.handleResize = () => {
      if (window.innerWidth > 768) {
        this.closeMenu();
      }
    };

    window.addEventListener('resize', this.handleResize);

    this.renderAuth();

    // Logo click → scroll to top
    this.shadowRoot.querySelector('#logo').addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Cart button
    this.shadowRoot.querySelector('#cartBtn').addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('open-cart'));
    });

    // Events
    window.addEventListener('auth-change', () => this.renderAuth());
    window.addEventListener('cart-updated', () => this.updateCartCount());
    this.updateCartCount();
    this.toggleBackHome();
  }

  disconnectedCallback() {
    if (this.handleResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  toggleMenu() {
    if (!this.menuToggle || !this.navLinks) return;
    const isOpen = this.navLinks.classList.toggle('open');
    this.menuToggle.classList.toggle('open', isOpen);
    this.menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  closeMenu() {
    if (!this.menuToggle || !this.navLinks) return;
    this.navLinks.classList.remove('open');
    this.menuToggle.classList.remove('open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
  }

  updateCartCount() {
    const countEl = this.shadowRoot.getElementById('cartCount');
    const cart = JSON.parse(localStorage.getItem('gloviera_cart') || '[]');
    countEl.textContent = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  }

  toggleBackHome() {
    const backBtn = this.shadowRoot.getElementById('backHomeBtn');
    if (!backBtn) return;
    const shouldShow =
      typeof this.isAccountPage === 'boolean'
        ? this.isAccountPage
        : ((window.location.pathname || '').toLowerCase().includes('account'));
    backBtn.classList.toggle('show', shouldShow);
  }

  renderAuth() {
    const auth = this.shadowRoot.getElementById('auth-section');
    const user = JSON.parse(localStorage.getItem('gloviera_user') || 'null');
    auth.innerHTML = '';

    if (user && user.name) {
      const photo = user.photoURL || 'images/default-profile.png';

      auth.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${photo}" alt="Profile" id="profilePic"
               style="width:40px;height:40px;border-radius:50%;cursor:pointer;object-fit:cover;border:2px solid #ed9a9a;box-shadow:0 0 5px rgba(0,0,0,0.1)">
          <button id="logoutBtn" class="btn-small">Logout</button>
        </div>
      `;

      this.shadowRoot.querySelector('#logoutBtn').addEventListener('click', () => {
        // Ask app to sign out via Firebase if available
        window.dispatchEvent(new CustomEvent('request-logout'));
      });

      this.shadowRoot.querySelector('#profilePic').addEventListener('click', () => {
        window.location.href = 'account.html';
      });

    } else {
      auth.innerHTML = `
        <button id="signupBtn" class="btn-small">Sign Up</button>
        <button id="loginBtn" class="btn-small">Log In</button>
      `;

      this.shadowRoot.querySelector('#signupBtn').addEventListener('click', () => {
        if (typeof window.openAuth === 'function') {
          window.openAuth('signup');
        } else {
          window.dispatchEvent(new CustomEvent('open-signup'));
        }
      });

      this.shadowRoot.querySelector('#loginBtn').addEventListener('click', () => {
        if (typeof window.openAuth === 'function') {
          window.openAuth('login');
        } else {
          window.dispatchEvent(new CustomEvent('open-signin'));
        }
      });
    }
  }
}

customElements.define('gloviera-nav', GlovieraNav);
