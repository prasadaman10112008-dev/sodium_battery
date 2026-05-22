function load_competition(mainContainer) {
  mainContainer.innerHTML = `
    <section id="competition-section">
      <h2>Competitive Advantage</h2>
      <p class="comp-intro">
        The platform is built on <strong>three structural moats</strong> that are extremely difficult to replicate: 
        <em>chemistry‑level safety</em> (solid‑state), <em>complete material sovereignty</em> (zero lithium, cobalt, nickel), 
        and <em>scalable raw‑material abundance</em> (sodium & sulfur). These are not incremental improvements — they are 
        architectural differences that decouple the battery from today's volatile supply chains.
      </p>

      <!-- Three Structural Moats -->
      <div class="moat-grid">
        <div class="moat-card">
          <h3>Moat 1: Fireproof by Architecture</h3>
          <p>No liquid electrolyte means combustion cannot initiate inside the cell. This is not a software patch — it's physics. Competitors using liquid electrolytes must forever manage thermal runaway; we eliminate the root cause.</p>
        </div>
        <div class="moat-card">
          <h3>Moat 2: Zero Lithium, Zero Cobalt</h3>
          <p>India imports nearly all its lithium‑ion cells. Our sodium‑sulfur supply chain is domestic and global — no cartel, no geopolitical choke point. In a world of rising mineral nationalism, this is a strategic asset.</p>
        </div>
        <div class="moat-card">
          <h3>Moat 3: Designed for Scale</h3>
          <p>Sodium and sulfur are produced at >300 million tons and >80 million tons per year, respectively — already industrial scale. There is no resource constraint, unlike lithium (production ~130,000 tons/year). Scalability is embedded in the raw materials themselves.</p>
        </div>
      </div>

      <!-- Competitive Metrics Bar Chart (Real Data, Not Scores) -->
      <h3 style="margin-top: 36px;">Head‑to‑Head: Key Technical Metrics (Real Data)</h3>
      <div class="comp-chart-wrapper">
        <canvas id="competitionMetricsChart" width="700" height="400"></canvas>
        <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);margin-top:6px;">
          Energy Density: actual/projected Wh/kg. Cost: $/kWh at pack level. Cycle life: to 80% SOH. Power Density: W/kg.
          Our platform numbers are targets (TRL‑2). Competitor data based on 2024‑2025 public sources.
        </p>
      </div>

      <!-- Differentiation Table (Why We Win in Specific Segments) -->
      <h3 style="margin-top: 40px;">Where We Win vs. Competitors</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Application Need</th>
              <th>Our Platform (Projected)</th>
              <th>NMC</th>
              <th>LFP</th>
              <th>Solid‑State Li (QuantumScape/WeLion)</th>
              <th>Na‑ion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Ultra‑safe (no fire)</strong></td>
              <td><strong>Best</strong> — solid‑state, no flammable components</td>
              <td>Poor — liquid electrolyte fire risk</td>
              <td>Good — thermal stability, but still liquid</td>
              <td>Excellent — solid‑state, but lithium dendrite risk</td>
              <td>Good — but liquid or aqueous, not solid‑state</td>
            </tr>
            <tr>
              <td><strong>No lithium/cobalt/nickel</strong></td>
              <td><strong>Best</strong> — pure Na/S</td>
              <td>None — fully dependent</td>
              <td>Partial — lithium still needed</td>
              <td>None — lithium metal, nickel‑rich cathodes</td>
              <td>Excellent — sodium only</td>
            </tr>
            <tr>
              <td><strong>Domestic India supply chain</strong></td>
              <td><strong>Best</strong> — Na, S locally available</td>
              <td>Worst — all imported</td>
              <td>Worst — lithium imported</td>
              <td>Worst — lithium, specialty materials imported</td>
              <td>Good — sodium local, but tech may need imports</td>
            </tr>
            <tr>
              <td><strong>Long‑range (>600 km) potential</strong></td>
              <td><strong>Strong</strong> — long‑term target 400‑450 Wh/kg</td>
              <td>Good — 280 Wh/kg achievable</td>
              <td>Weak — 180 Wh/kg limits range</td>
              <td>Excellent — 400‑500 Wh/kg target (WeLion 824 Wh/kg lab)</td>
              <td>Weak — 160 Wh/kg max</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px;">
        <em>All "Our Platform" claims are development targets. No experimental validation yet (TRL‑2).</em>
      </p>
    </section>
  `;

  // Real data bar chart: Energy Density, Cost, Cycle Life, Power Density
  const canvas = document.getElementById('competitionMetricsChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Energy Density\n(Wh/kg)', 'Cost\n($/kWh)', 'Cycle Life\n(cycles)', 'Power Density\n(W/kg)'],
        datasets: [
          {
            label: 'Our Platform (Target)',
            data: [300, 90, 2000, 550],
            backgroundColor: 'rgba(184, 134, 11, 0.85)',
            borderColor: '#b8860b',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'WeLion (Solid‑State Li)',
            data: [824, 250, 1200, 500],
            backgroundColor: 'rgba(220, 38, 38, 0.75)',
            borderColor: '#dc2626',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Li‑ion NMC',
            data: [250, 120, 1500, 1000],
            backgroundColor: 'rgba(107, 114, 128, 0.7)',
            borderColor: '#6b7280',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Li‑ion LFP',
            data: [160, 90, 4000, 800],
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: '#10b981',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Na‑ion (CATL)',
            data: [140, 70, 3500, 450],
            backgroundColor: 'rgba(59, 130, 246, 0.7)',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'QuantumScape (Li Solid‑State)',
            data: [450, 200, 800, 550],
            backgroundColor: 'rgba(139, 92, 246, 0.7)',
            borderColor: '#8b5cf6',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Real Metric Comparison (Targets vs. Actual/Lab)',
            font: { size: 15, weight: '600' },
            color: '#1a1a1a',
            padding: 20
          },
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 14,
              font: { size: 10 }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Value (mixed units)' }
          }
        }
      }
    });
  }

  // Inject styles once
  if (!document.getElementById('comp-style')) {
    const style = document.createElement('style');
    style.id = 'comp-style';
    style.textContent = `
      .comp-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 28px;
        max-width: 900px;
        line-height: 1.6;
      }
      .moat-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
        margin-bottom: 36px;
      }
      .moat-card {
        background: var(--surface);
        border-left: 4px solid var(--accent);
        border-radius: 10px;
        padding: 20px 22px;
        box-shadow: 0 1px 6px rgba(0,0,0,0.04);
      }
      .moat-card h3 {
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0 0 8px;
        color: #1a1a1a;
      }
      .moat-card p {
        font-size: 0.84rem;
        color: #555;
        line-height: 1.5;
        margin: 0;
      }
      .comp-chart-wrapper {
        max-width: 750px;
        margin: 0 auto 36px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 24px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      }
      .comp-chart-wrapper canvas {
        display: block;
        max-width: 100%;
        height: auto;
      }
      #competition-section h3 {
        margin-bottom: 16px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_competition = load_competition;