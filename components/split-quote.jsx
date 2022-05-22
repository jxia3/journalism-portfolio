// Files and modules

import { split } from "../helpers/text.js"

// Reflection component

const Reflection = ({ section, text, image, story, quote }) => (
    <>
        <div className="reflection">
            <h2 className="reflection-title">{section}</h2>
            <div className="reflection-content">
                <div className="reflection-text">{split(text)}</div>
                <div className="content">
                    <div className="story">
                        <img className="image" src={image}></img>
                        <div className="story-info">
                            <div className="story-title">{story.title}</div>
                            <div className="story-info">{story.info}</div>
                            <div className="story-desc">{story.desc}</div>
                            <a className="story-link" href={story.link} target="_blank">READ STORY ➔</a>
                        </div>
                    </div>
                    <div className="quote">
                        <div className="quote-line"></div>
                        "{quote.text}"
                        <div className="quote-by">- {quote.author}</div>
                        <div className="quote-line"></div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .reflection {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .reflection-title {
                font-family: "Raleway", sans-serif;
                font-size: 2.5rem;
                font-weight: lighter;
                margin-bottom: 30px;
            }

            .reflection-content {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .reflection-text {
                width: 500px;
                text-indent: 1.5rem;
                margin-right: 1.5rem;
            }

            .content {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }

            .story {
                width: 100%;
                height: 50%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }

            .image {
                width: 40%;
                height: 100%;
                object-fit: contain;
                margin-right: 16px;
            }

            .story-info {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .story-title {
                font-family: "Raleway", sans-serif;
                font-size: 2rem;
                font-weight: lighter;
                margin-bottom: 4px;
            }

            .story-info {
                font-size: 0.9rem;
            }

            .story-desc {
                margin: 24px 0;
            }

            .story-link {
                font-family: "Raleway", sans-serif;
                font-weight: lighter;
                border: 1px solid #000000;
                padding: 12px 36px;
            }

            .quote {
                width: 100%;
                font-size: 2rem;
                margin: 24px 0;
            }

            .quote-by {
                font-size: 1rem;
                margin-top: 12px;
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

            @media only screen and (max-width: 800px) {
                .reflection {
                    margin-top: 30px;
                }

                .reflection-text {
                    width: 400px;
                }

                .story-desc {
                    margin: 16px 0;
                }
            }

            @media only screen and (max-width: 700px) {
                .story {
                    flex-direction: column;
                }

                .image {
                    width: 100%;
                    height: 150px;
                    margin-right: 0;
                    margin-bottom: 16px;
                }

                .story-link {
                    padding: 10px 28px;
                }

                .quote {
                    font-size: 1.6rem;
                }

                .quote-by {
                    margin-top: 8px;
                }
            }

            @media only screen and (max-width: 550px) {
                .reflection {
                    margin-bottom: 30px;
                }
            }
        `}</style>
    </>
)

// Exports

export default Reflection