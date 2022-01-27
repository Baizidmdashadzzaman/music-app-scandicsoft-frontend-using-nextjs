import React ,{ useEffect , useState } from 'react'
import Layout from '../components/layout/Layout'
import Playlist from '../lib/Playlist'
import { setCookies ,checkCookies ,getCookie} from 'cookies-next';
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
    getPlaylist();
  }
  const [myplaylists, setmyplaylists] = useState([]);
  let getPlaylist =()=>
  {
      const userpersonaltoken = getCookie('music_usersession');
      fetch(process.env.siteurl+`/api/front-guest-playlist/`+userpersonaltoken, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      })
     .then(response => response.json())
     .then(data => setmyplaylists(data.allData));
  };
  const addSongToMyPlaylist = async datacust => {
    
    const res = await fetch(
      process.env.siteurl+`/api/front-guest-addto-playlist/`,
      {
        body: JSON.stringify({
            user_token: getCookie('music_usersession'),
            song_id: datacust,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    const result = await res.json()
    if(result.status == 1) { 
        setmyplaylists(result.allData);
        alert(result.message);
    }
    else { 
        alert(result.message);
    }
  };

  const removeSongToMyPlaylist = async event => {
      const res = await fetch(
      process.env.siteurl+`/api/front-guest-removefrom-playlist/`,
      {
        body: JSON.stringify({
            user_token: getCookie('music_usersession'),
            song_id: event,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    const result = await res.json()
    if(result.status == 1) { 
        setmyplaylists(result.allData);
        alert(result.message);
    }
    else { 
        alert(result.message);
    }
  };


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
    <Layout siteinfo={siteinfo} myplaylists={myplaylists} removeSongToMyPlaylist={removeSongToMyPlaylist} {...pageProps } >
       <Playlist/>
       <Component siteinfo={siteinfo} addSongToMyPlaylist={addSongToMyPlaylist} {...pageProps } />
    </Layout>
  )
  
  
}


export default MyApp
