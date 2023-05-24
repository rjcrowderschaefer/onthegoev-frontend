import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
        <header>
            <div className="header">
              <h1>On The Go! EV</h1>
            </div>
     
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
          
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav" id="navigation">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/top-evs-2023">Top EVs 2023</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/before-you-go">Before You Go</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/trip-planner">Trip Planner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/charging-locations">Charging Stations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <div>
                <ul className="2">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li><NavLink to="/top-evs-2023">Top EVs 2023</NavLink>
                    </li>
                    <li><NavLink to="/before-you-go">Before You Go</NavLink>
                    </li>
                    <li><NavLink to="/trip-planner" activeStyle={{ color: 'red' }}>Trip Planner</NavLink>
                    </li>
                    <li><NavLink activeStyle={{ color: 'red' }} to="/charging-locations">Charging Stations</NavLink>
                    </li>
                    <li><NavLink to="/about">About</NavLink>
                    </li>
                    <li><NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>  */}


        </header>
        </>
    );
}

export default Header;

