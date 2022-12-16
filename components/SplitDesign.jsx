// Imports

import Reflection from "./Reflection.jsx"
import { split } from "../helpers/text.js"

// Split page design reflection component

const SplitDesign = ({ section, text, preview, link }) => (
    <>
        <Reflection section={section}>
            <div className="content">
                <div className="text">{split(text)}</div>
                <a className="link" href={link} target="_blank">VIEW ISSUE ➔</a>
            </div>
            <div className="page">
                <img className="preview" src={preview}></img>
            </div>
        </Reflection>
        <style jsx>{`
            .content {
                width: calc(64% + 1.5rem);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                flex-shrink: 0;
                gap: 24px;
            }

            .text {
                width: 100%;
                text-indent: 1.5rem;
                columns: 2;
                column-gap: 1.5rem;
            }

            .link {
                font-family: "Raleway", sans-serif;
                font-weight: lighter;
                border: 1px solid #000000;
                padding: 12px 36px;
            }

            .page {
                width: calc(36% - 1.5rem);
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .preview {
                max-width: 100%;
                max-height: 400px;
                border: 1px solid #000000;
            }

            @media only screen and (max-width: 700px) {
                .content {
                    width: 50%;
                }

                .text {
                    columns: 1;
                }

                .page {
                    width: 50%;
                }

                .preview {
                    max-height: 100%;
                }

                .link {
                    padding: 10px 28px;
                }
            }

            @media only screen and (max-width: 550px) {
                .content {
                    width: 100%;
                }

                .page {
                    width: 100%;
                }
            }
        `}</style>
    </>
)

// Exports

export default SplitDesign