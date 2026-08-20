import { useMemo, useState } from 'react';

const plans = [
  {
    name: 'Single Shared',
    monthly: 1.99,
    yearly: 0.99,
    features: ['1 website', '50 GB NVMe storage', 'Free SSL', 'Weekly backups'],
  },
  {
    name: 'Premium',
    monthly: 2.99,
    yearly: 1.99,
    features: ['100 websites', '100 GB NVMe storage', 'Free domain', 'Daily backups'],
    featured: true,
  },
  {
    name: 'Business',
    monthly: 5.99,
    yearly: 3.99,
    features: ['100 websites', '200 GB NVMe storage', 'Priority support', 'Advanced security'],
  },
];

const featureCards = [
  { icon: '⚡', title: 'Lightning speed', text: 'Optimized infrastructure and LiteSpeed caching keep your website fast under load.' },
  { icon: '🔒', title: 'Built-in security', text: 'Free SSL, DDoS protection, malware scanning, and secure backups all included.' },
  { icon: '🛠️', title: 'One-click installs', text: 'Launch WordPress, WooCommerce, and other apps in seconds using a streamlined setup.' },
  { icon: '📈', title: 'Scalable growth', text: 'Upgrade easily to cloud or VPS plans as traffic and complexity increase.' },
  { icon: '🌐', title: 'Free domain', text: 'Enjoy your first domain and domain management tools with many hosting plans.' },
  { icon: '🎧', title: 'World-class support', text: 'Expert help is available around the clock via chat and ticket support.' },
];

const testimonials = [
  '“We moved our e-commerce store to Hostinger and saw page load times improve instantly.”',
  '“The setup was effortless, and support was there when we needed it most.”',
  '“Affordable pricing, great performance, and a platform that just works.”',
];

const partnerNames = ['WordPress', 'Shopify', 'Squarespace', 'Webflow', 'Notion'];

function App() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const getPrice = (plan) => (billingCycle === 'monthly' ? plan.monthly : plan.yearly);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand" aria-label="Hostinger home">
            <div className="brand-mark">H</div>
            <span>Hostinger</span>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#hosting">Hosting</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Reviews</a>
          </nav>
          <button className="btn btn-small btn-secondary" type="button">Sign In</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Built for modern businesses</p>
              <h1>Everything you need to launch, grow, and protect your online presence.</h1>
              <p className="lead">
                From fast shared hosting to managed WordPress and cloud solutions, Hostinger gives you the
                speed, support, and security to build with confidence.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#pricing">Get started</a>
                <a className="btn btn-ghost" href="#features">Explore features</a>
              </div>
              <ul className="hero-meta" aria-label="Hostinger value highlights">
                <li>99.9% uptime</li>
                <li>Free SSL</li>
                <li>24/7 support</li>
              </ul>
            </div>

            <div className="hero-panel" aria-label="Hosting plan preview">
              <div className="panel-badge">Most popular</div>
              <div className="mini-plan">
                <div>
                  <p className="mini-label">Premium website</p>
                  <h2>
                    <span className="price">${getPrice(plans[1]).toFixed(getPrice(plans[1]) % 1 === 0 ? 0 : 2)}</span>
                    <span>/mo</span>
                  </h2>
                </div>
                <div className="mini-cta">
                  <span>Free domain</span>
                  <span>50 GB SSD</span>
                </div>
              </div>
              <div className="performance-card">
                <div>
                  <span className="tiny-label">Website speed</span>
                  <strong>1.2s</strong>
                </div>
                <div className="sparkline" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners" aria-label="Trusted by businesses and creators">
          <div className="container">
            <p>Trusted by entrepreneurs, creators, and growing teams worldwide</p>
            <div className="partner-row">
              {partnerNames.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features section">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Why Hostinger</p>
              <h2>Performance, security, and simplicity in one platform.</h2>
            </div>

            <div className="feature-grid">
              {featureCards.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hosting" className="showcase section">
          <div className="container showcase-grid">
            <div>
              <p className="eyebrow">Power your next idea</p>
              <h2>Hosting that scales from a personal portfolio to a global business.</h2>
              <ul className="check-list">
                <li>Unlimited free SSL certificates</li>
                <li>Automatic daily backups</li>
                <li>Global data centers for lower latency</li>
                <li>Developer-friendly tools and staging</li>
              </ul>
            </div>
            <div className="stack-card">
              <div className="stack-header">
                <span>Hosting stack</span>
                <span className="pill">Live</span>
              </div>
              <div className="stack-body">
                <div>
                  <label>Uptime</label>
                  <strong>99.98%</strong>
                </div>
                <div>
                  <label>Response time</label>
                  <strong>225ms</strong>
                </div>
                <div>
                  <label>Bandwidth</label>
                  <strong>Unlimited</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing section">
          <div className="container">
            <div className="section-intro pricing-header">
              <div>
                <p className="eyebrow">Simple pricing</p>
                <h2>Choose the plan that fits your next stage.</h2>
              </div>
              <div className="switch" aria-label="Billing toggle">
                <button
                  className={`toggle ${billingCycle === 'monthly' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`toggle ${billingCycle === 'yearly' ? 'active' : ''}`}
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => {
                const price = getPrice(plan);
                return (
                  <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                    <p className="plan-name">{plan.name}</p>
                    {plan.featured && <span className="badge">Best value</span>}
                    <h3>
                      <span className="price">${price.toFixed(price % 1 === 0 ? 0 : 2)}</span>
                      <span>/mo</span>
                    </h3>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a href="#" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                      Choose plan
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Customer stories</p>
              <h2>Brands and creators trust Hostinger to power their online presence.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((quote, index) => (
                <blockquote key={quote}>
                  {quote}
                  <footer>— {['Maya Ortiz', 'James Li', 'Sara Hughes'][index]}, Founder</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="cta section">
          <div className="container cta-box">
            <div>
              <p className="eyebrow">Ready to launch?</p>
              <h2>Build faster with hosting designed for growth.</h2>
            </div>
            <a className="btn btn-primary" href="#pricing">Start today</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <div className="brand" aria-label="Hostinger home">
              <div className="brand-mark">H</div>
              <span>Hostinger</span>
            </div>
            <p>Simple, fast, and secure hosting for every stage of growth.</p>
          </div>
          <div className="footer-links">
            <a href="#hosting">Hosting</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="container legal-row">
          <span>© {currentYear} Hostinger</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </>
  );
}

export default App;
