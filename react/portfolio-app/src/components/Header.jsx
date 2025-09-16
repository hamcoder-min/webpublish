
export function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="/images/favicon.ico" alt="header logo" className="header-logo-img" />
                <h1 className="header-logo-title">Judy</h1>
            </div>
            <nav>
                <ul className="header-menu">
                    <li><a href="#home" className="header-menu-item active">Home</a></li>
                    <li><a href="#about" className="header-menu-item">About</a></li>
                    <li><a href="#skill" className="header-menu-item">Skills</a></li>
                    <li><a href="#work" className="header-menu-item">My work</a></li>
                    <li><a href="#testimonial" className="header-menu-item">Testimonial</a></li>
                    <li><a href="#contact" className="header-menu-item">Contact</a></li>
                </ul>
            </nav>
            <button id="menu-toggle" className="header-toggle"><i className="fa-solid fa-bars"></i></button>
        </header>
    );
}