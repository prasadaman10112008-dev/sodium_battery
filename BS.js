function load_section11(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section11">
      <h2>11. Business Model</h2>
      <p class="section-intro">
        The business model is intentionally <strong>asset‑light and phased</strong>, matching the technology’s development stage. At TRL 2, there is no product, no revenue, and no manufacturing — therefore, the model focuses on <strong>how the venture intends to fund R&D and, after validation, how value can be captured</strong>. All post‑validation pathways are illustrative, not commitments.
      </p>

      <h3>11.1 Core Value Proposition to Future Customers</h3>
      <ul class="bullet-list">
        <li><strong>For Automotive OEMs:</strong> A drop‑in safe, lithium‑free cell pack that reduces fire risk, supply‑chain volatility, and long‑term exposure to cobalt/nickel pricing.</li>
        <li><strong>For Grid & Data Centre Operators:</strong> Inherently fire‑safe storage systems that lower insurance cost, simplify thermal management, and meet tightening safety regulations.</li>
        <li><strong>For Defence & Aerospace Agencies:</strong> Domestic, supply‑secure, high‑power batteries with zero‑tolerance for thermal events — critical for mission‑critical portable and vehicular systems.</li>
        <li><strong>For Government / Strategic Entities:</strong> A "Made in India" advanced chemistry platform directly supporting energy independence, import substitution, and sovereign capability goals.</li>
      </ul>

      <h3>11.2 Potential Monetisation Pathways (Post‑Validation)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Model</th><th>Description</th><th>Capital Intensity</th><th>Relevance (TRL Stage)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Technology Licensing</strong></td><td>License cell IP to established battery manufacturers for upfront fee + royalty per kWh produced.</td><td>Very low</td><td>TRL 5+ (A‑sample validated)</td></tr>
            <tr><td><strong>Joint Venture with OEM / Battery Maker</strong></td><td>Co‑develop and co‑produce application‑specific cells/packs with a strategic partner.</td><td>Medium (shared CapEx)</td><td>TRL 6+ (pilot line ready)</td></tr>
            <tr><td><strong>Captive Niche Manufacturing</strong></td><td>Small‑scale, high‑margin pack assembly for defence, aerospace, and data centres to build field credibility.</td><td>Medium‑high</td><td>TRL 5–7</td></tr>
            <tr><td><strong>Energy Storage Solutions Provider</strong></td><td>Vertically integrated offering: design, manufacture, deploy, and maintain turnkey storage systems.</td><td>High (scale manufacturing)</td><td>TRL 8+ (GWh scale)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>11.3 Phased Go‑to‑Market (Illustrative)</h3>
      <ul class="bullet-list">
        <li><strong>Phase 1 (Current – TRL 4):</strong> Pure R&D. Funded by grants, incubator seed, government schemes (DST, DRDO, BIRAC). Build IP portfolio.</li>
        <li><strong>Phase 2 (TRL 5–6, A‑Sample):</strong> License early IP to a strategic player or form a co‑development partnership with an Indian automotive/defence PSU/OEM. Earn milestone payments.</li>
        <li><strong>Phase 3 (TRL 6–7, Pilot Line):</strong> Small‑scale captive assembly for defence/aerospace niche to generate initial product revenue and field data.</li>
        <li><strong>Phase 4 (TRL 8–9, GWh Scale):</strong> Large‑scale manufacturing via JV with a major Indian battery manufacturer (e.g., Reliance, Tata, Ola) or licensing to multiple global producers.</li>
      </ul>

      <h3>11.4 Key Assumptions & Risk Mitigation</h3>
      <ul class="bullet-list">
        <li>IP will be protectable and sufficiently differentiated to command licensing premiums.</li>
        <li>Technical milestones (energy density, cycle life, safety) will be validated at each stage before commercial commitment.</li>
        <li>Staggered business model avoids large CapEx until technology is de‑risked at pilot scale.</li>
        <li>Initial sales target performance/security buyers (defence, aerospace) who value safety and supply chain over pure $/kWh, insulating against early cost disadvantage.</li>
      </ul>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        <em>This is not a financial forecast. The model is a hypothesis that will evolve as the technology matures. At TRL 2, no commercial agreements or revenue streams exist.</em>
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
    `;
    document.head.appendChild(style);
  }
}

window.load_section11 = load_section11;