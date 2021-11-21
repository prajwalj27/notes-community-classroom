import Header from '../components/Header'
import '../styles/globals.css'

const prefix = '/notes-community-classroom'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="shortcut icon" href={prefix + '/notes-logo.png'} />
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
