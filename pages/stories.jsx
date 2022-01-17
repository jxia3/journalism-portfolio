// Files and modules

import stories from "../data/stories.json"
import useWindowSize from "../helpers/useWindowSize"
import Layout from "../components/Layout"

// Story component

const Story = ({ data, flip }) => {
    // Responsive window size

    const { width } = useWindowSize()

    // Component

    return (
        <>
            <div className="story">
                {width >= 700 && flip ? (
                    <>
                        <div className="text">
                            <h2 className="title">{data.title}</h2>
                            <div className="description">{data.description}</div>
                            <a className="link" href={data.link} target="_blank">READ STORY ➔</a>
                        </div>
                        <img className="image" src={data.image}></img>
                    </>
                ) : (
                    <>
                        <img className="image" src={data.image}></img>
                        <div className="text">
                            <h2 className="title">{data.title}</h2>
                            <div className="description">{data.description}</div>
                            <a className="link" href={data.link} target="_blank">READ STORY ➔</a>
                        </div>
                    </>
                )}
            </div>
            <style jsx>{`
                .story {
                    width: 100%;
                    height: 24vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin: 30px 0;
                }

                .image {
                    width: 350px;
                    height: 100%;
                    object-fit: contain;
                    margin-left: ${flip ? "50px" : "0"};
                    margin-right: ${flip ? "0" : "50px"};
                }

                .text {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }

                .title {
                    font-family: "Raleway", sans-serif;
                    font-size: 1.8rem;
                    font-weight: lighter;
                    margin-bottom: 18px;
                }

                .description {
                    font-size: 1.1rem;
                }

                .link {
                    font-family: "Raleway", sans-serif;
                    font-weight: lighter;
                    padding: 12px 36px;
                    border: 1px solid #000000;
                    margin-top: 18px;
                }

                @media only screen and (max-width: 1000px) {
                    .story {
                        margin: 24px 0;
                    }
                }

                @media only screen and (max-width: 800px) {
                    .image {
                        width: 250px;
                        margin-left: ${flip ? "40px" : "0"};
                        margin-right: ${flip ? "0" : "40px"};
                    }
                }

                @media only screen and (max-width: 700px) {
                    .story {
                        height: auto;
                        flex-direction: column;
                    }

                    .image {
                        width: 100%;
                        height: auto;
                        margin: 0 0 18px 0;
                    }
                }
            `}</style>
        </>
    )
}

// Stories page

const Stories = () => (
    <>
        <Layout>
            <div className="stories">
                <h1 className="title">PUBLISHED WORK</h1>
                {stories.map((story, i) => (
                    <Story data={story} flip={i % 2 === 1} key={i}></Story>
                ))}
            </div>
        </Layout>
        <style jsx>{`
            .stories {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 24px max(calc(50vw - 550px), 20px);
            }

            .title {
                font-family: "Raleway", sans-serif;
                font-size: 3.5rem;
                font-weight: lighter;
            }

            @media only screen and (max-width: 700px) {
                .stories {
                    padding: 12px max(calc(50vw - 550px), 20px);
                }

                .title {
                    font-size: 3rem;
                }
            }
        `}</style>
    </>
)

// Exports

export async function getStaticProps() {
    return {
        props: {
            page: "Stories"
        }
    }
}

export default Stories