// Imports

import crypto from "crypto"
import fs from "fs"

// Read text file content

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) return reject(error)
            resolve(data.toString())
        })
    })
}

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
    readFile,
    split
}