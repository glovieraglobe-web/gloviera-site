// Ensure global checkout config always exists (works even with cached HTML)
window.__GLOVIERA_CONFIG__ = Object.assign({}, window.__GLOVIERA_CONFIG__ || {});
window.__GLOVIERA_CONFIG__.mockPayments = true;
window.__GLOVIERA_CONFIG__.allowMockOnFailure = true;
window.GLOVIERA_FORCE_PAYMENT_MOCK = true;

window.GLOVIERA_ORDER_WEBHOOK =
  window.GLOVIERA_ORDER_WEBHOOK ||
  'https://script.google.com/macros/s/AKfycbyahuy1wdz4eAd0cpuwdfpk794RxZlGk-8767V04Vz_x3KHpoAdEkCcVgsaPA5T3Kz8ng/exec';

function modal(content) {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = 'rgba(0,0,0,0.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '99999';

  overlay.innerHTML = `
    <div style="background:white;padding:24px;border-radius:12px;max-width:420px;width:100%;">
      ${content}
      <div style="text-align:right;margin-top:16px">
        <button id="closeModal" class="btn-small">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('#closeModal').addEventListener('click', () => overlay.remove());
  return overlay;
}

// Sign Up
window.addEventListener('open-signup', () => {
  const m = modal(`
    <h3>Create Account</h3>
    <form id="signupForm" style="display:grid;gap:10px;margin-top:10px">
      <input id="su_name" placeholder="Full name" required>
      <input id="su_phone" placeholder="Phone number" required>
      <input id="su_pass" type="password" placeholder="Password" required>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  `);
  m.querySelector('#signupForm').addEventListener('submit', e => {
    e.preventDefault();
    const user = {
      name: m.querySelector('#su_name').value.trim(),
      phone: m.querySelector('#su_phone').value.trim(),
      password: m.querySelector('#su_pass').value.trim()
    };
    localStorage.setItem('gloviera_user', JSON.stringify(user));
    alert('Account created!');
    window.dispatchEvent(new CustomEvent('auth-change'));
    m.remove();
  });
});

// Sign In
window.addEventListener('open-signin', () => {
  const m = modal(`
    <h3>Sign In</h3>
    <form id="signinForm" style="display:grid;gap:10px;margin-top:10px">
      <input id="si_phone" placeholder="Phone number" required>
      <input id="si_pass" type="password" placeholder="Password" required>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  `);
  m.querySelector('#signinForm').addEventListener('submit', e => {
    e.preventDefault();
    const phone = m.querySelector('#si_phone').value.trim();
    const pass = m.querySelector('#si_pass').value.trim();
    const user = JSON.parse(localStorage.getItem('gloviera_user') || 'null');
    if (!user || user.phone !== phone || user.password !== pass) {
      alert('Invalid credentials');
      return;
    }
    alert('Signed in successfully!');
    window.dispatchEvent(new CustomEvent('auth-change'));
    m.remove();
  });
});

// Trigger update for cart
window.addEventListener('load', () => {
  window.dispatchEvent(new CustomEvent('cart-updated'));
});
