import React ,{ useEffect , useState } from 'react'
import Layout from '../components/layout/Layout'
import Playlist from '../lib/Playlist'
import { getCookies, setCookies, removeCookies ,checkCookies} from 'cookies-next';
function MyApp({ Component, pageProps }) {
  
  let setUserToken =()=> {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
    var lenString = 100;  
    var randomstring = '';  
    for (var i=0; i<lenString; i++) {  
      var rnum = Math.floor(Math.random() * characters.length);  
      randomstring += characters.substring(rnum, rnum+1);  
		}
    if(checkCookies('music_usersession')) {  }
    else { setCookies('music_usersession', randomstring); } 
  }
  const [siteinfo, setsiteinfo] = useState("")
  useEffect(() => {
   fetch('http://127.0.0.1:8000/api/front-setting', {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   },
  })
 .then(response => response.json())
 .then(data => setsiteinfo(data.allData));
   setUserToken();
 }, []);
  return (
    <Layout siteinfo={siteinfo} >
       <Playlist/>
       <Component siteinfo={siteinfo} {...pageProps} />
    </Layout>
  )
  
  
}


export default MyApp
