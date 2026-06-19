function load_partnership(container) {
  container.innerHTML = `
    <style>
      .part-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .part-header { margin-bottom: 28px; }
      .part-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .part-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }

      .solution-feature {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: 14px; padding: 28px; margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      .feature-head { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
      .feature-number {
        background: var(--accent); color: white; font-weight: 700;
        font-size: 0.8rem; width: 32px; height: 32px; border-radius: 8px;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .feature-head h3 { margin: 0; font-size: 1.05rem; font-weight: 600; color: #1a1a1a; }

      .part-table-scroll {
        width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;
        margin-top: 10px; border-radius: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .part-table {
        min-width: 650px; width: 100%; border-collapse: collapse;
        background: var(--surface); font-size: 0.82rem;
      }
      .part-table th {
        background: #0d1117; color: #e0e0e0; padding: 10px 12px;
        text-align: left; font-weight: 600; font-size: 0.72rem;
        text-transform: uppercase; letter-spacing: 0.4px; white-space: nowrap;
      }
      .part-table td {
        padding: 10px 12px; border-bottom: 1px solid var(--border); vertical-align: top;
      }
      .part-table tr:last-child td { border-bottom: none; }

      .status-pill {
        display: inline-block; padding: 3px 10px; border-radius: 12px;
        font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px;
      }
      .status-pill.submitted { background: #fef3c7; color: #92400e; }
      .status-pill.future { background: #e2e8f0; color: #475569; }

      .bullet-list { list-style: none; padding: 0; margin-top: 10px; }
      .bullet-list li {
        padding: 5px 0 5px 20px; position: relative;
        font-size: 0.9rem; color: #555; line-height: 1.5;
      }
      .bullet-list li::before {
        content: ''; position: absolute; left: 0; top: 10px;
        width: 6px; height: 6px; background: var(--accent); border-radius: 50%; opacity: 0.7;
      }
    </style>
    <div class="part-container">
      <div class="part-header">
        <div class="part-title">Partnerships & Incubator</div>
        <div class="part-subtitle">Pre‑validation stage — no formal agreements yet. All incubator applications submitted; grant applications in progress.</div>
      </div>

      <!-- Incubator & Grant Applications -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Incubator & Grant Applications</h3>
        </div>
        <div class="part-table-scroll">
          <table class="part-table">
            <thead>
              <tr><th>Organisation / Scheme</th><th>Type</th><th>Submitted</th><th>Expected Support</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>SINE – IIT Bombay</strong></td><td>Incubator</td><td>May 2026</td><td>Seed fund, lab access, mentorship</td><td><span class="status-pill submitted">Submitted</span></td></tr>
              <tr><td><strong>FITT – IIT Delhi</strong></td><td>Incubator</td><td>June 2026</td><td>Prototyping support, industry connects</td><td><span class="status-pill submitted">Submitted</span></td></tr>
              <tr><td><strong>Venture Center</strong></td><td>Incubator</td><td>June 2026</td><td>Lab facilities, IP guidance</td><td><span class="status-pill submitted">Submitted</span></td></tr>
              <tr><td><strong>iCreate</strong></td><td>Incubator</td><td>June 2026</td><td>Prototype grant, mentoring</td><td><span class="status-pill submitted">Submitted</span></td></tr>
              <tr><td><strong>NIDHI‑PRAYAS (DST)</strong></td><td>Prototyping Grant</td><td>–</td><td>Up to ₹10 lakhs for proof‑of‑concept</td><td><span class="status-pill future">Planned</span></td></tr>
              <tr><td><strong>BIRAC‑BIG</strong></td><td>Grant</td><td>–</td><td>Up to ₹50 lakhs (if biotech‑adjacent)</td><td><span class="status-pill future">Planned</span></td></tr>
              <tr><td><strong>DRDO‑TDF</strong></td><td>Grant</td><td>–</td><td>Defence‑grade battery development</td><td><span class="status-pill future">Planned</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Strategic Alliances -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>Strategic Alliances (Informal)</h3>
        </div>
        <ul class="bullet-list">
          <li><strong>Defence:</strong> One DRDO lab scientist expressed informal interest in safe portable power — no commitment yet.</li>
          <li><strong>Academia:</strong> An IIT professor has indicated willingness to mentor once incubation is confirmed.</li>
          <li><strong>Industry:</strong> No corporate partnerships initiated — awaiting prototype data to approach OEMs.</li>
        </ul>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:12px;">
          All relationships are pre‑validation. Formal partnerships will be pursued after TRL‑3 is achieved.
        </p>
      </div>
    </div>
  `;
}
window.load_partnership = load_partnership;