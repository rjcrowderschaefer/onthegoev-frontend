function Header(props) {
    return (
        <>
        <header>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/top-evs-2023">Top EVs 2023</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/before-you-go">Before You Go</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/trip-planner">Trip Planner</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/charging-locations">Charging Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;

