function load_funding(container) {
  container.innerHTML = `
    <style>
      .fund-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .fund-header { margin-bottom: 28px; }
      .fund-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .fund-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }

      /* Reusing solution‑feature card style for consistency */
      .solution-feature {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 28px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
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
        padding: 5px 0 5px 20px;
        position: relative;
        font-size: 0.9rem;
        color: #555;
        line-height: 1.5;
      }
      .feature-points li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        opacity: 0.7;
      }

      /* Grant table – scrollable on mobile */
      .fund-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .fund-table {
        min-width: 650px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .fund-table th {
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
      .fund-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .fund-table tr:last-child td {
        border-bottom: none;
      }

      /* Timeline */
      .fund-timeline {
        margin: 16px 0;
      }
      .fund-timeline-item {
        display: flex;
        gap: 14px;
        margin-bottom: 12px;
        align-items: baseline;
      }
      .fund-timeline-marker {
        min-width: 10px;
        height: 10px;
        background: var(--accent);
        border-radius: 50%;
        margin-top: 5px;
      }
      .fund-timeline-content {
        flex: 1;
        font-size: 0.9rem;
        color: #444;
      }
      .fund-timeline-content strong {
        color: var(--accent-dark);
      }

      .highlight-box {
        background: #fdf8f0;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 16px 0;
        font-size: 0.9rem;
        color: #5a4620;
      }
    </style>
    <div class="fund-container">
      <div class="fund-header">
        <div class="fund-title">Funding & Grants</div>
        <div class="fund-subtitle">Current strategy: secure incubator support → win non‑dilutive grants → validate → raise equity later</div>
      </div>

      <!-- Current Position -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Current Financial Position</h3>
        </div>
        <div class="feature-body">
          <p>
            The venture is <strong>bootstrapped</strong> with personal savings. No external equity or debt has been raised. 
            At TRL‑2, the priority is to conserve capital and secure <strong>non‑dilutive grant funding</strong> through incubator support.
          </p>
          <div class="highlight-box">
            <strong>Why grants first?</strong> Indian deep‑tech grants (DST, BIRAC, DRDO) provide risk capital without equity dilution, enabling proof‑of‑concept before approaching VCs. Incubator acceptance is the key catalyst.
          </div>
        </div>
      </div>

      <!-- Grant Opportunities -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>Grant Opportunities (via Incubator)</h3>
        </div>
        <div class="feature-body">
          <div class="fund-table-scroll">
            <table class="fund-table">
              <thead>
                <tr><th>Scheme</th><th>Provider</th><th>Typical Amount</th><th>Purpose</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>NIDHI Prayas</td><td>DST</td><td>Up to ₹10 lakhs</td><td>Prototype development, lab consumables</td><td>Will be applied</td></tr>
                <tr><td>BIG (Biotechnology Ignition Grant)</td><td>BIRAC</td><td>Up to ₹50 lakhs</td><td>Early‑stage R&D (if chemistry qualifies as biotech‑adjacent)</td><td>Will be applied</td></tr>
                <tr><td>TDF (Technology Development Fund)</td><td>DRDO</td><td>Variable (crores for strategic tech)</td><td>Defence‑grade battery development</td><td>Will be applied</td></tr>
                <tr><td>Incubator Seed Fund</td><td>SINE / IIT Bombay / others</td><td>₹5‑10 lakhs</td><td>Lab setup, initial experiments, IP costs</td><td>Will be applied</td></tr>
                <tr><td>MSME / State Startup Grants</td><td>Maharashtra Govt.</td><td>₹5‑15 lakhs</td><td>Innovation promotion, prototype support</td><td>Will be applied</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-top:8px;">
            All grant applications are contingent on securing an incubator spot. The incubator provides the institutional backing, mentorship, and network required to successfully compete for these grants.
          </p>
        </div>
      </div>

      <!-- Roadmap -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">03</span>
          <h3>Funding Strategy Evolution</h3>
        </div>
        <div class="feature-body">
          <div class="fund-timeline">
            <div class="fund-timeline-item">
              <div class="fund-timeline-marker"></div>
              <div class="fund-timeline-content">
                <strong>Phase 0 (Now – TRL‑2):</strong> Personal bootstrapping. Applying to incubators. No external funding.
              </div>
            </div>
            <div class="fund-timeline-item">
              <div class="fund-timeline-marker"></div>
              <div class="fund-timeline-content">
                <strong>Phase 1 (TRL‑2 → 3) – Grant Stage:</strong> Upon incubator acceptance, apply for 2‑3 grants simultaneously. Target ₹9‑12 lakhs non‑dilutive capital for lab validation and first pouch cell.
              </div>
            </div>
            <div class="fund-timeline-item">
              <div class="fund-timeline-marker"></div>
              <div class="fund-timeline-content">
                <strong>Phase 2 (TRL‑4+) – Seed/Equity:</strong> After lab prototype validation, open angel/seed round for pilot line, certifications, and team. Amount determined after prototype results.
              </div>
            </div>
            <div class="fund-timeline-item">
              <div class="fund-timeline-marker"></div>
              <div class="fund-timeline-content">
                <strong>Phase 3 (TRL‑6+) – Series A & Strategic:</strong> Pilot line operational, first niche revenue. Raise capital for manufacturing scale‑up.
              </div>
            </div>
            <div class="fund-timeline-item">
              <div class="fund-timeline-marker"></div>
              <div class="fund-timeline-content">
                <strong>Phase 4 (TRL‑8+) – Project Finance / IPO:</strong> GWh‑scale factory, multi‑year offtake agreements. Capital from strategic investors, debt, or public markets.
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:12px;">
        This funding plan is entirely hypothetical and depends on technical progress, market conditions, and investor appetite. No fundraising commitments exist at this stage.
      </p>
    </div>
  `;
}
window.load_funding = load_funding;