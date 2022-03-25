import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
// import { SessionProvider } from 'next-auth/react'
import { Provider } from 'next-auth/client'
import "../styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head />
      <Provider session={pageProps.session}>
        < Component {...pageProps} />
      </Provider>
    </div >
  )
}

export default MyApp
