import LatestArticles from "../Latest_articles/Latest_articles";
import './Latest.css'

function Latest() {
    return (
        <section className="latest-section">
            <h2>Latest articles</h2>

            <div className="latest-wrapper">
                <LatestArticles />
                <LatestArticles />
                <LatestArticles />
            </div>
        </section>
    )
}

export default Latest
