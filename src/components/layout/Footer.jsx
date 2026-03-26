function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            © {new Date().getFullYear()} Amadi
          </div>

          <div className="footer__right">
            <a className="footer__link" href="https://github.com/MARBORZ" target="_blank">
              <img height={"24px"} width={"24px"} src="/github.svg" alt="Github" />
            </a>
            <a className="footer__link" href="mailto:masuevamadi@gmail.com">
              <img height={"24px"} width={"24px"} src="/gmail.svg" alt="Gmail" />
            </a>
          </div>
        </div>
      </div>
  </footer>

  );
}

export default Footer;
