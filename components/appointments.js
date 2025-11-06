const SERVICE_CATALOG = [
  ["Men's Haircut", "S1", 200],
  ["Men's Trimming", "S2", 100],
  ["Men's Blow Dry", "S3", 100],
  ["Men's Head Massage", "S4", 200],
  ["Men's Streax Spa", "S5", 400],
  ["Men's Matrix Spa", "S6", 500],
  ["Men's Loreal Spa", "S7", 700],
  ["Men's Streax colour", "S8", 400],
  ["Men's Matrix colour", "S9", 600],
  ["Men's Loreal (INOA)", "S10", 700],
  ["Men's Colour", "S11", 900],
  ["Men's Keratin", "S12", 1000],
  ["Men's Smoothening", "S13", 1000],
  ["Men's Papaya Facial", "S14", 700],
  ["Men's Wine Facial", "S15", 1000],
  ["Men's Ozone Facial", "S16", 2000],
  ["Mens's Kaya Facial", "S17", 2000],
  ["Men's O3+ Bridial Facial", "S18", 2000],
  ["Men's Cheryl's Facial", "S19", 2400],
  ["Men's Diamond Facial", "S20", 1500],
  ["Men's Oxy Facial", "S21", 1000],
  ["Men's Haldi Chandan Facial", "S22", 1000],
  ["Men's Fruit Bleach", "S23", 250],
  ["Men's Fem Bleach", "S24", 250],
  ["Men's Oxy Bleach", "S25", 400],
  ["Men's Gold Bleach", "S26", 400],
  ["Men's D-Tan Bleach", "S27", 600],
  ["Men's Cheryl Bleach", "S28", 600],
  ["Men's O3 Bleach", "S29", 400],
  ["Men's Cleanup", "S30", 500],
  ["Men's Fruit Cleanup", "S31", 500],
  ["Men's Papaya Cleanup", "S32", 600],
  ["Men's Lemon Cleanup", "S33", 600],
  ["Men's Oxy Cleanup", "S34", 600],
  ["Men's Diamond Cleanup", "S35", 600],
  ["Men's Wine Cleanup", "S36", 600],
  ["Men's Haldi Chandan Cleanup", "S37", 600],
  ["Men's Kaya Cleanup", "S38", 800],
  ["Men's Lotus Cleanup", "S39", 1100],
  ["Men's Ozone Cleanup", "S40", 1300],
  ["Men's O3+ Cleanup", "S41", 1600],
  ["Men's Cheryl's Cleanup", "S42", 1600],
  ["Women's Threading Eyebrows", "S43", 40],
  ["Women's Threading Upper lips", "S44", 20],
  ["Women's Threading Chin", "S45", 20],
  ["Women's Threading Forehead", "S46", 20],
  ["Women's Threading Side lock", "S47", 100],
  ["Women's Waxing Chin", "S48", 150],
  ["Women's Waxing Upper lips", "S49", 100],
  ["Women's Waxing Side lock", "S50", 200],
  ["Women's Waxing Arms", "S51", 400],
  ["Women's Waxing Half legs", "S52", 300],
  ["Women's Waxing Full legs", "S53", 600],
  ["Women's Waxing V wax", "S54", 800],
  ["Women's Waxing Full body", "S55", 2500],
  ["Women's Papaya Facial", "S56", 700],
  ["Women's Wine Facial", "S57", 1000],
  ["Women's Ozone Facial", "S58", 2000],
  ["Womens's Kaya Facial", "S59", 2000],
  ["Women's O3+ Bridial Facial", "S60", 2000],
  ["Women's Cheryl's Facial", "S61", 2400],
  ["Women's Diamond Facial", "S62", 1500],
  ["Women's Oxy Facial", "S63", 1000],
  ["Women's Haldi Chandan Facial", "S64", 1000],
  ["Women's Fruit Bleach", "S65", 250],
  ["Women's Fem Bleach", "S66", 250],
  ["Women's Oxy Bleach", "S67", 400],
  ["Women's Gold Bleach", "S68", 400],
  ["Women's D-Tan Bleach", "S69", 600],
  ["Women's Cheryl Bleach", "S70", 600],
  ["Women's O3 Bleach", "S71", 400],
  ["Women's Cleanup", "S72", 500],
  ["Women's Fruit Cleanup", "S73", 500],
  ["Women's Papaya Cleanup", "S74", 600],
  ["Women's Lemon Cleanup", "S75", 600],
  ["Women's Oxy Cleanup", "S76", 600],
  ["Women's Diamond Cleanup", "S77", 600],
  ["Women's Wine Cleanup", "S78", 600],
  ["Women's Haldi Chandan Cleanup", "S79", 600],
  ["Women's Kaya Cleanup", "S80", 800],
  ["Women's Lotus Cleanup", "S81", 1100],
  ["Women's Ozone Cleanup", "S82", 1300],
  ["Women's O3+ Cleanup", "S83", 1600],
  ["Women's Cheryl's Cleanup", "S84", 1600],
  ["Women's Trimming", "S85", 250],
  ["Women's Bob cut", "S86", 350],
  ["Women's Step layer", "S87", 350],
  ["Women's Layer Cut", "S88", 400],
  ["Women's Feather Cut", "S89", 500],
  ["Women's Wedge Cut", "S90", 600],
  ["Women's Blow Dry with Head Wash", "S91", 350],
  ["Women's Ironing", "S92", 400],
  ["Women's Curls with Ironing", "S93", 450],
  ["Women's Crimping", "S94", 500],
  ["Women's Curls", "S95", 550],
  ["Women's Hairdo", "S96", 650],
  ["Women's Highlights [Per streak]", "S97", 250],
  ["Women's Streax Root Touchup", "S98", 500],
  ["Women's Matrix Root Touchup", "S99", 600],
  ["Women's Loreal Root Touchup", "S100", 700],
  ["Women's Loreal (INOA) Root Touchup", "S101", 900],
  ["Women's Global Colour", "S102", 4500],
  ["Women's Head massage", "S103", 350],
  ["Women's Streak Spa", "S104", 500],
  ["Women's Matrix Spa", "S105", 600],
  ["Women's Loreal Spa", "S106", 700],
  ["Women's Dry Damage Hair treatment", "S107", 1500],
  ["Women's Anti dandruff Hair treatment", "S108", 1500],
  ["Women's Anti hairfall Hair treatment", "S109", 1500],
  ["Women's Kerafine Keratin Hair treatment", "S110", 4000],
  ["Women's GK Keratin Hair Treatment", "S111", 6000],
  ["Women's Matrix Smoothening Loreal Treatment", "S112", 4000],
  ["Women's Smoothening Schwarzkopf", "S113", 4500],
  ["Women's Smoothening Hair treatment", "S114", 5000],
  ["Women's Botox Hair treatment", "S115", 5000],
  ["Women's Kerabind Hair treatment", "S116", 7000],
  ["Women's Kerashine Hair treatment", "S117", 8000],
  ["Women's Nail Gel Polish", "S118", 700],
  ["Women's Nail Gel Overlays", "S119", 1200],
  ["Women's Nail Extension", "S120", 1800],
  ["Women's Nail Extensions Removal", "S121", 350],
  ["Women's Classic Pedicure", "S122", 450],
  ["Women's Crystal Pedicure", "S123", 650],
  ["Women's Classic Manicure", "S124", 350],
  ["Women's Crystal Manicure", "S125", 450],
  ["Women's Therapeutic Foot Massage", "S126", 350],
  ["Women's Kryolan Party Makeup", "S127", 2500],
  ["Women's Huda Beauty Party Makeup", "S128", 3000],
  ["Women's MAC Party Makeup", "S129", 3500],
  ["Women's HD Party Makeup", "S130", 5000],
  ["Women's Kryolan Engagement Makeup", "S131", 5000],
  ["Women's Huda Beauty Engagement Makeup", "S132", 6000],
  ["Women's MAC Engagement Makeup", "S133", 7000],
  ["Women's HD Engagement Makeup", "S134", 9000],
  ["Women's Kryolan Bridal Makeup", "S135", 20000],
  ["Women's Huda Beauty Bridal Makeup", "S136", 25000],
  ["Women's MAC Bridal Makeup", "S137", 30000],
  ["Women's HD Bridal Makeup", "S138", 40000],
];

const normalizeServiceKey = (label = '') =>
  label
    .normalize('NFKD')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/gi, '')
    .toLowerCase();

const SERVICE_LOOKUP = new Map(
  SERVICE_CATALOG.map(([label, code, price]) => [
    normalizeServiceKey(label),
    { label, code, price }
  ])
);

const SERVICE_ALIASES = new Map([
  [normalizeServiceKey("Men's Kaya Facial"), normalizeServiceKey("Mens's Kaya Facial")],
  [normalizeServiceKey("Men's O3+ Bridal Facial"), normalizeServiceKey("Men's O3+ Bridial Facial")],
  [normalizeServiceKey("Women's Kaya Facial"), normalizeServiceKey("Womens's Kaya Facial")],
  [normalizeServiceKey("Women's O3+ Bridal Facial"), normalizeServiceKey("Women's O3+ Bridial Facial")],
  [normalizeServiceKey("Women's Streax Spa"), normalizeServiceKey("Women's Streak Spa")],
  [normalizeServiceKey("Women's Kerabhin Hair treatment"), normalizeServiceKey("Women's Kerabind Hair treatment")]
]);

const resolveServiceMeta = (label) => {
  const key = normalizeServiceKey(label);
  let base = SERVICE_LOOKUP.get(key);
  if (!base) {
    const alias = SERVICE_ALIASES.get(key);
    if (alias) {
      base = SERVICE_LOOKUP.get(alias);
    }
  }
  if (base) {
    return { name: label, code: base.code, price: Number(base.price) || 0, canonicalName: base.label };
  }
  return { name: label, code: null, price: 0, missing: true };
};

const formatCurrencyINR = (amount) => {
  const safe = Number.isFinite(amount) ? amount : 0;
  return `₹${Math.round(safe).toLocaleString('en-IN')}`;
};

const escapeHtml = (input = '') =>
  String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const buildServiceSummaryHtml = (details) => {
  if (!details.length) {
    return '<p class="service-empty">No services selected.</p>';
  }
  const rows = details
    .map(item => {
      const name = escapeHtml(item.name || item.canonicalName || 'Service');
      const price = formatCurrencyINR(item.price || 0);
      const code = item.code ? `<span class="service-code">${escapeHtml(item.code)}</span>` : '';
      return `<tr>
        <td class="service-name">${name}${code}</td>
        <td class="service-price">${price}</td>
      </tr>`;
    })
    .join('');
  return `<table class="service-table" role="presentation" cellpadding="0" cellspacing="0">
    <tbody>${rows}</tbody>
  </table>`;
};

const computePricingSummary = (serviceNames, paymentMethod = '') => {
  const details = serviceNames.map(resolveServiceMeta);
  const subtotal = details.reduce((sum, item) => sum + (Number.isFinite(item.price) ? item.price : 0), 0);
  const normalizedPay = (paymentMethod || '').toLowerCase();
  const discountRate = normalizedPay.includes('pay now') ? 0.05 : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const finalTotal = Math.max(0, Math.round(subtotal - discountAmount));
  return {
    details,
    subtotal,
    discountRate,
    discountAmount,
    finalTotal,
    currency: 'INR',
    htmlBreakdown: buildServiceSummaryHtml(details)
  };
};

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
        .totals-card{
          margin-top:14px;
          padding:16px;
          border-radius:14px;
          background:#fff7f7;
          border:1px solid rgba(176,95,109,0.25);
          display:grid;
          gap:10px;
        }
        .total-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          font-size:15px;
        }
        .total-row span{color:#4f2222}
        .total-row strong{font-weight:600;color:#4f2222}
        .total-row.discount span{color:#b37070}
        .total-row.discount strong{color:#b37070}
        .total-row.total-due strong{font-size:18px;color:#b05f6d}
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
            <option value="Pay Now (Get 5% Off!)">Pay Now (Get 5% Off!)</option>
          </select>

          <div class="totals-card" id="totalsSummary" aria-live="polite">
            <div class="total-row">
              <span>Subtotal</span>
              <strong id="subtotalValue">₹0</strong>
            </div>
            <div class="total-row discount" id="discountRow" hidden>
              <span>Pay Now Discount</span>
              <strong id="discountValue">- ₹0</strong>
            </div>
            <div class="total-row total-due">
              <span>Total Payable</span>
              <strong id="finalValue">₹0</strong>
            </div>
          </div>

          <button type="submit">Confirm Booking</button>
          <div id="bookMsg">Appointment booked successfully! 🎉</div>
        </form>
      </div>
    `;

    // quick picks + chip-based selected services
    const serviceSelect = this.querySelector('#b_service');
    const selectedChips = this.querySelector('#selectedChips');
    const quickPicksEl = this.querySelector('#quickPicks');
    const paymentSelect = this.querySelector('#b_pay');
    const subtotalEl = this.querySelector('#subtotalValue');
    const discountRow = this.querySelector('#discountRow');
    const discountValueEl = this.querySelector('#discountValue');
    const finalValueEl = this.querySelector('#finalValue');

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

    const getSelectedNames = () => Array.from(selected);

    const renderTotals = () => {
      const summary = computePricingSummary(getSelectedNames(), paymentSelect.value);
      subtotalEl.textContent = formatCurrencyINR(summary.subtotal);
      if (summary.discountAmount > 0) {
        discountRow.hidden = false;
        const percentLabel = Math.round(summary.discountRate * 100);
        discountValueEl.textContent = `- ${formatCurrencyINR(summary.discountAmount)} (${percentLabel}% online offer)`;
      } else {
        discountRow.hidden = true;
      }
      finalValueEl.textContent = formatCurrencyINR(summary.finalTotal);
    };

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

    const refreshUI = () => {
      syncSelectFromSet();
      renderSelectedChips();
      renderQuickPicks();
      renderTotals();
    };

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
    paymentSelect.addEventListener('change', renderTotals);
    const APPOINTMENT_ENDPOINT = "https://script.google.com/macros/s/AKfycbyjpKr8sTnrlxOZl_Mc5MDsIYZvI7h2uysvY1N0L-dR352T3_1_IgB-Z2CTEDm65hUS/exec";

    const submitAppointment = async (payload) => {
      const response = await fetch(APPOINTMENT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      // Apps Script responses can be opaque when CORS headers are absent.
      if (response.type === "opaque") return true;

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        throw new Error(`HTTP ${response.status} ${errorText}`.trim());
      }

      const raw = await response.text().catch(() => "");
      if (!raw) return true;

      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        return true;
      }

      if (data.status && data.status !== "success") {
        throw new Error(data.message || "Unexpected response from server");
      }
      return true;
    };

    this.querySelector('#bookForm').addEventListener('submit', e=>{
      e.preventDefault();
      const name = this.querySelector('#b_name').value;
      const email = this.querySelector('#b_email').value;
      const phone = this.querySelector('#b_phone').value;
      const services = getSelectedNames();
      const date = this.querySelector('#b_date').value;
      const time = this.querySelector('#b_time').value;
      const pay = this.querySelector('#b_pay').value;
      const pricing = computePricingSummary(services, pay);

      const msg = this.querySelector('#bookMsg');
      msg.style.display = 'block';
      setTimeout(()=> msg.style.display = 'none',4000);

      submitAppointment({
        name,
        email,
        phone,
        services: pricing.details,
        serviceNames: services,
        serviceSummaryHtml: pricing.htmlBreakdown,
        date,
        time,
        pay,
        totals: {
          subtotal: pricing.subtotal,
          discountPercent: Math.round(pricing.discountRate * 100),
          discountAmount: pricing.discountAmount,
          finalTotal: pricing.finalTotal,
          currency: pricing.currency
        }
      })
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
