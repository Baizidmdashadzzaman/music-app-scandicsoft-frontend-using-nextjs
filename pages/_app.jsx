import React ,{ useEffect , useState } from 'react'
import Layout from '../components/layout/Layout'
import Playlist from '../lib/Playlist'
function MyApp({ Component, pageProps }) {
   
  const [siteinfo, setsiteinfo] = useState("")
  useEffect(() => {
   fetch('http://127.0.0.1:8000/api/setting', {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   },
  })
 .then(response => response.json())
 .then(data => setsiteinfo(data.allData));
  
 }, []);
  return (
    <Layout siteinfo={siteinfo} >
       <Playlist/>
       <Component siteinfo={siteinfo} {...pageProps} />
    </Layout>
  )
  
  
}


export default MyApp
