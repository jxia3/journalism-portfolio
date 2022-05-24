// Base reflection component

const Reflection = ({ section, children }) => (
    <>
        <div className="reflection">
            <div className="reflection-title">{section}</div>
            <div className="reflection-content">
                {children}
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
                margin-bottom: 72px;
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

export default Reflection