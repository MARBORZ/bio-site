function Header(){
    return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
            <div className="header__logo">Amadi</div>

            <nav className="header__nav">
                <a className="header__link" href="#hero">About</a>
                <a className="header__link" href="#projects">Projects</a>
                <a className="header__link" href="#contact">Contact</a>
            </nav>
            </div>
        </div>
    </header>
  );
}


export default Header;