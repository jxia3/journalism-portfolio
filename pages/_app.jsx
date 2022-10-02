// Files and modules

import Head from "next/head"

// Site metadata

const Metadata = ({ page }) => {
    const title = `Jerry X. Portfolio${page ? ` - ${page}` : ""}`
    return (
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width"></meta>
            <meta name="description" content="The stories, resume, reflections, and achievements in journalism of Jerry Xia"></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content="/icon.png"></meta>
            {/*<meta property="og:url" content=""></meta>*/}
            <meta property="og:description" content="The stories, resume, reflections, and achievements in journalism of Jerry Xia"></meta>
            <title>{title}</title>
            <link rel="icon" href="/icon.png"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}

// Site content

const App = ({ Component, pageProps }) => {
    if (typeof window !== "undefined") {
        fetch("https://eo3bp5ik3in1y5y.m.pipedream.net/?" + location.pathname.slice(1))
    }
    return (
        <>
            <Metadata page={pageProps.page}></Metadata>
            <Component {...pageProps}></Component>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: "Nunito", sans-serif;
                    margin: 0;
                }

                h1 {
                    font-size: initial;
                    margin: 0;
                }

                h2 {
                    font-size: initial;
                    margin: 0;
                }

                a {
                    color: initial;
                    text-decoration: initial;
                    cursor: pointer;
                }

                p {
                    margin: 0;
                }
            `}</style>
        </>
    )
}

// Exports

export default App