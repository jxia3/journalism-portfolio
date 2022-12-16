// Imports

import Link from "next/link"

// Navigation link component

const NavLink = ({ name, href, external }) => (
    <>
        {external ? (
            <a className="link" href={href} target="_blank">{name}</a>
        ) : (
            <Link href={href}>
                <a className="link">{name}</a>
            </Link>
        )}
        <style jsx>{`
            .link {
                font-family: "Raleway", sans-serif;
                font-weight: lighter;
                margin: 0 18px;
            }

            .link:after {
                display: block;
                content: "";
                border-bottom: solid 1px #000000;  
                transform: scaleX(0);  
                transition: transform 150ms ease-in-out;
            }

            .link:hover:after {
                transform: scaleX(1);
            }

            @media only screen and (max-width: 700px) {
                .link {
                    font-size: 0.9rem;
                    margin: 0 10px;
                }
            }

            @media only screen and (max-width: 500px) {
                .link {
                    margin: 0 auto 0 0;
                }
            }
        `}</style>
    </>
)

// Navigation bar component

const NavBar = () => (
    <>
        <nav className="navbar">
            <Link href="/">
                <a className="heading">
                    <img className="icon" src="/icon.png"></img>
                    <div className="name">JERRY XIA</div>
                </a>
            </Link>
            <div className="links">
                <NavLink name="STORIES" href="/stories"></NavLink>
                <NavLink name="RESUME" href="/resume"></NavLink>
                <NavLink name="REFLECTIONS" href="/reflections"></NavLink>
                <NavLink name="STAFF PAGE" href="https://thecampanile.org/author/jerryxia" external></NavLink>
            </div>
        </nav>
        <style jsx>{`
            .navbar {
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0 max(calc(50vw - 550px), 20px);
            }

            .heading {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-right: 36px;
            }

            .icon {
                width: 40px;
                height: 40px;
                margin-right: 18px;
            }

            .name {
                font-family: "Raleway", sans-serif;
                font-size: 1.125rem;
            }

            .links {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }

            @media only screen and (max-width: 700px) {
                .icon {
                    margin-right: 0;
                }

                .name {
                    display: none;
                }

                .heading {
                    margin-right: 12px;
                }
            }

            @media only screen and (max-width: 500px) {
                .heading {
                    margin-right: 24px;
                }

                .links {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 16px;
                    grid-row-gap: 6px;
                }
            }
        `}</style>
    </>
)

// Footer component

const Footer = () => (
    <>
        <footer className="footer">
            © Jerry Xia 2023
            <a className="github" href="https://github.com/jxia3/journalism-portfolio" target="_blank">
                <img className="github-icon" src="/github.png"></img>
            </a>
        </footer>
        <style jsx>{`
            .footer {
                height: 60px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                border-top: 0.5px solid #000000;
                padding: 0 max(calc(50vw - 550px), 20px);
            }

            .github {
                margin-left: auto;
            }

            .github-icon {
                position: relative;
                top: 3px;
                height: 32px;
            }
        `}</style>
    </>
)

// Layout component

const Layout = ({ children }) => (
    <>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <style jsx global>{`
            @media only screen and (max-width: 1000px) {
                html {
                    font-size: 14px;
                }
            }
        `}</style>
    </>
)

// Exports

export default Layout