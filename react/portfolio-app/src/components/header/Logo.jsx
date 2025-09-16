
export function Logo({img, name}) {
    return (
        <div className="header-logo">
            <img src={img} alt="header logo" className="header-logo-img" />
            <h1 className="header-logo-title">{name}</h1>
        </div>
    );
}