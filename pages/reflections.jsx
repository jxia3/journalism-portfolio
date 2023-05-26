// Imports

import Layout from "../components/Layout"
import Block from "../components/reflections/Block.jsx"
import SplitQuoteSide from "../components/reflections/SplitQuoteSide.jsx"
import SplitDesign from "../components/reflections/SplitDesign.jsx"
import Column from "../components/reflections/Column.jsx"
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
                                I'm immensely thankful that I had the opportunity to lead a group of passionate students on an amazing publication.
                                <div className="quote-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Block section="BEING A LEADER" text={content.leader}></Block>
                <SplitQuoteSide
                    section="WRITING AND REPORTING"
                    text={content.writing}
                    image="/meatballs.jpg"
                    story={{
                        title: "IKEA: The food warehouse",
                        info: "Lifestyle, The Campanile 2023",
                        desc: "Offering a selection of Swedish delights at an affordable price, IKEA reminds us that a fulfilling meal doesn't always have to be expensive.",
                        link: "https://thecampanile.org/27783/lifestyle/ikea-the-food-warehouse"
                    }}
                    quote={{
                        text: "While IKEA's cafeteria is not a gourmet restaurant, it does offer great deals on a variety of traditional Swedish dishes that lead to an enjoyable experience, even though it may lack service fit for the bourgeoisie. But, after all, IKEA was not built for the bourgeoisie."
                    }}
                ></SplitQuoteSide>
                <SplitDesign
                    section="DESIGN"
                    text={content.design}
                    preview="/A1-2023-8.png"
                    link="https://issuu.com/palycampanile/docs/the_campanile_5-22-23"
                ></SplitDesign>
                <div className="columns">
                    <Column
                        section="LEADERSHIP"
                        text={content.leadership}
                        link="https://thecampanile.org/27435/spotlight/not-another-know-it-ail_"
                    ></Column>
                    <Column
                        section="ETHICS"
                        text={content.ethics}
                        link="https://thecampanile.org/28818/lifestyle/musk-alters-twitter-work-culture-content"
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
                padding: 36px max(calc(50vw - 550px), 20px) 72px max(calc(50vw - 550px), 20px);
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
                font-size: 1.5rem;
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
                    margin-bottom: 52px;
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

    const directory = "data/2023A"
    const [ major, leader, writing, design, leadership, ethics ] = await Promise.all([
        readFile(directory + "/major.txt"),
        readFile(directory + "/leader.txt"),
        readFile(directory + "/writing.txt"),
        readFile(directory + "/design.txt"),
        readFile(directory + "/leadership.txt"),
        readFile(directory + "/ethics.txt")
    ])

    // Page properties

    return {
        props: {
            page: "Reflections",
            content: {
                major,
                leader,
                writing,
                design,
                leadership,
                ethics
            }
        }
    }
}

export default Reflections