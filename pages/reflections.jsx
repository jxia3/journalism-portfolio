// Files and modules

import Layout from "../components/Layout"
//import SplitQuote from "../components/SplitQuote.jsx"
//import Column from "../components/Column.jsx"
import { readFile, split } from "../helpers/text.js"

// Reflections page

const Reflections = ({ content }) => (
    <>
        <Layout>
            <div className="reflections">
                <div className="landing">
                    <div className="title">REFLECTIONS</div>
                    <div className="major">
                        <div className="major-content">
                            {split(content.major)}
                            <div className="quote">
                                <div className="quote-line"></div>
                                The dissemination of truthful and relevant information is critical in the digital era.
                                <div className="quote-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        <style jsx>{`
            .reflections {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 24px max(calc(50vw - 550px), 20px);
            }

            .landing {
                width: 100%;
                min-height: calc(100vh - 104px);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 30px;
            }

            .title {
                font-family: "Raleway", sans-serif;
                font-size: 3.5rem;
                font-weight: lighter;
            }

            .major {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .major-content {
                columns: 3;
                column-gap: 1.5rem;
            }

            .quote {
                width: 100%;
                font-size: 2rem;
                margin: 24px 0;
            }

            .quote-line {
                width: 80%;
                height: 0.5px;
                background-color: #000000;
                margin: 0 auto 0 auto;
                transform: scaleX(0);
                animation: scale 750ms ease-out forwards;
            }

            .quote-line:first-child {
                margin-bottom: 24px;
            }

            .quote-line:last-child {
                margin-top: 24px;
            }

            @keyframes scale {
                0% {
                    transform: scaleX(0);
                }
                100% {
                    transform: scaleX(1);
                }
            }

            @media only screen and (max-width: 1000px) {
                .major {
                    padding-bottom: 80px;
                }
            }

            @media only screen and (max-width: 800px) {
                .title {
                    margin-bottom: 15px;
                }

                .major {
                    padding-bottom: 0;
                }

                .major-content {
                    columns: 2;
                }
            }

            @media only screen and (max-width: 750px) {
                .reflection:nth-child(2) {
                    margin-top: 20px;
                }
            }

            @media only screen and (max-width: 700px) {
                .reflections {
                    padding: 12px max(calc(50vw - 550px), 20px);
                }

                .landing {
                    height: auto;
                }

                .title {
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                }

                .reflection {
                    height: auto;
                    margin-top: 40px;
                }

                .reflection-title {
                    font-size: 2rem;
                }
            }

            .minor {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1.5rem;
                margin-bottom: 80px;
            }

            @media only screen and (max-width: 550px) {
                .major-content {
                    columns: 1;
                }

                .minor {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 30px;
                    margin-bottom: 40px;
                }
            }
        `}</style>
        <style jsx global>{`
            .major-content > .paragraph {
                text-indent: 1.5rem;
            }

            .major-content > .paragraph:first-child {
                text-indent: 0;
            }

            .major-content > .paragraph:first-child:first-letter {
                float: left;
                font-family: "Raleway", sans-serif;
                font-size: 4.4rem;
                line-height: 3.6rem;
                padding-top: 0.35rem;
                padding-right: 0.2rem;
            }
        `}</style>
    </>
)

// Exports

export async function getStaticProps() {
    // Get reflection text

    const directory = "data/2022A/"
    const [ major ] = await Promise.all([
        readFile(directory + "major.txt")
    ])

    // Page properties

    return {
        props: {
            page: "Reflections",
            content: {
                major
            }
        }
    }
}

export default Reflections