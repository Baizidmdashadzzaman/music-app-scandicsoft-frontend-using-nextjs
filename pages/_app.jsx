import React ,{ useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Playlist from '../lib/Playlist'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Playlist/>
       <Component {...pageProps} />
    </Layout>
  )
  
  
}

export default MyApp
