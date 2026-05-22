function load_section1(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section1">
      <h2>1. Introduction</h2>

      <p class="section-intro">
        This report presents a comprehensive strategic and commercial assessment of the
        <strong>Solid‑State Sodium–Sulfur–Air Battery Energy Platform</strong> — a next‑generation energy storage
        technology designed to address the critical limitations of current lithium‑ion systems. The platform
        combines a non‑flammable solid‑state electrolyte with globally abundant sodium and sulfur, completely
        eliminating reliance on lithium, cobalt, and nickel. At its current <strong>TRL‑2</strong> stage, the
        platform has been fully conceptualised and documented, with a clear roadmap toward lab validation and
        eventual commercialisation.
      </p>

      <h3>Purpose of This Report</h3>
      <ul class="bullet-list">
        <li>Provide a fact‑based evaluation of the battery industry’s pain points and the opportunity they create.</li>
        <li>Benchmark the proposed platform against incumbents and emerging competitors worldwide.</li>
        <li>Assess technical, market, financial, and operational feasibility — all at a high, non‑confidential level.</li>
        <li>Outline a phased commercialisation pathway, from lab prototype to GWh‑scale manufacturing.</li>
        <li>Serve as a strategic reference for incubators, investors, government agencies, and research partners.</li>
      </ul>

      <h3>Report Structure</h3>
      <p>
        The report is divided into sixteen logically sequenced sections:
      </p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Section</th><th>Title</th><th>Focus</th></tr>
          </thead>
          <tbody>
            <tr><td>2</td><td>Industry Background</td><td>Global EV and storage demand, lithium‑ion limits, India’s opportunity</td></tr>
            <tr><td>3</td><td>Existing Battery Landscape</td><td>Incumbent chemistries, emerging technologies, white‑space identification</td></tr>
            <tr><td>4</td><td>Problem Statement</td><td>Safety, supply‑chain, cost, and performance pain points in detail</td></tr>
            <tr><td>5</td><td>Proposed Battery Platform</td><td>High‑level architecture, intended advantages, conceptual positioning</td></tr>
            <tr><td>6</td><td>Technical Benchmark Table</td><td>20‑parameter comparison with NMC, LFP, Na‑ion, and solid‑state Li</td></tr>
            <tr><td>7</td><td>Application Segments</td><td>EVs, grid storage, aerospace, defence, and suitability mapping</td></tr>
            <tr><td>8</td><td>Market Opportunity</td><td>TAM/SAM/SOM analysis (global and India), growth catalysts</td></tr>
            <tr><td>9</td><td>Competitor Analysis</td><td>20+ global players, competitive radar, strategic groups</td></tr>
            <tr><td>10</td><td>India Opportunity</td><td>Import dependency, PLI schemes, raw material localisation</td></tr>
            <tr><td>11</td><td>Business Model</td><td>Phased monetisation pathways, licensing, niche‑to‑scale approach</td></tr>
            <tr><td>12</td><td>Commercialisation Roadmap</td><td>Timeline, milestones, funding needs</td></tr>
            <tr><td>13</td><td>Risk Analysis</td><td>Technical, scale‑up, certification, competition, and market risks</td></tr>
            <tr><td>14</td><td>Sustainability & Environmental Impact</td><td>Material abundance, recycling, ESG alignment</td></tr>
            <tr><td>15</td><td>Future Outlook</td><td>Macro trends (EV, AI, aviation, grids) and platform relevance</td></tr>
            <tr><td>16</td><td>Conclusion</td><td>Key takeaways, realistic positioning, next steps</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Status & Disclaimer</h3>
      <p>
        The platform is at <strong>TRL‑2 (Concept & Formulation)</strong>. All performance figures are phased
        development targets derived from public‑domain chemistry and standard engineering weight‑penalty rules.
        They have not yet been experimentally validated. The report does not disclose any proprietary material
        compositions, synthesis methods, or manufacturing processes. All competitive data is sourced from
        publicly available information (2024‑2025).
      </p>
    </section>
  `;

  // Ensure consistent styling (once)
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

// Make function globally available
window.load_section1 = load_section1;