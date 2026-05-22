function load_uvp(mainContainer) {
  mainContainer.innerHTML = `
    <section id="uvp-section">
      <h2>Unique Value Proposition</h2>
      <p class="uvp-intro">
        The platform is designed to deliver a combination of benefits currently unavailable in any single commercial battery technology. 
        All advantages are <strong>projected targets</strong> based on the solid‑state sodium–sulfur chemistry and will be validated through phased prototyping (TRL‑2 → TRL‑5).
      </p>

      <!-- RADAR CHART – Clean, no stretch, no blur -->
      <div class="uvp-chart-wrapper">
        <canvas id="uvpRadarChart"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Scores out of 100. Our Platform: TRL‑2 projections only. WeLion: demonstrated 824 Wh/kg in lab (lithium‑based). All others: commercially available (2024‑2025 data).
        </p>
      </div>

      <!-- 8 UVP CARDS (unchanged) -->
      <div class="uvp-grid">
        <div class="uvp-card">
          <div class="uvp-icon">01</div>
          <h3>Projected Intrinsic Fire Safety</h3>
          <p>Solid‑state electrolyte eliminates flammable liquid, targeting <strong>zero thermal runaway risk</strong>. No fire suppression or complex cooling needed — a fundamental safety upgrade for EVs, data centers, and defence.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">02</div>
          <h3>Critical Mineral Freedom</h3>
          <p>Uses <strong>abundant sodium and sulfur</strong> — no lithium, cobalt, or nickel. Insulates customers from geopolitical supply shocks, child labour concerns, and volatile pricing.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">03</div>
          <h3>High Energy Density Pathway</h3>
          <p>Targets <strong>200 → 450 Wh/kg</strong> across phases (theoretical ceiling >700 Wh/kg). Designed to enable long‑range EVs, eVTOL, and aerospace without the weight penalty.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">04</div>
          <h3>Fast‑Charge & Power Architecture</h3>
          <p>Projected <strong>450–700 W/kg</strong> power density with fast‑charge target of 20–30 min. Solid electrolyte handles high currents with less thermal stress.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">05</div>
          <h3>Ultra‑Low Self‑Discharge</h3>
          <p>Expected <strong><1% per month</strong> self‑discharge. Ideal for defence readiness, backup systems, and long‑duration grid storage that require instant availability after idle periods.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">06</div>
          <h3>Supply Chain Resilience</h3>
          <p>Materials are globally diversified and domestically sourcable (India). <strong>No single‑nation dependency</strong> — reduces forex outflow and trade disruption risk.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">07</div>
          <h3>Simplified Recycling Potential</h3>
          <p>Na‑S chemistry contains fewer critical elements, which <strong>may simplify separation</strong> compared to multi‑metal NMC. However, solid‑state electrolyte recycling is still under development. Designed with future circular economy regulations in mind.</p>
        </div>
        <div class="uvp-card">
          <div class="uvp-icon">08</div>
          <h3>Broad Operating Window</h3>
          <p>Targeted temperature range <strong>-20 °C to 65 °C</strong>. Suitable for hot climates, desert operations, and high‑altitude deployments without elaborate thermal management.</p>
        </div>
      </div>

      <!-- ONE-LINE SUMMARY -->
      <div class="uvp-summary">
        <p>
          <strong>In one sentence:</strong> A fireproof, lithium‑free, high‑energy battery that turns globally abundant sodium and sulfur into a secure, scalable energy storage platform — designed for the most demanding applications.
        </p>
      </div>

      <!-- COMPARISON TABLE (unchanged) -->
      <h3 style="margin-top: 40px;">Competitive Performance Table (Projected vs. Existing)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Our Platform (TRL‑2)</th>
              <th>Li‑ion NMC</th>
              <th>Li‑ion LFP</th>
              <th>Li Solid‑State (QuantumScape)</th>
              <th>Na‑ion (CATL)</th>
              <th>WeLion (Solid‑State Li, 824 Wh/kg lab)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Energy Density (Wh/kg)</strong></td>
              <td><strong>200→450</strong> (phased)</td>
              <td>200‑280</td>
              <td>150‑180</td>
              <td>400‑500 (target)</td>
              <td>100‑160</td>
              <td>824 (lab), 1,000 (target)</td>
            </tr>
            <tr>
              <td><strong>Safety (Thermal Runaway)</strong></td>
              <td><strong>Excellent</strong> (solid‑state)</td>
              <td>Moderate</td>
              <td>Good</td>
              <td>Excellent</td>
              <td>Good</td>
              <td>Excellent (solid‑state)</td>
            </tr>
            <tr>
              <td><strong>Critical Mineral Dependency</strong></td>
              <td><strong>None</strong> (Na, S)</td>
              <td>High (Co, Ni, Li)</td>
              <td>Medium (Li)</td>
              <td>High (Li, specialty materials)</td>
              <td>Very Low (Na)</td>
              <td>High (Li, Ni)</td>
            </tr>
            <tr>
              <td><strong>Supply Chain Resilience</strong></td>
              <td><strong>Fully diversified</strong></td>
              <td>Geopolitically exposed</td>
              <td>Moderate risk</td>
              <td>Exposed</td>
              <td>Resilient</td>
              <td>China‑centric, Li/Ni dependent</td>
            </tr>
            <tr>
              <td><strong>Power Density (W/kg)</strong></td>
              <td><strong>450‑700</strong> (projected)</td>
              <td>500‑1,500</td>
              <td>500‑1,000</td>
              <td>TBD</td>
              <td>300‑600</td>
              <td>Not disclosed</td>
            </tr>
            <tr>
              <td><strong>Recyclability</strong></td>
              <td><strong>Moderate</strong> (simpler chemistry but solid‑state challenges)</td>
              <td>Moderate</td>
              <td>Moderate</td>
              <td>Moderate</td>
              <td>High</td>
              <td>Low (complex sulfide processing)</td>
            </tr>
            <tr>
              <td><strong>Cost Potential ($/kWh)</strong></td>
              <td><strong>LFP parity</strong> (target)</td>
              <td>100‑140</td>
              <td>80‑100</td>
              <td>Uncertain (premium)</td>
              <td>Below LFP</td>
              <td>Very high (sulfide cost barrier)</td>
            </tr>
            <tr>
              <td><strong>TRL Status</strong></td>
              <td><strong>TRL 2</strong></td>
              <td>TRL 9</td>
              <td>TRL 9</td>
              <td>TRL 5‑6</td>
              <td>TRL 7‑8</td>
              <td>TRL 6‑7 (lab/pilot)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px;">
        <em>All projected figures are targets. WeLion achieved 824 Wh/kg in lab (sulfide electrolyte, lithium‑metal). 
        Data based on public sources (2024‑2025).</em>
      </p>
    </section>
  `;

  // Render sharp, non‑stretching radar chart
  const canvas = document.getElementById('uvpRadarChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Safety',
          'Energy Density',
          'Material Independence',
          'Power Density',
          'Supply Chain Security',
          'Recyclability'
        ],
        datasets: [
          {
            label: 'Our Platform (Projected)',
            data: [90, 55, 100, 55, 100, 45],
            backgroundColor: 'rgba(184, 134, 11, 0.25)',
            borderColor: '#b8860b',
            borderWidth: 3,
            pointBackgroundColor: '#b8860b',
            pointRadius: 5,
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          },
          {
            label: 'WeLion (Solid‑State Li, 824 Wh/kg)',
            data: [90, 98, 15, 50, 15, 25],
            backgroundColor: 'rgba(220, 38, 38, 0.15)',
            borderColor: '#dc2626',
            borderWidth: 2,
            pointBackgroundColor: '#dc2626',
            pointRadius: 4,
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          },
          {
            label: 'Li‑ion NMC',
            data: [40, 70, 20, 75, 20, 30],
            backgroundColor: 'rgba(107, 114, 128, 0.10)',
            borderColor: '#6b7280',
            borderWidth: 2,
            pointBackgroundColor: '#6b7280',
            pointRadius: 3
          },
          {
            label: 'Li‑ion LFP',
            data: [70, 40, 40, 65, 40, 50],
            backgroundColor: 'rgba(16, 185, 129, 0.10)',
            borderColor: '#10b981',
            borderWidth: 2,
            pointBackgroundColor: '#10b981',
            pointRadius: 3
          },
          {
            label: 'Na‑ion (CATL, Faradion)',
            data: [65, 25, 90, 45, 80, 70],
            backgroundColor: 'rgba(59, 130, 246, 0.10)',
            borderColor: '#3b82f6',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
            pointRadius: 3
          },
          {
            label: 'Li Solid‑State (QuantumScape)',
            data: [90, 80, 15, 50, 15, 30],
            backgroundColor: 'rgba(139, 92, 246, 0.10)',
            borderColor: '#8b5cf6',
            borderWidth: 2,
            pointBackgroundColor: '#8b5cf6',
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,   // fills the container height
        plugins: {
          title: {
            display: true,
            text: 'Battery Platform Comparison — Key Performance Dimensions',
            font: { size: 15, weight: '600' },
            padding: 15
          },
          subtitle: {
            display: true,
            text: 'Scores out of 100. Our Platform: TRL‑2 projections. WeLion: lab‑proven.',
            font: { size: 11, style: 'italic' },
            color: '#666'
          },
          legend: {
            position: 'bottom',
            labels: { usePointStyle: true, font: { size: 10 } }
          }
        },
        scales: {
          r: {
            beginAtZero: false,
            min: 0,
            max: 100,
            ticks: { stepSize: 20, font: { size: 9 } },
            pointLabels: { font: { size: 10, weight: '600' } }
          }
        }
      }
    });
  }

  // Inject clean, stable styles
  if (!document.getElementById('uvp-style')) {
    const style = document.createElement('style');
    style.id = 'uvp-style';
    style.textContent = `
      .uvp-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 32px;
        line-height: 1.6;
        max-width: 850px;
      }
      .uvp-chart-wrapper {
        width: 100%;
        max-width: 600px;
        margin: 0 auto 40px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        height: 400px;                /* comfortable fixed height */
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
      .uvp-chart-wrapper canvas {
        display: block;
        width: 100% !important;
        height: 100% !important;
      }
      .uvp-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
      }
      .uvp-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
        transition: box-shadow 0.2s;
      }
      .uvp-card:hover {
        box-shadow: 0 4px 14px rgba(0,0,0,0.06);
      }
      .uvp-icon {
        display: inline-block;
        background: var(--accent);
        color: white;
        font-size: 0.75rem;
        font-weight: 700;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        text-align: center;
        line-height: 28px;
        margin-bottom: 14px;
      }
      .uvp-card h3 {
        font-size: 0.98rem;
        font-weight: 600;
        margin: 0 0 8px;
        color: #1a1a1a;
      }
      .uvp-card p {
        font-size: 0.85rem;
        color: #555;
        line-height: 1.5;
        margin: 0;
      }
      .uvp-summary {
        background: #f9f5eb;
        border: 1px solid #e6d7b8;
        border-radius: 12px;
        padding: 20px 24px;
        font-size: 0.95rem;
        color: #3d3d3d;
        line-height: 1.5;
        margin-bottom: 30px;
      }
      #uvp-section h3 {
        margin-bottom: 16px;
      }

      @media (max-width: 600px) {
        .uvp-chart-wrapper {
          height: 380px;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_uvp = load_uvp;