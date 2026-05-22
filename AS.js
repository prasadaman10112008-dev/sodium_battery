function load_section7(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section7">
      <h2>7. Application Segments</h2>
      <p class="section-intro">
        The platform's projected attributes — high energy density (phased), inherent safety, material independence — make it conceptually suitable across multiple demanding energy storage verticals. The evaluation below is based on publicly known application requirements and the platform's disclosed targets (TRL 2). No proprietary implementation details are included.
      </p>

      <h3>Segment‑Wise Suitability</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Segment</th>
              <th>Key Requirement</th>
              <th>Platform Alignment</th>
              <th>Priority Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Urban / Commuter EV</td>
              <td>Cost, safety, adequate range</td>
              <td>High (early targets)</td>
              <td>Medium‑term</td>
            </tr>
            <tr>
              <td>Premium Long‑Range EV</td>
              <td>Max energy density, power</td>
              <td>High (long‑term target)</td>
              <td>Long‑term</td>
            </tr>
            <tr>
              <td>Commercial Fleet EV</td>
              <td>Cycle life, fast charge, TCO</td>
              <td>Moderate‑High</td>
              <td>Medium‑term</td>
            </tr>
            <tr>
              <td>Grid Storage (Bulk)</td>
              <td>Cost, abundance, safety</td>
              <td>High</td>
              <td>Medium‑term</td>
            </tr>
            <tr>
              <td>Data Center Backup</td>
              <td>Fire safety, power density</td>
              <td>Very High</td>
              <td>Near‑term niche</td>
            </tr>
            <tr>
              <td>eVTOL / Drones</td>
              <td>Power density, safety, weight</td>
              <td>Very High</td>
              <td>Near‑term niche (premium)</td>
            </tr>
            <tr>
              <td>Defence Portable</td>
              <td>Safety, shelf life, supply security</td>
              <td>Very High</td>
              <td>Near‑term niche</td>
            </tr>
            <tr>
              <td>Naval / Subsea</td>
              <td>Safety, energy density</td>
              <td>High</td>
              <td>Long‑term specialty</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 30px;">Segment Alignment Score (Qualitative)</h3>
      <div class="chart-container">
        <canvas id="segmentChart" width="600" height="350"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Scores based on how well projected platform targets (TRL 2) match application requirements (1 = Weak, 5 = Very High).
        </p>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        Near‑term niche entries assume the platform can demonstrate core safety and power metrics in A‑sample form, even at lower TRL progression. Volume EV and mass stationary storage will take longer due to cost parity requirements and manufacturing ramp‑up.
      </p>
    </section>
  `;

  // Render horizontal bar chart for segment scores
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
            '#b8860b',
            '#b8860b',
            '#b8860b',
            '#8b6508',
            '#8b6508',
            '#d4a843',
            '#8b6508',
            '#8b6508'
          ],
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
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
          }
        }
      }
    });
  }

  // Ensure shared report styles exist
  if (!document.getElementById('report-section-style')) {
    const style = document.createElement('style');
    style.id = 'report-section-style';
    style.textContent = `
      .section-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 24px;
        line-height: 1.6;
      }
      .bullet-list {
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      }
      .bullet-list li {
        padding: 5px 0 5px 18px;
        position: relative;
        font-size: 0.9rem;
        color: #333;
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
      .sub-list {
        list-style: none;
        padding-left: 20px;
        margin-top: 4px;
      }
      .sub-list li {
        font-size: 0.85rem;
        padding: 3px 0 3px 16px;
        position: relative;
      }
      .sub-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 5px;
        height: 5px;
        background: #ccc;
        border-radius: 50%;
      }
      .chart-container {
        max-width: 700px;
        margin: 0 auto 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section7 = load_section7;