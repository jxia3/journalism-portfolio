// Files and modules

import Link from "next/link"

// Page link component

const PageLink = ({ name, href, external }) => (
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
                font-size: 1.125rem;
                font-weight: lighter;
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
        `}</style>
    </>
)

// Home page

const Home = () => (
    <>
        <div className="landing">
            <h1 className="name">JERRY XIA</h1>
            <div className="desc">JOURNALISM PORTFOLIO</div>
            <div className="divider"></div>
            <div className="links">
                <PageLink name="STORIES" href="/stories"></PageLink>
                <div className="link-divider">•</div>
                <PageLink name="RESUME" href="/resume"></PageLink>
                <div className="link-divider">•</div>
                <PageLink name="REFLECTIONS" href="/reflections"></PageLink>
                <div className="link-divider">•</div>
                <PageLink name="STAFF PAGE" href="https://thecampanile.org/author/jerryxia" external></PageLink>
            </div>
            <img className="center expand-left" src="/bars.svg"></img>
            <img className="center expand-right" src="/bars.svg"></img>
        </div>
        <style jsx>{`
            .landing {
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: 20px;
                overflow: hidden;
            }

            .name {
                font-family: "Raleway", sans-serif;
                font-size: 6.75rem;
                font-weight: lighter;
                opacity: 0;
                animation: fade 1s ease-out 300ms forwards;
            }

            .desc {
                font-family: "Raleway", sans-serif;
                font-size: 1.5rem;
                font-weight: lighter;
                margin-top: 12px;
                opacity: 0;
                animation: fade 1s ease-out 300ms forwards;
            }

            .divider {
                width: 600px;
                height: 1px;
                background-color: #000000;
                margin: 32px 0;
                transform: scaleX(0);
                animation: scale 750ms ease-out 300ms forwards;
            }

            .links {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                opacity: 0;
                animation: fade 1s ease-out 300ms forwards;
            }

            .link-divider {
                display: inline-block;
                font-size: 0.75rem;
                margin: 0 16px;
            }

            .center {
                position: fixed;
                top: calc(50% - 50px);
                left: calc(50% - 50px);
            }

            .expand-left {
                width: 100px;
                height: 100px;
                pointer-events: none;
                animation: expand-left 600ms linear forwards;
            }

            .expand-right {
                width: 100px;
                height: 100px;
                pointer-events: none;
                transform: scaleX(-1);
                animation: expand-right 600ms linear forwards;
            }

            .bar {
                position: absolute;
                width: 4px;
                height: 54.75%;
                background-color: #000000;
            }

            .top-left {
                top: 0;
                left: 15px;
                transform: rotate(30deg);
            }

            .bottom-left {
                bottom: 0;
                left: 15px;
                transform: rotate(-30deg);
            }

            @keyframes scale {
                0% {
                    transform: scaleX(0);
                }
                100% {
                    transform: scaleX(1);
                }
            }

            @keyframes fade {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes expand-left {
                0% {
                    transform: scale(1);
                }
                60% {
                    transform: translateX(-15vw) scale(11.5);
                }
                100% {
                    transform: translateX(-35vw) scale(11.5);
                }
            }

            @keyframes expand-right {
                0% {
                    transform: scaleX(-1) scale(1);
                }
                60% {
                    transform: scaleX(-1) translateX(-15vw) scale(11.5);
                }
                100% {
                    transform: scaleX(-1) translateX(-35vw) scale(11.5);
                }
            }

            @media only screen and (max-width: 1200px) {
                @keyframes expand-left {
                    0% {
                        transform: scale(1);
                    }
                    60% {
                        transform: translateX(-15vw) scale(11.5);
                    }
                    100% {
                        transform: translateX(-30vw) scale(11.5);
                    }
                }

                @keyframes expand-right {
                    0% {
                        transform: scaleX(-1) scale(1);
                    }
                    60% {
                        transform: scaleX(-1) translateX(-15vw) scale(11.5);
                    }
                    100% {
                        transform: scaleX(-1) translateX(-30vw) scale(11.5);
                    }
                }
            }

            @media only screen and (max-width: 900px) {
                .expand-left {
                    transform: rotate(90deg);
                }

                .expand-right {
                    transform: rotate(-90deg);
                }

                @keyframes expand-left {
                    0% {
                        transform: scale(1) rotate(90deg);
                    }
                    100% {
                        transform: translateY(-30vh) scale(10) rotate(90deg);
                    }
                }

                @keyframes expand-right {
                    0% {
                        transform: scale(1) rotate(-90deg);
                    }
                    100% {
                        transform: translateY(30vh) scale(10) rotate(-90deg);
                    }
                }
            }

            @media only screen and (max-width: 650px) {
                .divider {
                    width: 400px;
                }
            }

            @media only screen and (max-width: 500px) {
                .divider {
                    width: 320px;
                }

                .link-divider {
                    margin: 0 8px;
                }
            }

            @media only screen and (max-width: 400px) {
                .name {
                    font-size: 6rem;
                }

                .divider {
                    width: 250px;
                }
            }
        `}</style>
        <style jsx global>{`
            @media only screen and (max-width: 650px) {
                html {
                    font-size: 12px;
                }
            }

            @media only screen and (max-width: 500px) {
                html {
                    font-size: 10px;
                }
            }
        `}</style>
    </>
)

// Exports

export default Home