// Imports

import { split } from "../../helpers/text.js"

// Column reflection component

const Column = ({ section, text, link }) => (
    <>
        <div className="reflection">
            <h2 className="title">{section}</h2>
            <div className="text">{split(text)}</div>
            {link ? <a className="sample" href={link} target="_blank">SAMPLE ➔</a> : <></>}
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

            .title {
                font-family: "Raleway", sans-serif;
                font-size: 1.8rem;
                font-weight: lighter;
            }

            .text {
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
                .text {
                    columns: 2;
                    column-gap: 1.5rem;
                }

                .sample {
                    padding: 10px 28px;
                }
            }

            @media only screen and (max-width: 550px) {
                .text {
                    columns: 1;
                }
            }
        `}</style>
    </>
)

// Exports

export default Column