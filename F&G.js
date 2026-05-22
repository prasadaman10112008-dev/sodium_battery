function load_funding(container) {
  container.innerHTML = `
    <style>
      .fund-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .fund-header { margin-bottom: 30px; }
      .fund-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .fund-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }
      .phase-block { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
      .phase-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 18px; display: flex; align-items: center; gap: 12px; }
      .status-badge { display: inline-block; padding: 4px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.4px; }
      .planned-badge { background: #b8860b20; color: #b8860b; border: 1px solid #b8860b40; }
      .future-badge { background: #6c757d20; color: #6c757d; border: 1px solid #6c757d30; }
      .bullet-list { list-style: none; padding: 0; }
      .bullet-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.92rem; color: #333; }
      .bullet-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }
      .highlight-box { background: #fdf8f0; border-left: 4px solid var(--accent); padding: 16px 20px; border-radius: 0 12px 12px 0; margin: 20px 0; }
      .grant-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
      .grant-card { background: #f9f9f9; border-radius: 12px; padding: 16px; border: 1px solid var(--border); }
      .grant-card h4 { font-size: 0.95rem; font-weight: 600; margin: 0 0 6px; }
      .grant-card p { font-size: 0.85rem; color: #555; }
      .table-wrap { overflow-x: auto; margin: 14px 0; }
      table { width: 100%; border-collapse: collapse; background: var(--surface); border-radius: var(--radius); overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.03); font-size: 0.82rem; }
      th { background: #0d1117; color: #e0e0e0; padding: 10px 12px; text-align: left; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; }
      td { padding: 8px 12px; border-bottom: 1px solid var(--border); }
      tr:last-child td { border-bottom: none; }
      .fund-timeline { margin: 16px 0; }
      .fund-timeline-item { display: flex; gap: 16px; margin-bottom: 12px; align-items: baseline; }
      .fund-timeline-marker { min-width: 12px; height: 12px; background: var(--accent); border-radius: 50%; margin-top: 5px; }
      .fund-timeline-content { flex: 1; }
      .fund-timeline-content strong { color: var(--accent-dark); }
    </style>
    <div class="fund-container">
      <div class="fund-header">
        <div class="fund-title">Funding & Grants</div>
        <div class="fund-subtitle">Current strategy: secure incubator support → win non‑dilutive grants → validate → raise equity later</div>
      </div>

      <!-- Current Status -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-badge planned-badge">PRE‑SEED</span> Current Financial Position
        </div>
        <p style="font-size:0.95rem; color:#444;">
          The venture is <strong>bootstrapped</strong> with personal funds. No external equity or debt has been raised. 
          At TRL‑2, the priority is to conserve capital and secure <strong>non‑dilutive grant funding</strong> through incubator support. 
          Commercial fundraising (angel/seed) is deferred until the technology reaches TRL‑4 and a lab‑validated prototype exists, 
          which will unlock higher valuation and lower investor risk.
        </p>
        <div class="highlight-box">
          <strong>Why grants first?</strong> Indian deep‑tech grants (DST, BIRAC, DRDO) are designed for early‑stage R&D. They provide risk capital 
          without equity dilution, enabling the team to achieve proof‑of‑concept before approaching VCs. Incubator acceptance is the primary 
          catalyst for accessing these grants.
        </div>
      </div>

      <!-- Grant Targets (Updated statuses) -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-badge planned-badge">TARGET</span> Grant Opportunities (via Incubator)
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Scheme</th><th>Provider</th><th>Typical Amount</th><th>Purpose</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>NIDHI Prayas</td>
                <td>DST</td>
                <td>Up to ₹10 lakhs</td>
                <td>Prototype development, lab consumables</td>
                <td>Will be applied</td>
              </tr>
              <tr>
                <td>BIG (Biotechnology Ignition Grant)</td>
                <td>BIRAC</td>
                <td>Up to ₹50 lakhs</td>
                <td>Early‑stage R&D (if chemistry qualifies as biotech‑adjacent)</td>
                <td>Will be applied</td>
              </tr>
              <tr>
                <td>TDF (Technology Development Fund)</td>
                <td>DRDO</td>
                <td>Variable (crores for strategic tech)</td>
                <td>Defence‑grade battery development</td>
                <td>Will be applied</td>
              </tr>
              <tr>
                <td>Incubator Seed Fund</td>
                <td>SINE / IIT Bombay</td>
                <td>₹5‑10 lakhs</td>
                <td>Lab setup, initial experiments, IP costs</td>
                <td>Will be applied</td>
              </tr>
              <tr>
                <td>MSME / State Startup Grants</td>
                <td>Maharashtra Govt.</td>
                <td>₹5‑15 lakhs</td>
                <td>Innovation promotion, prototype support</td>
                <td>Will be applied</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted);">
          All grant applications are contingent on securing an incubator spot. The incubator provides the institutional backing, 
          mentorship, and network required to successfully compete for these grants.
        </p>
      </div>

      <!-- Future Funding Roadmap (Updated phase amounts) -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-badge future-badge">ROADMAP</span> Funding Strategy Evolution
        </div>
        <div class="fund-timeline">
          <div class="fund-timeline-item">
            <div class="fund-timeline-marker"></div>
            <div class="fund-timeline-content">
              <strong>Phase 0 (Now – TRL‑2)</strong><br>
              Personal bootstrapping. Apply for incubator. No external funding.
            </div>
          </div>
          <div class="fund-timeline-item">
            <div class="fund-timeline-marker"></div>
            <div class="fund-timeline-content">
              <strong>Phase 1 (TRL‑2 → 3) – Grant Stage</strong><br>
              Upon incubator acceptance: apply for 2‑3 grants simultaneously. Use funds for lab validation, 
              coin‑cell testing, and prototype materials. Target ₹9‑12 lakhs non‑dilutive capital.
            </div>
          </div>
          <div class="fund-timeline-item">
            <div class="fund-timeline-marker"></div>
            <div class="fund-timeline-content">
              <strong>Phase 2 (TRL‑4+) – Seed/Equity Stage</strong><br>
              After lab prototype validation: open angel/seed round to fund pilot line, certifications, and team expansion. 
              Funding amount to be determined after prototype validation.
            </div>
          </div>
          <div class="fund-timeline-item">
            <div class="fund-timeline-marker"></div>
            <div class="fund-timeline-content">
              <strong>Phase 3 (TRL‑6+) – Series A & Strategic</strong><br>
              Pilot line operational, first revenue from niche sales. Raise capital for manufacturing scale‑up and market entry. 
              Amount will be calculated based on pilot results and market conditions.
            </div>
          </div>
          <div class="fund-timeline-item">
            <div class="fund-timeline-marker"></div>
            <div class="fund-timeline-content">
              <strong>Phase 4 (TRL‑8+) – Project Finance / IPO</strong><br>
              GWh‑scale factory, multi‑year offtake agreements. Capital from strategic investors, debt, or public markets. 
              Amount to be determined based on scale requirements.
            </div>
          </div>
        </div>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:12px;">
        This funding plan is entirely hypothetical and depends on technical progress, market conditions, and investor appetite. 
        No fundraising commitments exist at this stage.
      </p>
    </div>
  `;
}

window.load_funding = load_funding;