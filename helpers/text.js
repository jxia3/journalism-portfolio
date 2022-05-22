// Files and modules

const crypto = require("crypto")

// Split text into paragraphs

function split(text) {
    const paragraphs = []
    for (const paragraph of text.split("\n")) {
        const hash = crypto.createHash("sha256").update(paragraph).digest("hex")
        paragraphs.push(<p className="paragraph" key={hash.slice(0, 8)}>{paragraph}</p>)
    }
    return paragraphs
}

// Exports

export {
    split
}