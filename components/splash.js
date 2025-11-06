class GlovieraSplash extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          position:fixed;inset:0;background:#c4b2b1;display:flex;align-items:center;justify-content:center;z-index:9999;opacity:1;transition:opacity 0.9s ease;
        }
        .logo-container{text-align:center;animation:fadeIn 1.2s ease}
        .logo{height:120px;width:auto;margin-bottom:12px;animation:pulse 2s infinite}
        .tag{color:#4f2222;font-weight:700;letter-spacing:2px}
        @keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.03)}100%{transform:scale(1)}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        .fade-out{opacity:0;pointer-events:none}
      </style>
      <div class="logo-container">
        <img class="logo" src="./images/logo.png" alt="Gloviéra Logo">
        <div class="tag">Glow Beyond Beauty</div>
      </div>
    `;

    // auto fade
    setTimeout(()=> this.fadeOut(), 2000);
  }

  fadeOut(){
    this.classList && this.classList.add && this.classList.add('fade-out');
    // remove after fade, reveal app
    setTimeout(()=>{
      this.remove();
      const app = document.getElementById('app-container');
      if(app) app.classList.remove('hidden');
    },900);
  }
}
customElements.define('gloviera-splash', GlovieraSplash);