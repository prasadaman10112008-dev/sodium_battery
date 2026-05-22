// demo.js – Product Demo with default image fallback
function load_demo(mainContainer) {
  // Default image and caption — always shown unless admin overrides via localStorage
  const defaultImg = "https://i.postimg.cc/pd3Py1HS/Untitled27-20260519200312.png";
  const defaultCaption = "Sodium Solid‑State Battery Cell Architecture";
  
  const imgSrc = localStorage.getItem('demoImage') || defaultImg;
  const caption = localStorage.getItem('demoCaption') || defaultCaption;
  
  const imgHtml = `<img src="${imgSrc}" alt="Product Concept" class="product-demo-img" id="demo-img" onerror="this.style.display='none';">`;
  
  mainContainer.innerHTML = `
    <section id="demo-section">
      <h2>Product Demo</h2>
      <p>Conceptual architecture illustration — proprietary implementation details intentionally excluded.</p>
      <div id="demo-image-container">
        ${imgHtml}
      </div>
      <p id="demo-caption" style="font-style:italic;color:var(--text-muted);margin-top:8px;">${caption}</p>
      <p style="font-size:0.78rem;color:var(--text-muted);margin-top:6px;">
        Image credit: Aman Prasad. <em>Update via Admin Panel to change.</em>
      </p>
    </section>
  `;
}

window.load_demo = load_demo;