import React from "react";

const kpis = [
  { label: "Total Revenue", value: "₹ 18.4L", note: "+12.6% vs last month" },
  { label: "Optimal Price", value: "₹ 1,249", note: "Recommended for Product A" },
  { label: "Demand Forecast", value: "1,250 Units", note: "Next 30 days" },
  { label: "Competitor Gap", value: "₹ 50", note: "Below market average" },
];

const products = [
  { name: "Product A", category: "Electronics", price: "₹ 1,200", sold: "420", revenue: "₹ 5,04,000" },
  { name: "Product B", category: "Home", price: "₹ 799", sold: "610", revenue: "₹ 4,87,390" },
  { name: "Product C", category: "Fashion", price: "₹ 999", sold: "388", revenue: "₹ 3,87,612" },
];

const competitors = [
  { name: "Competitor A", price: "₹ 1,299", position: "Above Market" },
  { name: "Competitor B", price: "₹ 1,189", position: "Near Market" },
  { name: "Competitor C", price: "₹ 1,150", position: "Below Market" },
];

const features = [
  "Historical sales volume",
  "Product price history",
  "Inventory turnover",
  "Seasonal indicators",
  "Market demand trends",
  "Competitor prices",
];

function App() {
  return (
    <div className="app-shell">
      <style>{styles}</style>

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">P</div>
          <div>
            <h1>PricePilot AI</h1>
            <p>Dynamic Pricing Optimization &amp; Revenue Intelligence</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#products">Products</a>
          <a href="#prediction">Price Prediction</a>
          <a href="#forecasting">Forecasting</a>
          <a href="#competitor">Competitor Analysis</a>
          <a href="#revenue">Revenue</a>
          <a href="#analytics">Analytics</a>
        </nav>

        <div className="topbar-actions">
          <button className="ghost-btn" type="button">Notifications</button>
          <button className="primary-btn" type="button">Admin</button>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <section className="side-card profile-card">
            <h2>Business User</h2>
            <p>Pricing Manager</p>
            <div className="status-pill">Role-based access ready</div>
          </section>

          <section className="side-card">
            <h3>Quick Actions</h3>
            <button className="side-action" type="button">Add Product</button>
            <button className="side-action" type="button">Upload Sales Data</button>
            <button className="side-action" type="button">Run Forecast</button>
            <button className="side-action" type="button">Generate Recommendation</button>
          </section>

          <section className="side-card">
            <h3>System Health</h3>
            <ul className="mini-list">
              <li>API Status: Active</li>
              <li>Model Status: Ready</li>
              <li>Data Sync: Connected</li>
              <li>Dashboard: Live Preview</li>
            </ul>
          </section>
        </aside>

        <main className="main-content">
          <section id="dashboard" className="panel hero-panel">
            <div className="panel-heading">
              <div>
                <h2>Business Intelligence Dashboard</h2>
                <p>Monitor pricing, demand, revenue, and market movement from one place.</p>
              </div>
              <div className="badge-group">
                <span className="badge">AI Pricing</span>
                <span className="badge">Forecasting</span>
                <span className="badge">Revenue Ops</span>
              </div>
            </div>

            <div className="kpi-grid">
              {kpis.map((item) => (
                <article className="kpi-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.note}</small>
                </article>
              ))}
            </div>

            <div className="chart-grid">
              <article className="chart-card">
                <div className="card-title">
                  <h3>Revenue Trend</h3>
                  <span>Monthly Performance</span>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <span style={{ height: "35%" }} />
                    <span style={{ height: "48%" }} />
                    <span style={{ height: "55%" }} />
                    <span style={{ height: "70%" }} />
                    <span style={{ height: "62%" }} />
                    <span style={{ height: "88%" }} />
                  </div>
                </div>
              </article>

              <article className="chart-card">
                <div className="card-title">
                  <h3>Pricing Performance</h3>
                  <span>Profitability Snapshot</span>
                </div>
                <div className="chart-placeholder">
                  <div className="donut">
                    <div className="donut-inner">
                      <strong>88%</strong>
                      <span>Accuracy</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="products" className="panel">
            <div className="panel-heading">
              <div>
                <h2>Product &amp; Pricing Data</h2>
                <p>Manage catalog data, historical pricing, sales, and stock information.</p>
              </div>
            </div>

            <div className="two-col">
              <article className="subpanel">
                <h3>Product Details</h3>
                <form className="grid-form">
                  <label>
                    Product Name
                    <input type="text" placeholder="Product A" />
                  </label>
                  <label>
                    Category
                    <input type="text" placeholder="Electronics" />
                  </label>
                  <label>
                    Current Price
                    <input type="number" placeholder="1200" />
                  </label>
                  <label>
                    Discount %
                    <input type="number" placeholder="10" />
                  </label>
                  <label>
                    Available Stock
                    <input type="number" placeholder="500" />
                  </label>
                  <label>
                    Promotion Campaign
                    <input type="text" placeholder="Festival Offer" />
                  </label>

                  <div className="form-actions">
                    <button className="primary-btn" type="button">Save Product</button>
                    <button className="ghost-btn" type="button">Import Dataset</button>
                  </div>
                </form>
              </article>

              <article className="subpanel">
                <h3>Pricing Records</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Units Sold</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.name}>
                        <td>{p.name}</td>
                        <td>{p.category}</td>
                        <td>{p.price}</td>
                        <td>{p.sold}</td>
                        <td>{p.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            </div>
          </section>

          <section id="prediction" className="panel">
            <div className="panel-heading">
              <div>
                <h2>Price Prediction</h2>
                <p>Predict the best price using historical demand, market conditions, and competitor signals.</p>
              </div>
            </div>

            <div className="two-col">
              <article className="subpanel">
                <h3>Prediction Controls</h3>
                <form className="grid-form">
                  <label>
                    Select Product
                    <select>
                      <option>Product A</option>
                      <option>Product B</option>
                      <option>Product C</option>
                    </select>
                  </label>
                  <label>
                    Model
                    <select>
                      <option>XGBoost</option>
                      <option>Random Forest</option>
                      <option>Prophet</option>
                      <option>ARIMA</option>
                    </select>
                  </label>
                  <label>
                    Forecast Horizon
                    <select>
                      <option>7 Days</option>
                      <option>14 Days</option>
                      <option>30 Days</option>
                    </select>
                  </label>
                  <label>
                    Seasonal Factor
                    <input type="text" placeholder="Festival Season" />
                  </label>

                  <div className="form-actions">
                    <button className="primary-btn" type="button">Generate Recommendation</button>
                  </div>
                </form>
              </article>

              <article className="subpanel">
                <h3>Prediction Output</h3>
                <div className="output-stack">
                  <div className="output-item"><span>Optimal Price</span><strong>₹ 1,249</strong></div>
                  <div className="output-item"><span>Trend</span><strong>Increasing</strong></div>
                  <div className="output-item"><span>Confidence</span><strong>88%</strong></div>
                  <div className="output-item"><span>Expected Revenue Impact</span><strong>+13%</strong></div>
                </div>
              </article>
            </div>
          </section>

          <section id="forecasting" className="panel">
            <div className="panel-heading">
              <div>
                <h2>Demand Forecasting</h2>
                <p>Support short-term, medium-term, and long-term planning with structured forecasts.</p>
              </div>
            </div>

            <div className="three-col">
              <article className="subpanel forecast-card">
                <h3>Short-Term</h3>
                <p>7 / 14 / 30 days</p>
                <strong>Inventory + promotion planning</strong>
              </article>
              <article className="subpanel forecast-card">
                <h3>Medium-Term</h3>
                <p>3 / 6 months</p>
                <strong>Procurement + revenue planning</strong>
              </article>
              <article className="subpanel forecast-card">
                <h3>Long-Term</h3>
                <p>12 months</p>
                <strong>Strategy + expansion planning</strong>
              </article>
            </div>

            <div className="two-col spacing-top">
              <article className="subpanel">
                <h3>Forecast Features</h3>
                <ul className="mini-list">
                  {features.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>

              <article className="subpanel">
                <h3>Forecast View</h3>
                <div className="line-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            </div>
          </section>

          <section id="competitor" className="panel">
            <div className="panel-heading">
              <div>
                <h2>Competitor Analysis</h2>
                <p>Track market prices, compare positioning, and detect pricing opportunities.</p>
              </div>
            </div>

            <div className="two-col">
              <article className="subpanel">
                <h3>Monitoring</h3>
                <form className="grid-form">
                  <label>
                    Competitor Name
                    <input type="text" placeholder="Competitor A" />
                  </label>
                  <label>
                    Product Category
                    <input type="text" placeholder="Electronics" />
                  </label>
                  <label>
                    Target Market
                    <input type="text" placeholder="India" />
                  </label>

                  <div className="form-actions">
                    <button className="primary-btn" type="button">Track Competitor</button>
                  </div>
                </form>
              </article>

              <article className="subpanel">
                <h3>Market Comparison</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Competitor</th>
                      <th>Price</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c) => (
                      <tr key={c.name}>
                        <td>{c.name}</td>
                        <td>{c.price}</td>
                        <td>{c.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            </div>
          </section>

          <section id="revenue" className="panel">
            <div className="panel-heading">
              <div>
                <h2>Revenue Optimization</h2>
                <p>Simulate pricing strategies and estimate profitability impact before making decisions.</p>
              </div>
            </div>

            <div className="two-col">
              <article className="subpanel">
                <h3>Simulation Controls</h3>
                <form className="grid-form">
                  <label>
                    Strategy
                    <select>
                      <option>Revenue Maximization</option>
                      <option>Margin Optimization</option>
                      <option>Discount Strategy</option>
                    </select>
                  </label>
                  <label>
                    Price Change
                    <input type="text" placeholder="+10%" />
                  </label>
                  <label>
                    Inventory Level
                    <input type="text" placeholder="Moderate" />
                  </label>

                  <div className="form-actions">
                    <button className="primary-btn" type="button">Run Simulation</button>
                  </div>
                </form>
              </article>

              <article className="subpanel">
                <h3>Optimization Output</h3>
                <div className="output-stack">
                  <div className="output-item"><span>Expected Revenue</span><strong>₹ 18.4L</strong></div>
                  <div className="output-item"><span>Expected Profit</span><strong>₹ 6.9L</strong></div>
                  <div className="output-item"><span>Margin Impact</span><strong>+8.1%</strong></div>
                  <div className="output-item"><span>Recommended Strategy</span><strong>Balanced Growth</strong></div>
                </div>
              </article>
            </div>
          </section>

          <section id="analytics" className="panel">
            <div className="panel-heading">
              <div>
                <h2>Analytics Dashboard</h2>
                <p>View revenue analytics, pricing performance, and business intelligence reports.</p>
              </div>
            </div>

            <div className="two-col">
              <article className="subpanel">
                <h3>Revenue Analytics</h3>
                <div className="chart-placeholder small">
                  <div className="chart-bars">
                    <span style={{ height: "44%" }} />
                    <span style={{ height: "52%" }} />
                    <span style={{ height: "61%" }} />
                    <span style={{ height: "73%" }} />
                    <span style={{ height: "81%" }} />
                  </div>
                </div>
              </article>

              <article className="subpanel">
                <h3>Business Intelligence Reports</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pricing Performance</td>
                      <td>Ready</td>
                      <td>Today</td>
                    </tr>
                    <tr>
                      <td>Revenue Growth</td>
                      <td>Ready</td>
                      <td>Today</td>
                    </tr>
                    <tr>
                      <td>Demand Forecast</td>
                      <td>Ready</td>
                      <td>Today</td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const styles = `
  :root {
    --bg: #0b1020;
    --panel: rgba(15, 23, 42, 0.9);
    --panel-2: rgba(17, 24, 39, 0.9);
    --line: rgba(148, 163, 184, 0.16);
    --text: #e5e7eb;
    --muted: #94a3b8;
    --primary: #22d3ee;
    --primary-2: #818cf8;
    --accent: #a78bfa;
    --success: #34d399;
    --shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
    --radius-xl: 28px;
    --radius-lg: 20px;
    --radius-md: 14px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--text);
    background:
      radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 28%),
      radial-gradient(circle at top right, rgba(167, 139, 250, 0.14), transparent 26%),
      linear-gradient(180deg, #050816 0%, #0b1020 46%, #090d18 100%);
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: 0;
    transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }

  .app-shell {
    width: min(100% - 24px, 1440px);
    margin: 18px auto 28px;
  }

  .topbar {
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: space-between;
    padding: 22px 24px;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(17, 24, 39, 0.72));
    backdrop-filter: blur(14px);
    box-shadow: var(--shadow);
    position: sticky;
    top: 14px;
    z-index: 20;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 260px;
  }

  .brand-mark {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, var(--primary), var(--primary-2));
    box-shadow: 0 12px 30px rgba(34, 211, 238, 0.18);
  }

  .brand h1 {
    margin: 0;
    font-size: 1.7rem;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  .brand p {
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 0.94rem;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    flex: 1;
  }

  .nav a {
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(148, 163, 184, 0.14);
    color: #dbeafe;
    font-size: 0.92rem;
  }

  .nav a:hover {
    background: rgba(34, 211, 238, 0.12);
    border-color: rgba(34, 211, 238, 0.35);
  }

  .topbar-actions {
    display: flex;
    gap: 10px;
  }

  .layout {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 18px;
    margin-top: 18px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: sticky;
    top: 108px;
    align-self: start;
  }

  .side-card,
  .panel,
  .subpanel {
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.72));
    backdrop-filter: blur(12px);
    box-shadow: var(--shadow);
    border-radius: var(--radius-xl);
  }

  .side-card {
    padding: 18px;
  }

  .profile-card h2,
  .side-card h3,
  .panel h2,
  .subpanel h3 {
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }

  .profile-card p {
    margin: 6px 0;
    color: var(--muted);
  }

  .status-pill {
    display: inline-flex;
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 999px;
    color: #dbeafe;
    background: rgba(34, 211, 238, 0.1);
    border: 1px solid rgba(34, 211, 238, 0.25);
    font-size: 0.88rem;
  }

  .side-action,
  .primary-btn,
  .ghost-btn {
    width: 100%;
    border-radius: 14px;
    padding: 11px 14px;
    font-weight: 600;
  }

  .side-action {
    margin-bottom: 10px;
    color: white;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.16), rgba(167, 139, 250, 0.18));
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .primary-btn {
    color: white;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.92), rgba(129, 140, 248, 0.92));
    box-shadow: 0 12px 25px rgba(34, 211, 238, 0.16);
  }

  .ghost-btn {
    color: #e2e8f0;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(148, 163, 184, 0.2);
  }

  .mini-list {
    margin: 0;
    padding-left: 18px;
    color: var(--muted);
  }

  .mini-list li + li {
    margin-top: 10px;
  }

  .main-content {
    display: grid;
    gap: 18px;
  }

  .panel {
    padding: 22px;
    scroll-margin-top: 120px;
  }

  .hero-panel {
    background:
      linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.84)),
      radial-gradient(circle at top right, rgba(34, 211, 238, 0.08), transparent 34%);
  }

  .panel-heading {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 18px;
    flex-wrap: wrap;
  }

  .panel-heading p {
    margin: 8px 0 0;
    color: var(--muted);
  }

  .badge-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .badge {
    padding: 8px 12px;
    border-radius: 999px;
    font-size: 0.88rem;
    color: #dbeafe;
    border: 1px solid rgba(148, 163, 184, 0.15);
    background: rgba(255, 255, 255, 0.04);
  }

  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
  }

  .kpi-card {
    min-height: 118px;
    padding: 18px;
    border-radius: 18px;
    border: 1px solid rgba(148, 163, 184, 0.14);
    background: rgba(255, 255, 255, 0.03);
  }

  .kpi-card span {
    display: block;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .kpi-card strong {
    display: block;
    margin-top: 10px;
    font-size: 1.8rem;
    color: white;
    letter-spacing: -0.03em;
  }

  .kpi-card small {
    color: #cbd5e1;
  }

  .chart-grid,
  .two-col,
  .three-col {
    display: grid;
    gap: 16px;
    margin-top: 16px;
  }

  .chart-grid,
  .two-col {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .three-col {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .subpanel {
    padding: 18px;
  }

  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .card-title span {
    color: var(--muted);
    font-size: 0.9rem;
  }

  .chart-placeholder {
    min-height: 260px;
    border-radius: 18px;
    border: 1px dashed rgba(148, 163, 184, 0.26);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .chart-placeholder.small {
    min-height: 220px;
  }

  .chart-bars {
    display: flex;
    align-items: end;
    gap: 12px;
    height: 180px;
    width: min(90%, 340px);
  }

  .chart-bars span {
    flex: 1;
    border-radius: 16px 16px 0 0;
    background: linear-gradient(180deg, var(--primary), var(--primary-2), var(--accent));
    box-shadow: 0 12px 30px rgba(34, 211, 238, 0.14);
  }

  .donut {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: conic-gradient(var(--primary) 0 88%, rgba(255,255,255,0.1) 88% 100%);
    display: grid;
    place-items: center;
  }

  .donut-inner {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background: #0f172a;
    display: grid;
    place-items: center;
    text-align: center;
  }

  .donut-inner strong {
    font-size: 1.5rem;
    color: white;
  }

  .donut-inner span {
    color: var(--muted);
    font-size: 0.9rem;
  }

  .grid-form {
    display: grid;
    gap: 14px;
  }

  .grid-form label {
    display: grid;
    gap: 8px;
    color: #dbeafe;
    font-size: 0.95rem;
  }

  input,
  select {
    width: 100%;
    padding: 12px 14px;
    border-radius: 14px;
    color: var(--text);
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(148, 163, 184, 0.22);
    outline: none;
  }

  .form-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 4px;
  }

  .form-actions .primary-btn,
  .form-actions .ghost-btn {
    width: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid rgba(148, 163, 184, 0.16);
    background: rgba(2, 6, 23, 0.28);
  }

  .data-table th,
  .data-table td {
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
    color: #cbd5e1;
  }

  .data-table th {
    color: #e2e8f0;
    background: rgba(15, 23, 42, 0.95);
  }

  .output-stack {
    display: grid;
    gap: 12px;
  }

  .output-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(148, 163, 184, 0.12);
  }

  .output-item span {
    color: var(--muted);
  }

  .output-item strong {
    color: white;
  }

  .forecast-card {
    min-height: 160px;
    display: grid;
    align-content: start;
  }

  .forecast-card p {
    margin: 0 0 10px;
    color: var(--muted);
  }

  .forecast-card strong {
    color: white;
    font-size: 1.05rem;
  }

  .spacing-top {
    margin-top: 16px;
  }

  .line-chart {
    height: 220px;
    display: flex;
    align-items: end;
    gap: 12px;
    padding: 20px;
  }

  .line-chart span {
    flex: 1;
    height: 50%;
    border-radius: 999px 999px 0 0;
    background: linear-gradient(180deg, rgba(34, 211, 238, 0.9), rgba(129, 140, 248, 0.9));
  }

  .line-chart span:nth-child(1) { height: 35%; }
  .line-chart span:nth-child(2) { height: 54%; }
  .line-chart span:nth-child(3) { height: 48%; }
  .line-chart span:nth-child(4) { height: 74%; }
  .line-chart span:nth-child(5) { height: 66%; }
  .line-chart span:nth-child(6) { height: 88%; }
  .line-chart span:nth-child(7) { height: 78%; }

  @media (max-width: 1200px) {
    .layout {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
    }

    .topbar {
      position: static;
      flex-wrap: wrap;
    }

    .nav {
      order: 3;
      width: 100%;
      justify-content: flex-start;
    }

    .kpi-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .chart-grid,
    .two-col,
    .three-col {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .app-shell {
      width: min(100% - 16px, 1440px);
      margin: 10px auto 18px;
    }

    .topbar,
    .panel,
    .side-card,
    .subpanel {
      border-radius: 22px;
    }

    .topbar {
      padding: 18px;
    }

    .brand {
      min-width: unset;
    }

    .brand h1 {
      font-size: 1.45rem;
    }

    .nav a {
      width: 100%;
      justify-content: flex-start;
    }

    .kpi-grid {
      grid-template-columns: 1fr;
    }

    .form-actions .primary-btn,
    .form-actions .ghost-btn,
    .side-action,
    .primary-btn,
    .ghost-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .topbar-actions {
      width: 100%;
    }

    .topbar-actions .primary-btn,
    .topbar-actions .ghost-btn {
      flex: 1;
    }

    .card-title {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default App;