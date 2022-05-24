// Files and modules

import Reflection from "./Reflection.jsx"
import { split } from "../helpers/text.js"
import { Document, Page } from "react-pdf"

// Split page design reflection component

const SplitDesign = ({ section, text, page, link }) => (
    <>
        <Reflection section={section}>
            <Document file={page} onLoadError={console.error}>
                <Page pageNumber={1}></Page>
            </Document>
        </Reflection>
        <style jsx>{`
        `}</style>
    </>
)

// Exports

export default SplitDesign