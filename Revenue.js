function load_revenue(mainContainer) {
  mainContainer.innerHTML = `
    <section id="revenue-section">
      <h2>Revenue Model</h2>
      <p class="rev-intro">
        We are at <strong>TRL‑2 — concept stage</strong>. We have no product, no prototype, no revenue.
        Our immediate focus is to secure <strong>non‑dilutive grants and incubator support</strong> to
        survive and validate the core chemistry. The following are not financial projections — they are
        <strong>potential monetisation pathways</strong> that may become relevant only if the technology
        is successfully developed and scaled.
      </p>

      <div class="rev-block">
        <h3>Now (TRL‑2): Survival & Validation</h3>
        <ul class="bullet-list">
          <li><strong>Primary ask:</strong> Incubation seed fund, government R&D grants (DST, DRDO, BIRAC, iDEX), research fellowships.</li>
          <li><strong>Purpose:</strong> Cover lab consumables, basic testing, researcher stipends, and incubator access.</li>
          <li><strong>Commercial revenue:</strong> None. We do not sell anything today.</li>
        </ul>
      </div>

      <div class="rev-block">
        <h3>After Validation (Future Possibility — TRL‑5+)</h3>
        <p>
          If lab prototypes meet safety and energy‑density targets, we will explore one or more of these paths:
        </p>
        <ul class="bullet-list">
          <li><strong>Co‑development fees:</strong> Paid pilot projects with defence PSUs, ISRO, or strategic OEMs who want to test our cells in their applications.</li>
          <li><strong>Technology licensing:</strong> License our cell design to a battery manufacturer in return for an upfront access fee and a running royalty per kWh produced.</li>
          <li><strong>Niche product sales:</strong> Manufacture small batches of high‑margin battery packs for aerospace, defence, and data‑center customers where safety commands a premium.</li>
          <li><strong>Volume manufacturing (long‑term):</strong> Only after achieving cost parity — produce cells for EV and grid storage at scale, either in‑house or through a joint venture.</li>
        </ul>
      </div>

      <div class="rev-honest">
        <p>
          <strong>Honest statement:</strong> At TRL‑2, we do not have a revenue model in the traditional sense.
          We have a <strong>funding plan</strong> for the next 24 months and a <strong>monetisation hypothesis</strong>
          that will only be tested after the technology is experimentally validated.
        </p>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        <em>Detailed cost breakdown and capital requirements are in the <a href="#" onclick="document.querySelector('[data-section=costs]').click(); return false;" style="color:var(--accent-dark);">Costs</a> section.</em>
      </p>
    </section>
  `;
  
  // Inject styles once
  if (!document.getElementById('revenue-style')) {
    const style = document.createElement('style');
    style.id = 'revenue-style';
    style.textContent = `
      .rev-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 28px;
        max-width: 900px;
        line-height: 1.6;
      }
      .rev-block {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 22px;
        margin-bottom: 20px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .rev-block h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 10px;
        color: #1a1a1a;
      }
      .rev-block p {
        font-size: 0.9rem;
        color: #444;
        line-height: 1.5;
        margin-bottom: 8px;
      }
      .bullet-list {
        list-style: none;
        padding: 0;
      }
      .bullet-list li {
        padding: 5px 0 5px 18px;
        position: relative;
        font-size: 0.9rem;
        color: #555;
        line-height: 1.5;
      }
      .bullet-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
      }
      .rev-honest {
        background: #fdf8f0;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 20px 0;
        font-size: 0.92rem;
        color: #5a4620;
        line-height: 1.5;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_revenue = load_revenue;