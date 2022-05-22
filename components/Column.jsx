// Files and modules

import { split } from "../helpers/text.js"

// Column reflection component

const Column = ({ section, text, link }) => (
    <>
        <div className="reflection">
            <h2 className="reflection-title">{section}</h2>
            <div className="reflection-text">{split(text)}</div>
            <a className="sample" href={link} target="_blank">SAMPLE WORK ➔</a>
        </div>
        <style jsx>{`
            .reflection {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 1.5rem;
            }

            .reflection-title {
                font-family: "Raleway", sans-serif;
                font-size: 1.8rem;
                font-weight: lighter;
                margin-bottom: 1.5rem;
            }

            .reflection-text {
                width: 100%;
                text-indent: 1.5rem;
            }

            .sample {
                font-family: "Raleway", sans-serif;
                font-weight: lighter;
                border: 1px solid #000000;
                padding: 12px 36px;
            }

            @media only screen and (max-width: 700px) {
                .sample {
                    padding: 10px 28px;
                }
            }
        `}</style>
    </>
)

// Exports

export default Column