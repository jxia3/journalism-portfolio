// Imports

import Reflection from "./Reflection.jsx"
import { split } from "../../helpers/text.js"

// Split quote reflection component

const SplitQuoteSide = ({ section, text, image, story, quote }) => (
    <>
        <Reflection section={section}>
            <div className="text">{split(text)}</div>
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
                    {quote.author ? <div className="quote-by">- {quote.author}</div> : <></>}
                    <div className="quote-line"></div>
                </div>
            </div>
        </Reflection>
        <style jsx>{`
            .text {
                width: 32%;
                text-indent: 1.5rem;
            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: stretch;
                flex: 1;
            }

            .story {
                width: 100%;
                height: 50%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 24px;
            }

            .image {
                width: 42%;
                height: 100%;
                object-fit: contain;
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
                font-size: 1.8rem;
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

            @media only screen and (max-width: 1000px) {
                .image {
                    width: 45%;
                }

                .story-desc {
                    margin: 16px 0;
                }
            }

            @media only screen and (max-width: 800px) {
                .text {
                    width: 35%;
                }

                .story {
                    flex-direction: column;
                }

                .image {
                    width: 100%;
                    height: 200px;
                }

                .story-link {
                    padding: 10px 28px;
                }

                .quote {
                    font-size: 1.4rem;
                }

                .quote-by {
                    margin-top: 8px;
                }
            }

            @media only screen and (max-width: 650px) {
                .text {
                    width: 40%;
                }
            }

            @media only screen and (max-width: 550px) {
                .text {
                    width: 100%;
                }

                .content {
                    width: 100%;
                }
            }
        `}</style>
    </>
)

// Exports

export default SplitQuoteSide