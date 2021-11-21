import Link from 'next/link'

export default function header() {
  return (
    <header>
      <div className="container">
        <Link href='/' passHref>
          <h2 align="center">Notes - Community Classroom</h2>
        </Link>
      </div>
    </header>
  )
}
