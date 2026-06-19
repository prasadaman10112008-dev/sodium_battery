function load_section7(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section7">
      <h2>7. Application Segments</h2>
      <p class="section-intro">
        The platform's projected attributes — high energy density (phased), inherent safety, material independence — make it conceptually suitable across multiple demanding energy storage verticals. The evaluation below is based on publicly known application requirements and the platform's disclosed targets (TRL 2). No proprietary implementation details are included.
      </p>

      <h3>Segment‑Wise Suitability</h3>
      <div class="section7-table-scroll">
        <table class="section7-table">
          <thead>
            <tr>
              <th>Segment</th>
              <th>Key Requirement</th>
              <th>Platform Alignment</th>
              <th>Priority Level</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Urban / Commuter EV</td><td>Cost, safety, adequate range</td><td>High (early targets)</td><td>Medium‑term</td></tr>
            <tr><td>Premium Long‑Range EV</td><td>Max energy density, power</td><td>High (long‑term target)</td><td>Long‑term</td></tr>
            <tr><td>Commercial Fleet EV</td><td>Cycle life, fast charge, TCO</td><td>Moderate‑High</td><td>Medium‑term</td></tr>
            <tr><td>Grid Storage (Bulk)</td><td>Cost, abundance, safety</td><td>High</td><td>Medium‑term</td></tr>
            <tr><td>Data Center Backup</td><td>Fire safety, power density</td><td>Very High</td><td>Near‑term niche</td></tr>
            <tr><td>eVTOL / Drones</td><td>Power density, safety, weight</td><td>Very High</td><td>Near‑term niche (premium)</td></tr>
            <tr><td>Defence Portable</td><td>Safety, shelf life, supply security</td><td>Very High</td><td>Near‑term niche</td></tr>
            <tr><td>Naval / Subsea</td><td>Safety, energy density</td><td>High</td><td>Long‑term specialty</td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 30px;">Segment Alignment Score (Qualitative)</h3>
      <!-- Chart wrapper – fixed height, no caption inside to prevent overlap -->
      <div class="section7-chart-wrap">
        <canvas id="segmentChart" style="display: block; width: 100%; height: 100%;"></canvas>
      </div>
      <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
        Scores based on how well projected platform targets (TRL 2) match application requirements (1 = Weak, 5 = Very High).
      </p>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        Near‑term niche entries assume the platform can demonstrate core safety and power metrics in A‑sample form, even at lower TRL progression. Volume EV and mass stationary storage will take longer due to cost parity requirements and manufacturing ramp‑up.
      </p>
    </section>
  `;
  
  // Render horizontal bar chart – responsive with fixed container height
  const canvas = document.getElementById('segmentChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Data Center Backup',
          'eVTOL / Drones',
          'Defence Portable',
          'Urban / Commuter EV',
          'Grid Storage (Bulk)',
          'Commercial Fleet EV',
          'Premium Long‑Range EV',
          'Naval / Subsea'
        ],
        datasets: [{
          label: 'Alignment Score (out of 5)',
          data: [5, 5, 5, 4, 4, 3.5, 4, 4],
          backgroundColor: [
            '#b8860b', '#b8860b', '#b8860b',
            '#8b6508', '#8b6508', '#d4a843',
            '#8b6508', '#8b6508'
          ],
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false, // fills the container's fixed height
        plugins: {
          title: {
            display: true,
            text: 'Platform Fit by Application (Projected, TRL‑2)',
            font: { size: 14, weight: '600' },
            padding: 16
          },
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 5,
            title: { display: true, text: 'Alignment Score' }
          },
          y: {
            ticks: { font: { size: 11 }, autoSkip: false },
            grid: { drawBorder: false }
          }
        },
        layout: { padding: { left: 5, right: 5 } }
      }
    });
  }
  
  // ───── Inject section‑specific styles (unique ID) ─────
  if (!document.getElementById('section7-style')) {
    const style = document.createElement('style');
    style.id = 'section7-style';
    style.textContent = `
      .section-intro {
        font-size: 0.95rem; color: #444; margin-bottom: 24px; line-height: 1.6;
      }
      .bullet-list {
        list-style: none; padding: 0; margin-bottom: 16px;
      }
      .bullet-list li {
        padding: 5px 0 5px 18px; position: relative;
        font-size: 0.9rem; color: #333; line-height: 1.5;
      }
      .bullet-list li::before {
        content: ''; position: absolute; left: 0; top: 10px;
        width: 6px; height: 6px; background: var(--accent); border-radius: 50%;
      }
      /* Scrollable table */
      .section7-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .section7-table {
        min-width: 650px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .section7-table th {
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
      .section7-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .section7-table tr:last-child td { border-bottom: none; }

      /* Fixed‑height chart wrapper – no caption inside to prevent overlap */
      .section7-chart-wrap {
        position: relative;
        width: 100%;
        max-width: 700px;
        margin: 0 auto 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        height: 420px;                /* stable height */
      }
      @media (max-width: 600px) {
        .section7-chart-wrap {
          height: 360px;
          padding: 14px 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section7 = load_section7;