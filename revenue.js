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

      <!-- NOW (TRL‑2) -->
      <div class="solution-feature" style="margin-bottom: 20px;">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Now (TRL‑2): Survival & Validation</h3>
        </div>
        <div class="feature-body">
          <ul class="feature-points">
            <li><strong>Primary ask:</strong> Incubation seed fund, government R&D grants (DST, DRDO, BIRAC, iDEX), research fellowships.</li>
            <li><strong>Purpose:</strong> Cover lab consumables, basic testing, researcher stipends, and incubator access.</li>
            <li><strong>Commercial revenue:</strong> None. We do not sell anything today.</li>
          </ul>
        </div>
      </div>

      <!-- FUTURE PATHWAYS -->
      <div class="solution-feature" style="margin-bottom: 20px;">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>After Validation (Future Possibility — TRL‑5+)</h3>
        </div>
        <div class="feature-body">
          <p>If lab prototypes meet safety and energy‑density targets, we will explore one or more of these paths:</p>
          <ul class="feature-points">
            <li><strong>Co‑development fees:</strong> Paid pilot projects with defence PSUs, ISRO, or strategic OEMs who want to test our cells in their applications.</li>
            <li><strong>Technology licensing:</strong> License our cell design to a battery manufacturer in return for an upfront access fee and a running royalty per kWh produced.</li>
            <li><strong>Niche product sales:</strong> Manufacture small batches of high‑margin battery packs for aerospace, defence, and data‑center customers where safety commands a premium.</li>
            <li><strong>Volume manufacturing (long‑term):</strong> Only after achieving cost parity — produce cells for EV and grid storage at scale, either in‑house or through a joint venture.</li>
          </ul>
        </div>
      </div>

      <!-- PHASED REVENUE TABLE (new) -->
      <h3 style="margin-top: 30px;">Phased Revenue Pathways (Illustrative)</h3>
      <div class="revenue-table-scroll">
        <table class="revenue-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>TRL Range</th>
              <th>Primary Revenue Stream</th>
              <th>Indicative Scale</th>
              <th>Key Dependency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>R&D Survival</strong></td>
              <td>TRL 2→4</td>
              <td>Government Grants, Incubator Seed, Fellowships</td>
              <td>₹9–12 lakhs (non‑dilutive)</td>
              <td>Successful grant applications</td>
            </tr>
            <tr>
              <td><strong>Validation & Co‑Dev</strong></td>
              <td>TRL 4→6</td>
              <td>Co‑Development Fees, Milestone Payments, Angel/Seed</td>
              <td>Wil be calculated</td>
              <td>A‑sample delivery, safety test pass</td>
            </tr>
            <tr>
              <td><strong>Niche Premium Sales</strong></td>
              <td>TRL 6→7</td>
              <td>High‑Margin Pack Sales, Early Licensing Advances</td>
              <td>Will be calculate</td>
              <td>Certifications, pilot line operational</td>
            </tr>
            <tr>
              <td><strong>Licensing & Royalty</strong></td>
              <td>TRL 7→8</td>
              <td>IP Licensing (upfront + per‑kWh royalty)</td>
              <td>Will be Calculate</td>
              <td>Validated cell design, patent grants</td>
            </tr>
            <tr>
              <td><strong>Mass Production</strong></td>
              <td>TRL 8→9</td>
              <td>Volume Cell/Pack Manufacturing, EV/Grid Sales</td>
              <td>Will be Calculated</td>
              <td>GWh factory, cost parity, offtake agreements</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- HONEST STATEMENT -->
      <div class="rev-honest">
        <p>
          <strong>Honest statement:</strong> At TRL‑2, we do not have a revenue model in the traditional sense.
          We have a <strong>funding plan</strong> for the next 24 months and a <strong>monetisation hypothesis</strong>
          that will only be tested after the technology is experimentally validated.
        </p>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:16px;">
        <em>Detailed cost breakdown is in the <a href="#" onclick="document.querySelector('[data-section=costs]').click(); return false;" style="color:var(--accent-dark);">Costs</a> section.</em>
      </p>
    </section>
  `;

  // Inject styles once (reuse feature‑card styles from solution, plus table)
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
      /* Reuse solution-feature cards */
      .solution-feature {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 28px;
        margin-bottom: 20px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .feature-head {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 14px;
      }
      .feature-number {
        background: var(--accent);
        color: white;
        font-weight: 700;
        font-size: 0.8rem;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .feature-head h3 {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #1a1a1a;
      }
      .feature-body p {
        font-size: 0.9rem;
        color: #444;
        line-height: 1.6;
        margin-bottom: 10px;
      }
      .feature-points {
        list-style: none;
        padding: 0;
        margin-top: 10px;
      }
      .feature-points li {
        padding: 4px 0 4px 18px;
        position: relative;
        font-size: 0.85rem;
        color: #555;
        line-height: 1.5;
      }
      .feature-points li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        opacity: 0.7;
      }

      /* Revenue table – scrollable on mobile */
      .revenue-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 24px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .revenue-table {
        min-width: 700px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .revenue-table th {
        background: #0d1117;
        color: #e0e0e0;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        white-space: nowrap;
      }
      .revenue-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .revenue-table tr:last-child td {
        border-bottom: none;
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