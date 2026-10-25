import { Link } from 'react-router-dom'

type Props = { title: string; image: string }

export default function PageBanner({ title, image }: Props) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="wrap">
        <h1>{title}</h1>
        <ul className="crumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>
    </section>
  )
}
