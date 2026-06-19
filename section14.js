function load_section14(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section14">
      <h2>14. Sustainability & Environmental Impact</h2>
      <p class="section-intro">
        By design, the platform uses sodium and sulfur — two of the most abundant and widely available industrial materials — 
        while completely avoiding lithium, cobalt, and nickel. This gives it a fundamentally different environmental 
        and social footprint compared to incumbent lithium‑ion chemistries. All assessments are based on material‑level 
        comparisons; the platform is at TRL 2 and no lifecycle analysis has been performed yet.
      </p>

      <h3>14.1 Sustainability Scorecard (Projected vs. Incumbents)</h3>
      <!-- Chart container – fixed height, but caption moved outside to avoid overlap -->
      <div class="section14-chart-wrap">
        <canvas id="sustainabilityRadarChart" style="display: block; width: 100%; height: 100%;"></canvas>
      </div>
      <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
        Qualitative scores out of 100. Our Platform scores are projected based on material choice (TRL 2). WeLion (China) solid‑state Li battery included for reference (824 Wh/kg lab). All data from public sources.
      </p>

      <h3>14.2 Key Sustainability Dimensions</h3>
      <ul class="bullet-list">
        <li><strong>Material Abundance:</strong> Sodium (6th most abundant element) and sulfur (>80 million tons produced annually) — no resource constraints. Contrast with lithium (~130,000 tons/year) and cobalt (~200,000 tons/year).</li>
        <li><strong>Elimination of Conflict Minerals:</strong> Zero cobalt, zero nickel, zero lithium — the platform is completely free from artisanal mining, child labour, and conflict‑zone supply chains.</li>
        <li><strong>Lower Extraction Footprint:</strong> Sodium from seawater or rock salt; sulfur from refining by‑products. Avoids the water‑intensive brine extraction (Atacama) and hard‑rock mining that lithium requires.</li>
        <li><strong>Simplified Recycling:</strong> Fewer critical elements than NMC cathodes. Sodium and sulfur can be recovered via established chemical routes. Solid‑state electrolyte recovery is under development.</li>
        <li><strong>Carbon Footprint Potential:</strong> Low‑temperature processing and renewable‑powered manufacturing could keep embedded carbon very low. However, actual manufacturing emissions are not yet known.</li>
      </ul>

      <h3>14.3 Regulatory & ESG Alignment</h3>
      <ul class="bullet-list">
        <li><strong>EU Battery Regulation (2027):</strong> Mandates carbon footprint declarations, recycled content minimums, and supply chain due diligence — all areas where Na‑S chemistry can potentially outperform Li‑ion.</li>
        <li><strong>India Battery Waste Management Rules (2022):</strong> Extended Producer Responsibility — simpler chemistry eases compliance.</li>
        <li><strong>UN SDGs:</strong> Directly supports SDG 7 (clean energy), SDG 12 (responsible consumption/production), SDG 13 (climate action).</li>
      </ul>

      <div class="highlight-box">
        <p><strong>India‑Specific Angle:</strong> Domestic sodium and sulfur sourcing reduces freight emissions and forex outflow. A locally manufactured, cobalt‑free battery aligns with India's LiFE (Lifestyle for Environment) mission and net‑zero 2070 target.</p>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        <em>All sustainability claims are projected based on material selection. Real‑world performance will depend on manufacturing processes and supply chain choices, to be validated post‑pilot.</em>
      </p>
    </section>
  `;

  // Render sustainability radar chart – stable height, no stretching
  const canvas = document.getElementById('sustainabilityRadarChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Raw Material\nAbundance',
          'Low Mining\nFootprint',
          'Recyclability',
          'Carbon\nReduction Potential',
          'Cobalt‑Free\n& Ethical',
          'Supply Chain\nTransparency'
        ],
        datasets: [
          {
            label: 'Our Platform (TRL-2 projected)',
            data: [90, 80, 50, 75, 95, 90],
            backgroundColor: 'rgba(184, 134, 11, 0.25)',
            borderColor: '#b8860b',
            borderWidth: 3,
            pointBackgroundColor: '#b8860b',
            pointRadius: 5,
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          },
          {
            label: 'WeLion (China, solid‑state Li)',
            data: [40, 20, 25, 50, 25, 40],
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
            data: [10, 25, 30, 30, 5, 10],
            backgroundColor: 'rgba(107, 114, 128, 0.10)',
            borderColor: '#6b7280',
            borderWidth: 2,
            pointBackgroundColor: '#6b7280'
          },
          {
            label: 'Li‑ion LFP',
            data: [35, 45, 50, 50, 50, 50],
            backgroundColor: 'rgba(16, 185, 129, 0.10)',
            borderColor: '#10b981',
            borderWidth: 2,
            pointBackgroundColor: '#10b981'
          },
          {
            label: 'Na‑ion',
            data: [90, 85, 70, 65, 90, 85],
            backgroundColor: 'rgba(59, 130, 246, 0.10)',
            borderColor: '#3b82f6',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6'
          },
          {
            label: 'Li Solid‑State (QuantumScape)',
            data: [15, 30, 30, 35, 10, 15],
            backgroundColor: 'rgba(139, 92, 246, 0.10)',
            borderColor: '#8b5cf6',
            borderWidth: 2,
            pointBackgroundColor: '#8b5cf6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Sustainability Comparison — Material‑Level View',
            font: { size: window.innerWidth < 600 ? 13 : 16, weight: '600' },
            color: '#1a1a1a',
            padding: 15
          },
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              font: { size: window.innerWidth < 600 ? 10 : 12 }
            }
          },
          tooltip: {
            bodyFont: { size: window.innerWidth < 600 ? 10 : 12 }
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            pointLabels: { font: { size: window.innerWidth < 600 ? 10 : 12 } },
            ticks: { font: { size: window.innerWidth < 600 ? 9 : 11 } }
          }
        }
      }
    });
  }

  // Inject dedicated styles (unchanged, just ensure caption has its own space)
  if (!document.getElementById('section14-style')) {
    const style = document.createElement('style');
    style.id = 'section14-style';
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

      /* Fixed‑height radar chart wrapper (now without internal caption) */
      .section14-chart-wrap {
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 0 auto 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        height: 480px;
      }
      @media (max-width: 600px) {
        .section14-chart-wrap {
          height: 420px;
          padding: 12px;
        }
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
    `;
    document.head.appendChild(style);
  }
}

window.load_section14 = load_section14;