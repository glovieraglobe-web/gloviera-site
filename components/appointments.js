class GlovieraAppointments extends HTMLElement {
  connectedCallback() {
    // Synced with images/salon services  - Sheet1.pdf (S1–S43)
    const servicesMen = [
      "Men's Haircut",
      "Men's Trimming",
      "Men's Blow Dry",
      "Men's Head Massage",
      "Men's Streax Spa",
      "Men's Matrix Spa",
      "Men's Loreal Spa",
      "Men's Streax colour",
      "Men's Matrix colour",
      "Men's Loreal (INOA)",
      "Men's Colour",
      "Men's Keratin",
      "Men's Smoothening",
      "Men's Papaya Facial",
      "Men's Wine Facial",
      "Men's Ozone Facial",
      "Men's Kaya Facial",
      "Men's O3+ Bridal Facial",
      "Men's Cheryl's Facial",
      "Men's Diamond Facial",
      "Men's Oxy Facial",
      "Men's Haldi Chandan Facial",
      "Men's Fruit Bleach",
      "Men's Fem Bleach",
      "Men's Oxy Bleach",
      "Men's Gold Bleach",
      "Men's D-Tan Bleach",
      "Men's Cheryl Bleach",
      "Men's O3 Bleach",
      "Men's Cleanup",
      "Men's Fruit Cleanup",
      "Men's Papaya Cleanup",
      "Men's Lemon Cleanup",
      "Men's Oxy Cleanup",
      "Men's Diamond Cleanup",
      "Men's Wine Cleanup",
      "Men's Haldi Chandan Cleanup",
      "Men's Kaya Cleanup",
      "Men's Lotus Cleanup",
      "Men's Ozone Cleanup",
      "Men's O3+ Cleanup",
      "Men's Cheryl's Cleanup"
    ];
    const servicesWomen = [
      // S43–S86: threading, waxing, facials, bleach, cleanup
      "Women's Threading Eyebrows",
      "Women's Threading Upper lips",
      "Women's Threading Chin",
      "Women's Threading Forehead",
      "Women's Threading Side lock",
      "Women's Waxing Chin",
      "Women's Waxing Upper lips",
      "Women's Waxing Side lock",
      "Women's Waxing Arms",
      "Women's Waxing Half legs",
      "Women's Waxing Full legs",
      "Women's Waxing V wax",
      "Women's Waxing Full body",
      "Women's Papaya Facial",
      "Women's Wine Facial",
      "Women's Ozone Facial",
      "Women's Kaya Facial",
      "Women's O3+ Bridal Facial",
      "Women's Cheryl's Facial",
      "Women's Diamond Facial",
      "Women's Oxy Facial",
      "Women's Haldi Chandan Facial",
      "Women's Fruit Bleach",
      "Women's Fem Bleach",
      "Women's Oxy Bleach",
      "Women's Gold Bleach",
      "Women's D-Tan Bleach",
      "Women's Cheryl Bleach",
      "Women's O3 Bleach",
      "Women's Cleanup",
      "Women's Fruit Cleanup",
      "Women's Papaya Cleanup",
      "Women's Lemon Cleanup",
      "Women's Oxy Cleanup",
      "Women's Diamond Cleanup",
      "Women's Wine Cleanup",
      "Women's Haldi Chandan Cleanup",
      "Women's Kaya Cleanup",
      "Women's Lotus Cleanup",
      "Women's Ozone Cleanup",
      "Women's O3+ Cleanup",
      "Women's Cheryl's Cleanup",
      "Women's Trimming",
      "Women's Bob cut",
      // S87–S129: hair services, treatments, nails, manicure/pedicure, party makeup
      "Women's Step layer",
      "Women's Layer Cut",
      "Women's Feather Cut",
      "Women's Wedge Cut",
      "Women's Blow Dry with Head Wash",
      "Women's Ironing",
      "Women's Curls with Ironing",
      "Women's Crimping",
      "Women's Curls",
      "Women's Hairdo",
      "Women's Highlights [Per streak]",
      "Women's Streax Root Touchup",
      "Women's Matrix Root Touchup",
      "Women's Loreal Root Touchup",
      "Women's Loreal (INOA) Root Touchup",
      "Women's Global Colour",
      "Women's Head massage",
      "Women's Streax Spa",
      "Women's Matrix Spa",
      "Women's Loreal Spa",
      "Women's Dry Damage Hair treatment",
      "Women's Anti dandruff Hair treatment",
      "Women's Anti hairfall Hair treatment",
      "Women's Kerafine Keratin Hair treatment",
      "Women's GK Keratin Hair Treatment",
      "Women's Matrix Smoothening Loreal Treatment",
      "Women's Smoothening Schwarzkopf",
      "Women's Smoothening Hair treatment",
      "Women's Botox Hair treatment",
      "Women's Kerabhin Hair treatment",
      "Women's Kerashine Hair treatment",
      "Women's Nail Gel Polish",
      "Women's Nail Gel Overlays",
      "Women's Nail Extension",
      "Women's Nail Extensions Removal",
      "Women's Classic Pedicure",
      "Women's Crystal Pedicure",
      "Women's Classic Manicure",
      "Women's Crystal Manicure",
      "Women's Therapeutic Foot Massage",
      "Women's Kryolan Party Makeup",
      "Women's Huda Beauty Party Makeup",
      "Women's MAC Party Makeup",
      // S130–S138: engagement/bridal/HD
      "Women's HD Party Makeup",
      "Women's Kryolan Engagement Makeup",
      "Women's Huda Beauty Engagement Makeup",
      "Women's MAC Engagement Makeup",
      "Women's HD Engagement Makeup",
      "Women's Kryolan Bridal Makeup",
      "Women's Huda Beauty Bridal Makeup",
      "Women's MAC Bridal Makeup",
      "Women's HD Bridal Makeup"
    ];

    this.innerHTML = `
      <style>
        .card {
          max-width: 850px;
          margin: 50px auto;
          background: white;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          font-family: 'Poppins', sans-serif;
        }
        h2 {text-align:center;color:#b05f6d;margin-bottom:10px}
        h3 {color:#444;}
        .service-section {display:flex;gap:25px;flex-wrap:wrap;margin-top:12px}
        .service-column {flex:1;min-width:260px}
        .muted{color:#6b6b6b;font-size:13px}
        /* chips */
        .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
        .chip{display:inline-flex;align-items:center;gap:6px;padding:8px 10px;border-radius:999px;border:1px solid #e6d3d3;background:#fff7f7;color:#4f2222;cursor:pointer;font-size:13px}
        .chip.active{background:#b05f6d;color:#fff;border-color:#b05f6d}
        .chip .remove{background:transparent;border:none;color:inherit;font-weight:700;cursor:pointer;line-height:1}
        .service-list{display:none}
        #bookForm {
          display:grid;
          gap:12px;
          margin-top:18px;
        }
        input, select {
          padding:10px;
          border-radius:8px;
          border:1px solid #ccc;
          font-size:15px;
          width:100%;
          box-sizing:border-box;
        }
        select[multiple] {
          min-height:220px;
        }
        button {
          padding:12px;
          border:none;
          border-radius:10px;
          background:linear-gradient(135deg,#b05f6d,#eeb6c3);
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:0.3s;
        }
        button:hover {transform:scale(1.03);}
        #bookMsg {color:green;display:none;font-weight:500;margin-top:5px;}
        @media (max-width: 768px) {
          .card {
            margin: 30px 18px;
            padding: 20px;
          }
          .service-section {
            gap: 18px;
          }
        }
        @media (max-width: 560px) {
          .card {
            margin: 20px 14px;
            padding: 18px;
          }
          .service-section {
            flex-direction: column;
          }
          .service-column {
            min-width: auto;
            width: 100%;
          }
          button {
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          select[multiple] {
            min-height:180px;
          }
        }
      </style>

      <div class="card">
        <h2>✨ Book Your Appointment</h2>
        <div class="service-section">
          <div class="service-column">
            <h3>Quick Picks</h3>
            <p class="muted">Tap to add. Find more in "Select Services".</p>
            <div id="quickPicks" class="chips"></div>
          </div>
          <div class="service-column">
            <h3>Added Services</h3>
            <p class="muted">Click × to remove.</p>
            <div id="selectedChips" class="chips"></div>
          </div>
        </div>

        <h3 style="margin-top:25px;">Appointment Details</h3>
        <form id="bookForm">
          <input placeholder="Full Name" id="b_name" required />
          <input placeholder="Email Address" id="b_email" type="email" required />
          <input placeholder="Phone Number" id="b_phone" type="tel" required pattern="[0-9]{10}" />
          
          <label>Select Services:</label>
          <p class="muted" style="margin:0 0 6px">Click items to select multiple, click again to deselect. Or use Quick Picks above.</p>
          <select id="b_service" multiple size="12" required aria-label="Select multiple services by clicking options">
            ${[...servicesMen, ...servicesWomen].map(s=>`<option>${s}</option>`).join('')}
          </select>

          <label>Date:</label>
          <input type="date" id="b_date" required min="${this.getToday()}" max="${this.getMaxDate(7)}"/>

          <label>Time:</label>
          <input type="time" id="b_time" min="08:00" max="23:00" required/>

          <label>Payment Method:</label>
          <select id="b_pay" required>
            <option value="Pay at Salon">Pay at Salon</option>
            <option value="Pay Now">Pay Now (Get 5% Off!)</option>
          </select>

          <button type="submit">Confirm Booking</button>
          <div id="bookMsg">Appointment booked successfully! 🎉</div>
        </form>
      </div>
    `;

    // quick picks + chip-based selected services
    const serviceSelect = this.querySelector('#b_service');
    const selectedChips = this.querySelector('#selectedChips');
    const quickPicksEl = this.querySelector('#quickPicks');

    const allServices = [...servicesMen, ...servicesWomen];
    const quickPicks = [
      "Men's Haircut",
      "Men's Head Massage",
      "Men's Keratin",
      "Men's Smoothening",
      "Women's Threading Eyebrows",
      "Women's Waxing Full body",
      "Women's Diamond Facial",
      "Women's Oxy Facial",
      "Women's Kerafine Keratin Hair treatment",
      "Women's Classic Pedicure",
      "Women's Classic Manicure",
      "Women's HD Bridal Makeup"
    ].filter(s => allServices.includes(s));

    let selected = new Set(Array.from(serviceSelect.selectedOptions).map(o=>o.value));

    const syncSelectFromSet = () => {
      Array.from(serviceSelect.options).forEach(o => { o.selected = selected.has(o.value); });
    };

    const renderSelectedChips = () => {
      selectedChips.innerHTML = selected.size
        ? Array.from(selected).map(s=>`<span class="chip" data-value="${s}">${s}<button class="remove" aria-label="Remove">×</button></span>`).join('')
        : '<span class="muted">No services added yet.</span>';
    };

    const renderQuickPicks = () => {
      quickPicksEl.innerHTML = quickPicks.map(s=>`<span class="chip${selected.has(s)?' active':''}" data-value="${s}">${s}</span>`).join('');
    };

    const refreshUI = () => { syncSelectFromSet(); renderSelectedChips(); renderQuickPicks(); };

    // Allow simple click-to-toggle for multi-select (no Ctrl/Cmd needed)
    serviceSelect.addEventListener('mousedown', (e) => {
      const opt = e.target;
      if (opt && opt.tagName === 'OPTION') {
        e.preventDefault();
        opt.selected = !opt.selected;
        serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    serviceSelect.addEventListener('change', () => {
      selected = new Set(Array.from(serviceSelect.selectedOptions).map(o=>o.value));
      refreshUI();
    });

    quickPicksEl.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const val = chip.dataset.value;
      if (selected.has(val)) selected.delete(val); else selected.add(val);
      refreshUI();
    });

    selectedChips.addEventListener('click', (e) => {
      if (!e.target.classList.contains('remove')) return;
      const val = e.target.parentElement.dataset.value;
      selected.delete(val);
      refreshUI();
    });

    refreshUI();
    const APPOINTMENT_ENDPOINT = "https://hook.eu2.make.com/t4iddm5seu8scwjknftkfykr8sarktyy";

    const submitAppointment = async (payload) => {
      const res = await fetch(APPOINTMENT_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${errorText}`.trim());
      }

      // Make webhook returns an empty body by default; treat that as success.
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json().catch(() => ({}));
        if (data.status && data.status !== "success") {
          throw new Error(data.message || "Unexpected response from server");
        }
      }
      return true;
    };

    this.querySelector('#bookForm').addEventListener('submit', e=>{
      e.preventDefault();
      const name = this.querySelector('#b_name').value;
      const email = this.querySelector('#b_email').value;
      const phone = this.querySelector('#b_phone').value;
      const services = Array.from(serviceSelect.selectedOptions).map(o=>o.value);
      const date = this.querySelector('#b_date').value;
      const time = this.querySelector('#b_time').value;
      const pay = this.querySelector('#b_pay').value;

      const msg = this.querySelector('#bookMsg');
      msg.style.display = 'block';
      setTimeout(()=> msg.style.display = 'none',4000);

      submitAppointment({ name, email, phone, services, date, time, pay })
        .then(() => {
          alert("✅ Appointment confirmed! Check your email for details.");
        })
        .catch(err => {
          console.warn("Appointment submission failed:", err);
          const message = (err && err.message) || String(err || '');
          alert("Booking failed: " + message);
        });

      e.target.reset();
      selected.clear();
      refreshUI();
    });
  }

  getToday(){
    return new Date().toISOString().split('T')[0];
  }

  getMaxDate(days){
    const max = new Date();
    max.setDate(max.getDate()+days);
    return max.toISOString().split('T')[0];
  }
}

customElements.define('gloviera-appointments', GlovieraAppointments);
