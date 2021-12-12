import Link from 'next/link'

// pages/404.js
export default function Custom404() {
    return (
        <div className="no-404-page">
            <span className="banner-gradient"></span>
            {/* eslint-disable-next-line */}
            <img
                className="banner-back"
                src="./background.gif"
                data-nsfw-filter-status
                alt=""
            />
            <div className="no-404-content">
                <h1>404</h1>
                <p>Opps. We can&apos;t find that page!</p>
                <Link href="/">Go to Home</Link>
            </div>
        </div>
    )
}