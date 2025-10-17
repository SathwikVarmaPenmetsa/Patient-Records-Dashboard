const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} <span className="footer-brand">Jarurat Care</span>. All rights reserved.
      </p>
      <p className="footer-subtext">
        Made with ❤️ by Jarurat Care Team
      </p>
    </footer>
  );
};

export default Footer;