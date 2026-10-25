import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap">
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <Link className="btn" to="/">
          Back to home
        </Link>
      </div>
    </section>
  )
}
