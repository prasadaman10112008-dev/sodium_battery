function load_partnership(container) {
  container.innerHTML = `
    <style>
      .part-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .part-header { margin-bottom: 30px; }
      .part-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .part-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }
      .part-block { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
      .part-block h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 16px; color: #1a1a1a; }
      .bullet-list { list-style: none; padding: 0; }
      .bullet-list li { padding: 6px 0 6px 24px; position: relative; font-size: 0.92rem; color: #333; }
      .bullet-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }
      .simple-table { width: 100%; border-collapse: collapse; background: var(--surface); border-radius: var(--radius); overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.03); font-size: 0.82rem; margin-top: 8px; }
      .simple-table th { background: #0d1117; color: #e0e0e0; padding: 10px 12px; text-align: left; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; }
      .simple-table td { padding: 10px 12px; border-bottom: 1px solid var(--border); }
      .simple-table tr:last-child td { border-bottom: none; }
      .status-pill { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; }
      .status-pill.pending { background: #fef3c7; color: #92400e; }
      .status-pill.future { background: #e2e8f0; color: #475569; }
    </style>
    <div class="part-container">
      <div class="part-header">
        <div class="part-title">Partnerships & Incubator</div>
        <div class="part-subtitle">Current status — pre‑validation, no formal agreements. Focused on incubator entry.</div>
      </div>

      <div class="part-block">
        <h3>Incubator Target</h3>
        <p style="margin-bottom:16px;">The primary objective is to secure incubation at a premier deep‑tech institute. Application submitted, awaiting response.</p>
        <table class="simple-table">
          <thead><tr><th>Incubator</th><th>Institute</th><th>Application Status</th><th>Expected Support</th></tr></thead>
          <tbody>
            <tr><td><strong>SINE</strong></td><td>IIT Bombay</td><td><span class="status-pill pending">Under Review</span></td><td>Seed fund, lab access, mentorship</td></tr>
            <tr><td>IIT Delhi / IISc / C‑CAMP</td><td>Various</td><td><span class="status-pill future">Alternate</span></td><td>Fallback options</td></tr>
          </tbody>
        </table>
      </div>

      <div class="part-block">
        <h3>Strategic Alliances</h3>
        <p>No formal Memoranda of Understanding (MoUs) or joint development agreements exist at TRL‑2. Informal conversations only.</p>
        <ul class="bullet-list" style="margin-top:12px;">
          <li><strong>Defence:</strong> One DRDO lab scientist expressed informal interest in safe portable power — no commitment yet.</li>
          <li><strong>Academia:</strong> A professor from an IIT has indicated willingness to mentor once incubation is confirmed.</li>
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