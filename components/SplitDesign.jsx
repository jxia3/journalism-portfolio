// Files and modules

import Reflection from "./Reflection.jsx"
import { split } from "../helpers/text.js"
import { Document, Page } from "react-pdf"

// Split page design reflection component

const SplitDesign = ({ section, text, page, link }) => (
    <>
        <Reflection section={section}>
            <div className="text">{split(text)}</div>
            <div className="page">
                <Document file={page}>
                    <Page pageNumber={1} width="500"></Page>
                </Document>
            </div>
        </Reflection>
        <style jsx>{`
            .text {
                width: 500px;
                text-indent: 1.5rem;
            }

            .page {
                width: 500px;
                height: 500px;
                overflow-x: hidden;
                overflow-y: auto;
                border: 1px solid #000000;
            }

            .page::-webkit-scrollbar {
                width: 5px;
            }

            .page::-webkit-scrollbar-track {
                background: #EEEEEE;
            }

            .page::-webkit-scrollbar-thumb {
                background: #BBBBBB;
            }

            .page::-webkit-scrollbar-thumb:hover {
                background: #AAAAAA;
            }
        `}</style>
    </>
)

// Exports

export default SplitDesign