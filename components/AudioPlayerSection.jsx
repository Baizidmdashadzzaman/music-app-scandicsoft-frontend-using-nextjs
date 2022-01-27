// import React ,{ useEffect ,useState} from 'react'
// import { setCookies ,checkCookies ,getCookie} from 'cookies-next';
// function AudioPlayerSection({myplaylists}) {
//     const [myplaylistsNew, setmyplaylistsNew] = useState([]);
//     setmyplaylistsNew(myplaylists);
    
//     const handleDelete = async event => {
    
//         const res = await fetch(
//             process.env.siteurl+`/api/front-guest-removefrom-playlist/`,
//             {
//               body: JSON.stringify({
//                   user_token: getCookie('music_usersession'),
//                   song_id: event,
//               }),
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               method: 'POST'
//             }
//           )
//           const result = await res.json()
//           if(result.status == 1) { 
//               setmyplaylistsNew(result.allData);
//               alert(result.message);
//           }
//           else { 
//               alert(result.message);
//           }
    
//     };
//   const [isPlaying, setisPlaying] = useState(0);
//   return (
      
// <div className="ms_player_wrapper">
//       <div className="ms_player_close">
//         <i className="fa fa-angle-up" aria-hidden="true" />
//       </div>
//       <div className="player_mid">
//         <div className="audio-player">
//           <div id="jquery_jplayer_1" className="jp-jplayer" />
//           <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
//             <div className="player_left">
//               <div className="ms_play_song">
//                 <div className="play_song_name">
//                   <a href="#" id="playlist-text">
                  
//                   <div className="jp-now-playing flex-item">
                    
//                       {
//                          isPlaying == 0 ? 
//                          (
//                           <div className="jp-track-name">
//                              <span className="que_img">
//                                 <img src="/images/loader.gif" style={{width:'50px'}}/>
//                              </span>
//                             <div className="que_data">Nothing playing 
//                               <div className="jp-artist-name">click play to play
//                               </div>
//                             </div>
//                           </div>
//                          ):(
//                           <div className="jp-track-name">
//                               <span className="que_img">
//                                 <img src="/images/weekly/song1.jpg" style={{width:'50px'}}/>
//                               </span>
//                             <div className="que_data">Cro Magnon Man 
//                               <div className="jp-artist-name">Mushroom Records
//                               </div>
//                             </div>
//                           </div>
//                          )
//                       }
                    
//                   </div>
//                   </a>
//                 </div>
//               </div>
//               <div className="play_song_options">
//                 <ul>
//                   <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_download" /></span>download now</a></li>
//                   <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_fav" /></span>Add To Favourites</a></li>
//                   <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_playlist" /></span>Add To Playlist</a></li>
//                   <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_share" /></span>Share</a></li>
//                 </ul>
//               </div>


//               <span className="play-left-arrow"><i className="fa fa-angle-right" aria-hidden="true" /></span>
//             </div>
            
//             {/*--Right Queue--*/}
//             <div className="jp_queue_wrapper">
//               <span className="que_text" id="myPlaylistQueue"><i className="fa fa-angle-up" aria-hidden="true" /> Playlist</span>
//               <div id="playlist-wrap" className="jp-playlist">
//                 <div className="jp_queue_cls"><i className="fa fa-times" aria-hidden="true" /></div>
//                 <h2>Your playlist ({myplaylistsNew.length})</h2>
//                 <div className="jp_queue_list_inner">                 
//                   <ul>
//                     {myplaylistsNew.map((singleplaylist)=>(
//                       // <li className="jp-playlist-current">
//                       <li >
//                        <div>
//                            <a href="#" className="jp-playlist-item-remove" style={{display: 'none'}}>×</a><a href="#" className="jp-playlist-item jp-playlist-current" tabIndex={0}><span className="que_img">
//                              <img src={ process.env.siteurl + "/songimages/" + singleplaylist.song_thumbnail } style={{width:'60px'}}/></span><div className="que_data">{singleplaylist.song_name} <span className="jp-artist">by NUN</span></div></a><div className="action"><span className="que_more"><img src="/images/svg/more.svg" /></span>
//                              <span onClick={() => handleDelete(singleplaylist.song_id)} className="que_close"><img src="/images/svg/close.svg" /></span>
//                              </div>
//                        </div>
//                        <ul className="more_option">
//                            <li className="jp-playlist-current"><a href="#"><span className="opt_icon" title="Add To Favourites"><span className="icon icon_fav" /></span></a></li><li><a href="#"><span className="opt_icon" title="Add To Queue"><span className="icon icon_queue" /></span></a></li><li><a href="#"><span className="opt_icon" title="Download Now"><span className="icon icon_dwn" /></span></a></li><li><a href="#"><span className="opt_icon" title="Add To Playlist"><span className="icon icon_playlst" /></span></a></li><li><a href="#"><span className="opt_icon" title="Share"><span className="icon icon_share" /></span></a></li>
//                        </ul>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="jp_queue_btn">
//                   <a href="#" className="ms_clear" data-toggle="modal" data-target="#clear_modal">clear</a>
//                   <a href="#" className="ms_save" data-toggle="modal" data-target="#save_modal">save</a>
//                 </div>
//               </div>
//             </div>
//             <div className="jp-type-playlist">
//               <div className="jp-gui jp-interface flex-wrap">
//                 <div className="jp-controls flex-item">

// {/* <audio controls autoPlay >
//   <source src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" type="audio/ogg" />
//   <source src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" type="audio/mpeg" />
//   Your browser does not support the audio element.
// </audio> */}
//                   <button className="jp-previous" tabIndex={0}>
//                     <i className="ms_play_control" />
//                   </button>
//                   <button className="jp-play" tabIndex={0}>
//                     <i className="ms_play_control" />
//                   </button>
//                   <button className="jp-next" tabIndex={0}>
//                     <i className="ms_play_control" />
//                   </button>
//                 </div>
//                 <div className="jp-progress-container flex-item">
//                   <div className="jp-time-holder">
//                     <span className="jp-current-time" role="timer" aria-label="time">&nbsp;</span>
//                     <span className="jp-duration" role="timer" aria-label="duration">&nbsp;</span>
//                   </div>
//                   <div className="jp-progress">
//                     <div className="jp-seek-bar">
//                       <div className="jp-play-bar">
//                         <div className="bullet">
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="jp-volume-controls flex-item">
//                   <div className="widget knob-container">
//                     <div className="knob-wrapper-outer">
//                       <div className="knob-wrapper">
//                         <div className="knob-mask">
//                           <div className="knob d3"><span /></div>
//                           <div className="handle" />
//                           <div className="round">
//                             <img src="/images/svg/volume.svg" alt />
//                           </div>
//                         </div>
//                       </div>
//                       {/* <input></input> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="jp-toggles flex-item">
//                   <button className="jp-shuffle" tabIndex={0} title="Shuffle">
//                     <i className="ms_play_control" /></button>
//                   <button className="jp-repeat" tabIndex={0} title="Repeat"><i className="ms_play_control" /></button>
//                 </div>
//                 <div className="jp_quality_optn custom_select">
//                   <select>
//                     <option>quality</option>
//                     <option value={1}>HD</option>
//                     <option value={2}>High</option>
//                     <option value={3}>medium</option>
//                     <option value={4}>low</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*main div*/}
//     </div>


//   );
// }

// export default AudioPlayerSection;
