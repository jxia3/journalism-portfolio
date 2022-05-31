// Files and modules

import Layout from "../components/Layout"
import SplitQuote from "../components/SplitQuote.jsx"
import SplitDesign from "../components/SplitDesign.jsx"
import Column from "../components/Column.jsx"
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
                <SplitQuote
                    section="WRITING AND REPORTING"
                    text={content.writing}
                    image="/electric.png"
                    story={{
                        title: "Council plans $150 million electric grid renovation",
                        info: "The Campanile 2022 Issue 7",
                        desc: "Facing limited grid capacity and aging infrastructure, Palo Alto's Utility Advisory Commission is pushing to modernize the city's electric grid to meet the city's electrification and emission reduction goals.",
                        link: "https://thecampanile.org/2022/04/09/council-plans-150-million-electric-grid-renovation"
                    }}
                    quote={{
                        text: "That's what we're going to need to do to achieve those really ambitious goals that we need to achieve to control worldwide climate change.",
                        author: "Jonathan Abendschein, assistant director of Utility Resource Management"
                    }}
                ></SplitQuote>
                <SplitDesign
                    section="DESIGN"
                    text={content.design}
                    preview="/C1-2022-7.png"
                    link="https://issuu.com/palycampanile/docs/the_campanile_4-1-22/16"
                ></SplitDesign>
                <div className="columns">
                    <Column
                        section="LEADERSHIP"
                        text={content.leadership}
                    ></Column>
                    <Column
                        section="MARKETING"
                        text={content.marketing}
                        link="https://mailchi.mp/d1220115eccd/the-campanile-issue-5-newsletter-6804905"
                    ></Column>
                    <Column
                        section="SECTION"
                        text="my text"
                    ></Column>
                </div>
            </div>
        </Layout>
        <style jsx>{`
            .reflections {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 24px max(calc(50vw - 550px), 20px) 72px max(calc(50vw - 550px), 20px);
            }

            .landing {
                width: 100%;
                min-height: calc(100vh - 104px);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 30px;
                padding-bottom: 104px;
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
                margin: auto 0;
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

            .columns {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                gap: 1.5rem;
            }

            @keyframes scale {
                0% {
                    transform: scaleX(0);
                }
                100% {
                    transform: scaleX(1);
                }
            }

            @media only screen and (max-width: 800px) {
                .major-content {
                    columns: 2;
                }
            }

            @media only screen and (max-width: 700px) {
                .columns {
                    flex-direction: column;
                    gap: 72px;
                }
            }

            @media only screen and (max-width: 550px) {
                .title {
                    font-size: 2.5rem;
                }
                
                .major-content {
                    columns: 1;
                }
            }

            @media only screen and (max-height: 1000px) {
                .landing {
                    padding-bottom: 0;
                    margin-bottom: 64px;
                }
                
                .major {
                    margin: 0;
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

    const directory = "data/2022A"
    const [ major, writing, design, leadership, marketing ] = await Promise.all([
        readFile(directory + "/major.txt"),
        readFile(directory + "/writing.txt"),
        readFile(directory + "/design.txt"),
        readFile(directory + "/leadership.txt"),
        readFile(directory + "/marketing.txt")
    ])

    // Page properties

    return {
        props: {
            page: "Reflections",
            content: {
                major,
                writing,
                design,
                leadership,
                marketing
            }
        }
    }
}

export default Reflections