// Files and modules

import { split } from "../helpers/text.js"
import { Document, Page } from "react-pdf"

// Split page design reflection component

const SplitDesign = ({ section, text, page, link }) => (
    <>
        <div className="reflection">
            <h2 className="reflection-title">{section}</h2>
            <div className="reflection-content">
                <Document file={page} onLoadError={console.error}>
                    <Page pageNumber={1}></Page>
                </Document>
            </div>
        </div>
        <style jsx>{`
            .reflection {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 30px;
            }

            .reflection-title {
                font-family: "Raleway", sans-serif;
                font-size: 2.5rem;
                font-weight: lighter;
            }

            .reflection-content {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 24px;
            }

            @media only screen and (max-width: 550px) {
                .reflection {
                    gap: 24px;
                }

                .reflection-content {
                    flex-direction: column;
                }
            }
        `}</style>
    </>
)

// Exports

export default SplitDesign