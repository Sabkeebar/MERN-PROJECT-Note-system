import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">some One Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown NewWorld City, sameOne Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                some One Repairs<br />
                    555 garden street<br />
                    NewWorld City, IA 52557<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: some one </p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public