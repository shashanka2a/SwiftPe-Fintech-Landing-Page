import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="SwiftPe - Send Money to India Instantly. Convert your USDC to INR in seconds. No gas fees, no hidden charges. Just fast, secure transfers with UPI-style receipts." />
                <meta name="keywords" content="USDC, INR, money transfer, India, fintech, cryptocurrency, payments, cross-border, stablecoin, UPI, instant transfer" />
                <meta name="author" content="SwiftPe" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#2563eb" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SwiftPe - Send Money to India Instantly" />
                <meta property="og:description" content="Convert your USDC to INR in seconds. No gas fees, no hidden charges. Just fast, secure transfers with UPI-style receipts." />
                <meta property="og:site_name" content="SwiftPe" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SwiftPe - Send Money to India Instantly" />
                <meta name="twitter:description" content="Convert your USDC to INR in seconds. No gas fees, no hidden charges. Just fast, secure transfers with UPI-style receipts." />
                
                {/* Favicon */}
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="manifest" href="/manifest.json" />
                
                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}