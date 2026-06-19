function load_section12(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section12">
      <h2>12. Commercialization Roadmap</h2>
      <p class="section-intro">
        The path from concept (TRL 2) to commercial scale is long and capital‑intensive, but can be broken into
        three clear phases. Timelines assume continuous technical progress, adequate funding, and no fundamental
        dead‑ends. All estimates are indicative and will be refined after lab validation.
      </p>

      <h3>12.1 Phased Development & Milestones</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Timeline</th>
              <th>Key Milestones</th>
              <th>Target TRL Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Phase 1: Lab Validation & Prototype</strong></td>
              <td>Year 1 – Year 4</td>
              <td>
                • Coin‑cell → single‑layer pouch cells<br>
                • Achieve 150–200 Wh/kg<br>
                • Validate >1,500 cycles (lab scale)<br>
                • Pass thermal abuse test (no fire)<br>
                • A‑sample cells for partner evaluation<br>
                • Initiate pre‑certification (UN38.3, AIS‑048)
              </td>
              <td>TRL 2 → 4/5</td>
            </tr>
            <tr>
              <td><strong>Phase 2: Pilot Production</strong></td>
              <td>Year 4 – Year 6</td>
              <td>
                • Establish 10–50 MWh pilot line<br>
                • Consistent B‑sample cells (≥250 Wh/kg)<br>
                • Full safety certifications obtained<br>
                • Field pilots with 2–3 strategic partners<br>
                • Cost model validated at pilot scale
              </td>
              <td>TRL 5 → 6/7</td>
            </tr>
            <tr>
              <td><strong>Phase 3: Industrial Scale & Market Entry</strong></td>
              <td>Year 6 – Year 8+</td>
              <td>
                • GWh‑scale manufacturing (own or JV)<br>
                • Cost trajectory approaching LFP parity ($80‑100/kWh)<br>
                • Multi‑year commercial supply agreements<br>
                • Revenue from EV, grid, aerospace, defence segments
              </td>
              <td>TRL 7/8 → 9</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>12.2 Visual Timeline (Illustrative)</h3>
      <div class="chart-container">
        <canvas id="roadmapChart" width="600" height="300"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Bar length represents approximate duration. Phases may overlap if funding and technical gates are cleared early.
        </p>
      </div>

      <h3>12.3 Critical Dependencies</h3>
      <ul class="bullet-list">
        <li><strong>Technical:</strong> Room‑temperature solid‑state electrolyte conductivity and interfacial stability must be solved in Phase 1.</li>
        <li><strong>Talent:</strong> Skilled battery engineers and material scientists need to be recruited early.</li>
        <li><strong>Equipment:</strong> Dry‑room access, coating, and cell assembly tools are necessary for prototyping.</li>
        <li><strong>Partners:</strong> At least 2–3 committed co‑development partners (defence/automotive) for field validation.</li>
        <li><strong>Funding:</strong> Non‑dilutive grants and early‑stage equity must be secured at each gate. Indicative capital required: Phase 1 – seed/grants; Phase 2 – Series A/B; Phase 3 – project/strategic finance.</li>
      </ul>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        This roadmap is a living plan. Timelines will be adjusted based on experimental results and funding velocity. No commercial contracts exist today (TRL 2).
      </p>
    </section>
  `;

  // Render a simple horizontal bar chart showing phase durations
  const canvas = document.getElementById('roadmapChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Phase 1: Lab & Prototype\n(Year 1-4)', 'Phase 2: Pilot Production\n(Year 4-6)', 'Phase 3: Industrial Scale\n(Year 6-8+)'],
        datasets: [{
          label: 'Duration (years)',
          data: [4, 2, 2.5],
          backgroundColor: ['#8b6508', '#b8860b', '#e6c87c'],
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
            text: 'Roadmap Phases (Indicative Timelines)',
            font: { size: 14, weight: '600' }
          },
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: 'Years' }
          }
        }
      }
    });
  }

  // Ensure styles exist
  if (!document.getElementById('report-section-style')) {
    const style = document.createElement('style');
    style.id = 'report-section-style';
    style.textContent = `
      .section-intro { font-size: 0.95rem; color: #444; margin-bottom: 24px; line-height: 1.6; }
      .bullet-list { list-style: none; padding: 0; margin-bottom: 16px; }
      .bullet-list li { padding: 5px 0 5px 18px; position: relative; font-size: 0.9rem; color: #333; line-height: 1.5; }
      .bullet-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }
      .chart-container { max-width: 650px; margin: 0 auto 30px; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
    `;
    document.head.appendChild(style);
  }
}

window.load_section12 = load_section12;