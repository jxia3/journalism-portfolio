// Imports

import Reflection from "./Reflection.jsx"
import { split } from "../../helpers/text.js"

// Block design reflection component

const Block = ({ section, text }) => (
    <>
        <Reflection section={section}>
            <div className="text">{split(text)}</div>
        </Reflection>
        <style jsx>{`
            .text {
                width: 100%;
                text-indent: 1.5rem;
                columns: 3;
                column-gap: 1.5rem;
            }

            @media only screen and (max-width: 700px) {
                .text {
                    columns: 2;
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

export default Block