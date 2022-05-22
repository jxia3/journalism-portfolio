// Files and modules

import Layout from "../components/Layout"
import SplitQuote from "../components/SplitQuote.jsx"
import Column from "../components/Column.jsx"
import { split } from "../helpers/text.js"
import fs from "fs"

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
                                Nothing will ever make obsolete bringing quality news to local communities.
                                <div className="quote-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <SplitQuote
                    section="REPORTING AND WRITING"
                    text={content.reporting}
                    image="/math.jpg"
                    story={{
                        title: "Falling behind the curve",
                        info: "The Campanile 2021 Issue 4 Spotlight",
                        desc: "PAUSD has de-laned sixth and seventh grade math and plans to finish the de-laning process by the 2022-2023 school year, accelerating all students to Algebra by 8th grade.",
                        link: "https://thecampanile.org/2021/12/07/falling-behind-the-curve"
                    }}
                    quote={{
                        text: "All we are asking for is for PAUSD to have the same flexible attitude towards math placement as our peer districts.",
                        author: "Avery Wang, parent"
                    }}
                ></SplitQuote>
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
                height: calc(100vh - 104px);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .title {
                font-family: "Raleway", sans-serif;
                font-size: 3.5rem;
                font-weight: lighter;
                margin-bottom: 30px;
            }

            .major {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: 100px;
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

    const year = "2021B"
    const [ major, reporting, design, photo, marketing ] = await Promise.all([
        readFile("data/" + year + "/major.txt"),
        readFile("data/" + year + "/reporting.txt"),
        readFile("data/" + year + "/design.txt"),
        readFile("data/" + year + "/photo.txt"),
        readFile("data/" + year + "/marketing.txt")
    ])

    // Page properties

    return {
        props: {
            page: "Reflections",
            content: {
                major,
                reporting,
                design,
                photo,
                marketing
            }
        }
    }
}

function readFile(file) {
    // Read file content

    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) return reject(error)
            resolve(data.toString())
        })
    })
}

export default Reflections