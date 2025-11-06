class GlovieraProducts extends HTMLElement {
  connectedCallback(){
    this.products = [
      { id:'p1', title:'Glow Facewash', price:249, img:'https://via.placeholder.com/400x300?text=Facewash'},
      { id:'p2', title:'Repair Hair Serum', price:549, img:'https://via.placeholder.com/400x300?text=Serum'},
      { id:'p3', title:'Luxury Conditioner', price:399, img:'https://via.placeholder.com/400x300?text=Conditioner'}
    ];

    this.render();
    window.addEventListener('cart-updated', ()=> this.updateButtons());
    window.addEventListener('open-cart', ()=> this.openCart());
    // sign in/up events for demo modals
  }

  render(){
    this.innerHTML = '<div class="card"><h2>Premium Products</h2><div class="grid grid-3" id="productsGrid" style="margin-top:12px"></div></div>';
    const grid = this.querySelector('#productsGrid');
    this.products.forEach(p=>{
      const d = document.createElement('div');
      d.className = 'product-card card';
      d.innerHTML = \`
        <img src="\${p.img}" alt="\${p.title}">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:700">\${p.title}</div>
            <div class="price">₹\${p.price}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="add-cart btn-small" data-id="\${p.id}">Add to cart</button>
          <button class="buy-now btn-small" data-id="\${p.id}">Buy now</button>
        </div>
      \`;
      grid.appendChild(d);
    });

    this.querySelectorAll('.add-cart').forEach(btn=> btn.addEventListener('click', e=> this.addToCart(e)));
    this.querySelectorAll('.buy-now').forEach(btn=> btn.addEventListener('click', e=> this.buyNow(e)));
  }

  addToCart(e){
    const id = e.currentTarget.dataset.id;
    let cart = JSON.parse(localStorage.getItem('gloviera_cart')||'[]');
    const prod = this.products.find(p=>p.id===id);
    const found = cart.find(it=>it.id===id);
    if(found){ found.qty = (found.qty||1) + 1; } else { cart.push({ ...prod, qty:1 }); }
    localStorage.setItem('gloviera_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated'));
    alert('Added to cart');
  }

  buyNow(e){
    const id = e.currentTarget.dataset.id;
    const user = JSON.parse(localStorage.getItem('gloviera_user')||'null');
    if(!user || !user.name){
      // require login
      window.dispatchEvent(new CustomEvent('open-signin'));
      alert('Please sign in or create an account to purchase.');
      return;
    }
    const prod = this.products.find(p=>p.id===id);
    // simulate checkout with PhonePe (demo)
    this.simulatedPhonePeCheckout({ amount: prod.price, product: prod });
  }

  simulatedPhonePeCheckout({ amount, product }){
    // This is a local demo of the flow — replace with real PhonePe server integration later.
    const confirmed = confirm(\`Proceed to pay ₹\${amount} for \${product.title} via PhonePe (demo)?\`);
    if(!confirmed) return;
    // show processing...
    const loading = document.createElement('div'); loading.textContent='Processing payment...'; loading.style.padding='12px';
    this.appendChild(loading);
    setTimeout(()=>{
      loading.remove();
      // payment success (demo): store order
      const orders = JSON.parse(localStorage.getItem('gloviera_orders')||'[]');
      orders.push({ id:'ord_'+Date.now(), product, amount, date: new Date().toISOString(), user: JSON.parse(localStorage.getItem('gloviera_user')||'{}') });
      localStorage.setItem('gloviera_orders', JSON.stringify(orders));
      alert('Payment successful (demo). Order placed!');
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },1500);
  }

  openCart(){
    const cart = JSON.parse(localStorage.getItem('gloviera_cart')||'[]');
    let html = '<div style="max-width:600px;padding:12px">';
    if(cart.length===0) html += '<p>Your cart is empty.</p>';
    else {
      cart.forEach(item=>{
        html += \`<div style="display:flex;justify-content:space-between;padding:8px 0"><div>\${item.title} x \${item.qty}</div><div>₹\${item.price * item.qty}</div></div>\`;
      });
      const total = cart.reduce((s,i)=> s + i.price * (i.qty||1),0);
      html += \`<hr/><div style="display:flex;justify-content:space-between;padding-top:8px"><strong>Total</strong><strong>₹\${total}</strong></div>\`;
      html += '<div style="margin-top:12px"><button id="checkoutCart" class="btn btn-primary">Buy Cart (PhonePe demo)</button></div>';
    }
    html += '</div>';
    // show simple modal (browser confirm alternative)
    const modal = document.createElement('div');
    modal.className = 'card';
    modal.style.position='fixed'; modal.style.inset='20% 12%'; modal.style.zIndex=99999; modal.style.maxWidth='520px';
    modal.innerHTML = html + '<div style="text-align:right;margin-top:8px"><button id="closeCart" class="btn-small">Close</button></div>';
    document.body.appendChild(modal);
    modal.querySelector('#closeCart').addEventListener('click', ()=> modal.remove());
    const btn = modal.querySelector('#checkoutCart');
    if(btn) btn.addEventListener('click', ()=>{
      const user = JSON.parse(localStorage.getItem('gloviera_user')||'null');
      if(!user || !user.name){ alert('Sign in to buy.'); window.dispatchEvent(new CustomEvent('open-signin')); return; }
      // simulate payment for cart
      const total = cart.reduce((s,i)=> s + i.price * (i.qty||1),0);
      if(confirm('Pay ₹'+total+' via PhonePe (demo)?')){
        // success
        const orders = JSON.parse(localStorage.getItem('gloviera_orders')||'[]');
        orders.push({ id:'ord_'+Date.now(), items:cart, amount:total, date:new Date().toISOString(), user });
        localStorage.setItem('gloviera_orders', JSON.stringify(orders));
        localStorage.setItem('gloviera_cart', JSON.stringify([]));
        window.dispatchEvent(new CustomEvent('cart-updated'));
        alert('Payment success (demo). Order placed.');
        modal.remove();
      }
    });
  }

  updateButtons(){
    // noop for now
  }
}
customElements.define('gloviera-products', GlovieraProducts);