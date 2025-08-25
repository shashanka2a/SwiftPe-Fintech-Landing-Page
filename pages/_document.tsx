import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="SwiftPe - Send Money to India Instantly. Convert your USDC to INR in seconds. No gas fees, no hidden charges." />
                <meta name="keywords" content="USDC, INR, money transfer, India, fintech, cryptocurrency, payments" />
                <meta name="author" content="SwiftPe" />
                <meta property="og:title" content="SwiftPe - Send Money to India Instantly" />
                <meta property="og:description" content="Convert your USDC to INR in seconds. No gas fees, no hidden charges. Just fast, secure transfers with UPI-style receipts." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SwiftPe - Send Money to India Instantly" />
                <meta name="twitter:description" content="Convert your USDC to INR in seconds. No gas fees, no hidden charges." />
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}