function load_section16(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section16">
      <h2>16. Conclusion</h2>
      <p class="section-intro">
        The global battery industry is at an inflection point. Lithium‑ion dominance is increasingly challenged by material supply risks, safety limitations, and the need for chemistry diversification. The proposed sodium‑based solid‑state platform directly addresses this structural gap by targeting a combination that no single commercial battery delivers today: <strong>high energy density, solid‑state safety, and complete independence from lithium, cobalt, and nickel</strong>.
      </p>

      <h3>Key Takeaways</h3>
      <ul class="bullet-list">
        <li><strong>White‑Space Positioning:</strong> No existing commercial or near‑commercial battery simultaneously offers high energy, solid‑state safety, and lithium‑free supply chains. Our platform conceptually targets this intersection.</li>
        <li><strong>Performance Targets (Phased):</strong> From 200 Wh/kg in early validation to a long‑term goal of 400–450 Wh/kg, the pathway is grounded in public‑domain chemistry and standard engineering weight‑penalty rules.</li>
        <li><strong>Strategic Material Advantage:</strong> Sodium and sulfur are globally abundant, domestically available in India, and carry none of the geopolitical or ESG baggage of lithium, cobalt, or nickel.</li>
        <li><strong>Current Stage – TRL 2:</strong> The venture is at concept stage. No lab prototype exists. All figures are targets. The distance to commercial manufacturing is substantial and carries significant technical, scale‑up, and funding risk.</li>
        <li><strong>Competitive Reality:</strong> The field is crowded and well‑funded. Incumbent Li‑ion and next‑gen solid‑state players are moving targets. Speed to validation and strategic partnerships will be crucial.</li>
        <li><strong>India Opportunity:</strong> A domestically developed sodium solid‑state battery aligns directly with Atmanirbhar Bharat, the PLI‑ACC scheme, and India’s energy security goals. It could reduce a multi‑billion‑dollar lithium import dependency.</li>
        <li><strong>Phased Commercialisation:</strong> The realistic path is: lab validation → prototype → pilot with niche defence/aerospace customers → scaling to EV and grid storage after cost parity.</li>
        <li><strong>Environmental Promise:</strong> The platform’s material choice offers a lower extraction footprint, simpler recycling potential, and alignment with tightening global battery regulations.</li>
      </ul>

      <h3 style="margin-top: 30px;">Risk‑Adjusted Opportunity Snapshot</h3>
      <div class="chart-container" style="position: relative; width: 100%; max-width: 600px; margin: 0 auto 30px; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); height: 350px;">
        <canvas id="conclusionChart" style="display: block; width: 100%; height: 100%;"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Qualitative comparison of platform strengths vs. development challenges (TRL 2 perspective).
        </p>
      </div>

      <div class="highlight-box" style="margin-top: 24px;">
        <p><strong>Realistic Positioning Statement:</strong></p>
        <p style="font-size:0.95rem; font-style:italic;">
          “If successfully validated, scaled, and manufactured at competitive cost, high‑energy sodium‑based solid‑state battery systems may provide a geopolitically resilient, intrinsically safe, and environmentally preferable alternative pathway for advanced energy storage applications — particularly in markets where supply chain security and safety outweigh incremental lithium‑ion performance gains. The journey from concept to commercial reality is long, capital‑intensive, and technically demanding; success is not guaranteed, but the strategic rationale for attempting it is strong.”
        </p>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        This concludes the strategic positioning and commercialisation assessment. The platform is now seeking institutional support to begin Phase 1 lab validation.
      </p>
    </section>
  `;

  // ─────────────── Chart rendering ───────────────
  const canvas = document.getElementById('conclusionChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Material\nAdvantage',
          'Safety\nDesign',
          'Energy Density\nPathway',
          'Supply Chain\nResilience',
          'Recycling\nPotential'
        ],
        datasets: [{
          label: 'Platform Strength (Projected)',
          data: [100, 95, 75, 100, 70],
          backgroundColor: '#b8860b',
          borderRadius: 4
        }, {
          label: 'Current Risk / Development Need',
          data: [10, 20, 70, 15, 65],
          backgroundColor: '#dc2626',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,           // chart fills the fixed-height container
        plugins: {
          title: {
            display: true,
            text: 'Strengths vs. Development Needs (TRL 2)',
            font: { size: 14, weight: '600' }
          },
          legend: { position: 'bottom' }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: 'Score (out of 100)' }
          }
        }
      }
    });
  }

  // ───── Inject required CSS (once) ─────
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
      .chart-container {
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 0 auto 30px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        overflow-x: auto;
        /* Fixed height – prevents infinite stretch */
        height: 350px;
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

// Make function globally available
window.load_section16 = load_section16;