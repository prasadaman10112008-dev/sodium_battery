function load_section6(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section6">
      <h2>6. Technical Benchmark Table</h2>
      <p class="section-intro">
        The following table benchmarks the platform's key performance and sustainability parameters against current industry‑standard lithium‑ion systems (NMC and LFP). All figures for the proposed platform represent laboratory targets and projected industrial milestones under phased development (current TRL 2). Data for conventional systems reflects commercially available cells in 2024.
      </p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Parameter</th>
              <th>Conventional Li‑ion (NMC / LFP)</th>
              <th>Proposed Sodium Solid‑State Platform (Targets)</th>
              <th>Commentary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>Gravimetric Energy Density (Wh/kg)</strong></td>
              <td>NMC: 200–280; LFP: 150–180</td>
              <td>Lab: 150–200; Prototype: 200–350; Industrial: 400–450</td>
              <td>Long‑term target surpasses NMC ceiling; early lab aligns with high‑end LFP</td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>Volumetric Energy Density (Wh/L)</strong></td>
              <td>600–700 (pack‑level)</td>
              <td>650–700 (cell‑level)</td>
              <td>Enables compact pack design for modern EV architectures</td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>Peak Power Density (W/kg)</strong></td>
              <td>500–1,500</td>
              <td>450–700 (target)</td>
              <td>Realistic for early applications; competitive with Li‑ion</td>
            </tr>
            <tr>
              <td>4</td>
              <td><strong>Cycle Life (to 80% SOH)</strong></td>
              <td>NMC: 1,000–2,000; LFP: 3,000–6,000</td>
              <td>1,500–3,000</td>
              <td>Conservative initial target competitive with NMC; LFP retains edge in longevity</td>
            </tr>
            <tr>
              <td>5</td>
              <td><strong>Calendar Life</strong></td>
              <td>8–15 years</td>
              <td>6–10 years</td>
              <td>Acceptable for automotive and most industrial stationary applications</td>
            </tr>
            <tr>
              <td>6</td>
              <td><strong>Standard Charge Time</strong></td>
              <td>60–120 min</td>
              <td>60–90 min</td>
              <td>Comparable; system‑level optimisation will be needed</td>
            </tr>
            <tr>
              <td>7</td>
              <td><strong>Fast Charge Capability</strong></td>
              <td>18–30 min (high‑end)</td>
              <td>20–30 min (target)</td>
              <td>Competitive with today's best fast‑charging Li‑ion cells</td>
            </tr>
            <tr>
              <td>8</td>
              <td><strong>Cost per kWh</strong></td>
              <td>LFP: $80–120; NMC: $100–140</td>
              <td>Under evaluation; targeting LFP parity at scale</td>
              <td>Sodium‑sulfur bulk material cost structurally favourable</td>
            </tr>
            <tr>
              <td>9</td>
              <td><strong>Thermal Stability</strong></td>
              <td>Moderate (liquid electrolyte degrades at high temp)</td>
              <td>High (solid‑state electrolyte)</td>
              <td>Key safety differentiator in hot climates and high‑stress use</td>
            </tr>
            <tr>
              <td>10</td>
              <td><strong>Safety / Thermal Runaway Risk</strong></td>
              <td>Present — flammable liquid electrolyte</td>
              <td>Very low by design</td>
              <td>Inherent solid‑state architecture removes primary fire initiator</td>
            </tr>
            <tr>
              <td>11</td>
              <td><strong>Operating Temperature Range</strong></td>
              <td>-20°C to 60°C</td>
              <td>-20°C to 65°C</td>
              <td>Slightly wider window; supports more rugged deployment</td>
            </tr>
            <tr>
              <td>12</td>
              <td><strong>Coulombic Efficiency</strong></td>
              <td>99.5–99.9%</td>
              <td>~99.9% (target)</td>
              <td>Excellent charge reversibility reduces energy loss per cycle</td>
            </tr>
            <tr>
              <td>13</td>
              <td><strong>Self‑Discharge Rate</strong></td>
              <td><3% per month</td>
              <td><1% per month (target)</td>
              <td>Low idle loss — valuable for long‑dormancy defence/backup applications</td>
            </tr>
            <tr>
              <td>14</td>
              <td><strong>Raw Material Availability</strong></td>
              <td>Li, Co, Ni: concentrated supply</td>
              <td>Na, S: globally abundant, low‑cost</td>
              <td>Fundamental material advantage; orders of magnitude more accessible</td>
            </tr>
            <tr>
              <td>15</td>
              <td><strong>Supply Chain Dependency</strong></td>
              <td>High (China, DRC)</td>
              <td>Low (diversified global sourcing)</td>
              <td>Strategic resilience against trade disruption and export controls</td>
            </tr>
            <tr>
              <td>16</td>
              <td><strong>Scalability Potential</strong></td>
              <td>Proven at terawatt‑hour scale</td>
              <td>To be established (pilot not yet built)</td>
              <td>Key risk area; requires manufacturing process development</td>
            </tr>
            <tr>
              <td>17</td>
              <td><strong>Recyclability</strong></td>
              <td>Moderate — complex multi‑metal recovery</td>
              <td>High potential — fewer critical elements</td>
              <td>Simpler Na‑S chemistry may ease economic material recovery</td>
            </tr>
            <tr>
              <td>18</td>
              <td><strong>Environmental Impact</strong></td>
              <td>High mining footprint; ESG concerns</td>
              <td>Lower extraction impact; no cobalt artisanal mining</td>
              <td>Aligns with tightening EU Battery Regulation and ESG mandates</td>
            </tr>
            <tr>
              <td>19</td>
              <td><strong>Technology Readiness Level (TRL)</strong></td>
              <td>TRL 9</td>
              <td>TRL 2 (early lab concept)</td>
              <td>Significant development distance to commercial readiness</td>
            </tr>
            <tr>
              <td>20</td>
              <td><strong>Application Suitability</strong></td>
              <td>Proven across all major markets</td>
              <td>EVs, grid storage, aerospace, defence, industrial — targeting high‑safety, high‑energy niches</td>
              <td>Multi‑segment potential if technical milestones are met</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px;">
        All proposed platform figures are phased development targets and subject to successful laboratory validation, prototype demonstration, and manufacturing scale‑up. Actual commercial performance may vary.
      </p>
    </section>
  `;

  // Ensure shared styles exist
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
    `;
    document.head.appendChild(style);
  }
}

window.load_section6 = load_section6;