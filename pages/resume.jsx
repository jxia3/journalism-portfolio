// Files and modules

import Layout from "../components/Layout"

// Resume page

const Resume = () => (
    <>
        <Layout>
            <div className="resume">
                <h1 className="title">JERRY XIA</h1>
                <div className="info">
                    Palo Alto High School
                    <div className="splitter">•</div>
                    jx41509@pausd.us
                </div>
                <div className="divider"></div>
                <div className="content">
                    <div className="left">
                        <div className="section" style={{ marginBottom: "24px" }}>
                            <h2 className="section-title">CURRENT</h2>
                            <div className="current-content">
                                <div>Junior at Palo Alto High School</div>
                                <div>Editor-in-Chief at The Campanile</div>
                            </div>
                        </div>
                        <div className="section">
                            <h2 className="section-title">EXPERIENCE</h2>
                            <div className="section-item">
                                <div className="item-title">Editor-in-Chief at The Campanile</div>
                                <div className="date">March 2022 to present</div>
                                <div className="item-desc">Writing, designing, and publishing newsletters delivering the latest Campanile news to subscribers every issue using Mailchimp</div>
                            </div>
                            <div className="section-item">
                                <div className="item-title">Newsletter Editor at The Campanile</div>
                                <div className="date">November 2021 to March 2022</div>
                                <div className="item-desc">Writing, designing, and publishing newsletters delivering the latest Campanile news to subscribers every issue using Mailchimp</div>
                            </div>
                            <div className="section-item">
                                <div className="item-title">Staff Writer at The Campanile</div>
                                <div className="date">August 2021 to March 2022</div>
                                <div className="item-desc">Interviewing sources, writing news, opinion, lifestyle, and sports articles for The Campanile and designing newspaper pages with Adobe InDesign to be printed</div>
                            </div>
                            <div className="section-item">
                                <div className="item-title">Vice President at Paly Python</div>
                                <div className="date">September 2019 to present</div>
                                <div className="item-desc">Managing the Paly Python Club, teaching students programming and hosting hackathons, workshops and other programming-related events for the community</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="section" style={{ marginBottom: "24px" }}>
                            <h2 className="section-title">SKILLS</h2>
                            <div className="section-item">
                                <div className="item-title">News Writing</div>
                                <div className="item-desc">Gathering interview from sources, writing news stories and editing articles for publication</div>
                            </div>
                            <div className="section-item">
                                <div className="item-title">Adobe InDesign & Illustrator</div>
                                <div className="item-desc">Using the Adobe stack to create graphics and design professional pages and page layouts</div>
                            </div>
                            <div className="section-item">
                                <div className="item-title">Web Development & React.js</div>
                                <div className="item-desc">Designing and building websites with HTML, CSS and JavaScript and creating responsive, stateful web applications with React.js and Next.js</div>
                            </div>
                        </div>
                        <div className="section">
                            <h2 className="section-title">COURSEWORK</h2>
                            <div className="section-item">
                                <div className="item-title">Beginning Journalism</div>
                                <div className="date">Palo Alto High School, completed June 2020</div>
                            </div>
                            <div className="section-item">
                                <div className="item-title">AP Computer Science A</div>
                                <div className="date">Palo Alto High School, in progress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .resume {
                    min-height: calc(100vh - 140px);
                    padding: 24px max(calc(50vw - 550px), 20px);
                }

                .title {
                    font-family: "Raleway", sans-serif;
                    font-size: 3.5rem;
                    font-weight: lighter;
                    margin-bottom: 6px;
                }

                .info {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }

                .splitter {
                    display: inline-block;
                    font-size: 0.9rem;
                    margin: 0 12px;
                }

                .divider {
                    width: 100%;
                    height: 0.5px;
                    background-color: #000000;
                    margin: 24px 0;
                    transform: scaleX(0);
                    animation: scale 750ms ease-out forwards;
                }

                .content {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                }

                .left {
                    width: 53%;
                    margin-right: 7%;
                }

                .right {
                    width: 40%;
                }

                .section {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 18px;
                }

                .section-title {
                    font-family: "Raleway", sans-serif;
                    font-size: 2rem;
                    font-weight: lighter;
                }

                .section-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .item-title {
                    font-family: "Raleway", sans-serif;
                    font-size: 1.5rem;
                    font-weight: lighter;
                    margin-bottom: 3px;
                }

                .date {
                    font-size: 0.9rem;
                }

                .item-desc {
                    margin-top: 8px;
                }

                .current-content {
                    font-size: 1.2rem;
                }

                @keyframes scale {
                    0% {
                        transform: scaleX(0);
                    }
                    100% {
                        transform: scaleX(1);
                    }
                }

                @media only screen and (max-width: 700px) {
                    .resume {
                        padding: 12px max(calc(50vw - 550px), 20px) 48px max(calc(50vw - 550px), 20px);
                    }

                    .divider {
                        margin: 20px 0;
                    }

                    .content {
                        flex-direction: column;
                    }

                    .left {
                        width: 100%;
                        margin-right: 0;
                        margin-bottom: 24px;
                    }

                    .right {
                        width: 100%;
                    }
                }

                @media only screen and (max-width: 500px) {
                    .title {
                        font-size: 3rem;
                    }

                    .info {
                        font-size: 0.9rem;
                    }

                    .splitter {
                        font-size: 0.7rem;
                        margin: 0 6px;
                    }
                }
            `}</style>
        </Layout>
    </>
)

// Exports

export async function getStaticProps() {
    return {
        props: {
            page: "Resume"
        }
    }
}

export default Resume