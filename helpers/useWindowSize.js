// Imports

import { useEffect, useState } from "react"

// Window size hook

function useWindowSize() {
    const isServer = typeof window === "undefined"
    const [ windowSize, setWindowSize ] = useState({
        width: isServer ? 1500 : window.innerWidth,
        height: isServer ? 1000 : window.innerHeight
    })

    useEffect(() => {
        window.addEventListener("resize", changeWindowSize)
        return () => window.removeEventListener("resize", changeWindowSize)
    }, [])

    function changeWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    return windowSize
}

// Exports

export default useWindowSize