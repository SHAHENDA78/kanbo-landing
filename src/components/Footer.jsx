import "../styles/Footer.css";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="logo-mark">kb</span>
            kanbo
          </a>
          <p>Ship work, not status updates.</p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
<span>© 2026 Kanbo. Designed & built by Shahenda Shaheen.</span>        <span className="status">
          <i /> all systems operational
        </span>
      </div>
    </footer>
  );
}
