import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {useEffect} from 'react'
import { SiteNav } from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  },[])

  return (
    <>
    <SiteNav/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
