// Reflection component

const Photojournalism = ({ content }) => (
    <>
        <div className="reflection">
            <h2 className="reflection-title">PHOTOJOURNALISM</h2>
            <div className="reflection-text">{splitParagraphs(content.photojournalism)}</div>
            <a className="sample" href="https://thecampanile.org/2021/11/19/ravenswood-school-district-to-lease-unused-east-palo-alto-properties" target="_blank">SAMPLE WORK ➔</a>
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
                font-size: 1.8rem;
                font-weight: lighter;
                margin-bottom: 1.5rem;
            }

            .reflection-text {
                width: 100%;
                text-indent: 1.5rem;
                margin-right: 1.5rem;
            }

            .sample {
                font-family: "Raleway", sans-serif;
                font-weight: lighter;
                border: 1px solid #000000;
                padding: 12px 36px;
                margin-top: 1.5rem;
            }

            @media only screen and (max-width: 700px) {
                .sample {
                    padding: 10px 28px;
                }
            }
        `}</style>
    </>
)

// Split text into paragraphs

function splitParagraphs(text) {
    return text.split("\n").map((paragraph, i) => <p className="paragraph" key={i}>{paragraph}</p>)
}

// Exports

export default Photojournalism