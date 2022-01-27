import React ,{ useEffect ,useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 
{ faBook,faComment,faHeadphones,faHome,faInfoCircle,faList,faMusic,faQuestion,faVolumeUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Subscribe from './subscribe'
import { useRouter } from 'next/router'
import { getCookie} from 'cookies-next';

function Layout({children , siteinfo ,myplaylists ,removeSongToMyPlaylist}) {
  
  const router = useRouter()
  const  searchSongs = (e)=>{
    if(e.target.value.length > 0) {
      router.push('/search/' + e.target.value);
    }
    else{
      router.push('/'); 
    }
  }
  const [alertMessage, setalertMessage] = useState('');
  const alertNotAvailable = ()=>{ setalertMessage('Module not availbale. It will be added soon.'); $('#customAlert').toggle(); };
  const alertNotAvailableClose = ()=>{ $('#customAlert').hide(); };
  const clickToRemoveSong = (datacust) =>{ removeSongToMyPlaylist(datacust); };
  const [isPlaying, setisPlaying] = useState(0);
  return (
    <>
    <Head>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta name="description" content="Music" />
            <meta name="keywords" content="Music" />
            <meta name="author" content="baizid.md.ashadzzaman@gmail.com" />
            <meta name="MobileOptimized" content={320} />
            <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
    </Head>
    <div >
      <div>
  {/*--Main Wrapper Start--*/}
  <div className="ms_main_wrapper">
    {/*-Side Menu Start-*/}
    <div className="ms_sidemenu_wrapper">
      <div className="ms_nav_close">
        <i className="fa fa-angle-right" aria-hidden="true" />
      </div>
      <div className="ms_sidemenu_inner">
        <div className="ms_logo_inner">
          <div className="ms_logo">
            <Link href="/">
              <a>
               <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_logo_second } 
                className="img-fluid" style={{width:'50px'}} />
              </a>
            </Link>
          </div>
          <div className="ms_logo_open">
            <Link href="/">
              <a>
                <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_logo_first } 
                className="img-fluid" style={{width:'150px'}} />
              </a>
            </Link>
          </div>
        </div>
        <div className="ms_nav_wrapper">
          <ul>
            <li>
              <Link href="/" className="active" title="Discover">
                <a>
                <span className="nav_icon">
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </span>
                <span className="nav_text">
                  Home
                </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/category" title="Albums">
              <a>
                <span className="nav_icon">
                <FontAwesomeIcon icon={faList} size="lg" />
                </span>
                <span className="nav_text">
                  Categories
                </span>
              </a>
              </Link>
            </li>
            <li>
            <Link href="/album" title="Albums">
              <a title="Albums">
                <span className="nav_icon">
                   <FontAwesomeIcon icon={faHeadphones} size="lg" />
                </span>
                <span className="nav_text">
                  Albums
                </span>
              </a>
            </Link>  
            </li>
            <li>
             <Link href="/artist" title="Artist">
              <a title="Artist">
                <span className="nav_icon">
                  <FontAwesomeIcon icon={faVolumeUp} size="lg" />
                </span>
                <span className="nav_text">
                  Artist
                </span>
              </a>
             </Link>
            </li>
            <li>
            <Link href="/songs" title="Songs">
              <a title="Songs">
                <span className="nav_icon">
                  <FontAwesomeIcon icon={faMusic} size="lg" />
                </span>
                <span className="nav_text">
                  Songs
                </span>
              </a>
            </Link>  
            </li>
            
          </ul>
          <ul className="nav_downloads">
            <li>
              <Link href="/about" title="Aboutus">
              <a title="Aboutus">
                <span className="nav_icon">
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                </span>
                <span className="nav_text">
                  Aboutus
                </span>
              </a>
              </Link>
            </li>
            <li>
             <Link href="/contactus" title="Contact us">
              <a title="Contact us">
                <span className="nav_icon">
                  <FontAwesomeIcon icon={faComment} size="lg" />
                </span>
                <span className="nav_text">
                  Contact us
                </span>
              </a>
             </Link> 
            </li>
            <li>
             <Link href="/faq" title="Faq">
              <a  title="Faq">
                <span className="nav_icon">
                   <FontAwesomeIcon icon={faQuestion} size="lg" />
                </span>
                <span className="nav_text">
                  Faq
                </span>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/privacyandpolicy" title="Privacry and policy">
               <a title="Privacry and policy">
                <span className="nav_icon">
                  <FontAwesomeIcon icon={faBook} size="lg" />
                </span>
                <span className="nav_text">
                  Privacry&policy
                </span>
                </a>
              </Link>
            </li>
          </ul>
          
          
        </div>
      </div>
    </div>
    {/*-Main Content Start-*/}
   
    <div className="ms_content_wrapper padder_top80">
      {/*-Header-*/}
      <div className="ms_header">
        <div className="ms_top_left">
          <div className="ms_top_search">
            <input type="text" name="search" id="search" onKeyUp={searchSongs} 
            className="form-control" placeholder="Search Music Here.." />
            <span className="search_icon">
              <img src="/images/svg/search.svg" alt />
            </span>
          </div>
          <div className="ms_top_trend">
            <span><a href="#" className="ms_color">Trending Songs :
            </a></span> <span className="top_marquee"><a href="#">
              Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a></span>
          </div>
        </div>
        <div className="ms_top_right">
          <div className="ms_top_lang">
            {/* <span data-toggle="modal" data-target="#lang_modal">languages <img src="/images/svg/lang.svg" alt /></span> */}
            <span onClick={alertNotAvailable} >languages <img src="/images/svg/lang.svg" alt /></span>
          </div>
          <div className="ms_top_btn">
            {/* <a href="#" className="ms_btn reg_btn" data-toggle="modal" data-target="#myModal"><span>register</span></a>
            <a href="#" className="ms_btn login_btn" data-toggle="modal" data-target="#myModal1"><span>login</span></a> */}
            <a href="#" className="ms_btn reg_btn" onClick={alertNotAvailable} ><span>register</span></a>
            <a href="#" className="ms_btn login_btn"onClick={alertNotAvailable} ><span>login</span></a>
          </div>
          
        </div>
        
      </div>

      {children }

      {/*--Main div close--*/}
    </div>
    {/*--Footer Start--*/}
    <div className="ms_footer_wrapper">
      <div className="ms_footer_logo">
        <Link href="/" >
          <a>
            <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_logo_first } 
                className="img-fluid" style={{width:'150px'}} />
          </a>
        </Link>
        
      </div>
      <div className="ms_footer_inner">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer_box">
              <h1 className="footer_title">{siteinfo.site_name}</h1>
              <p>
                { siteinfo.site_description == null ? ( siteinfo.site_description ) : ( siteinfo.site_description.length < 250 ? ( siteinfo.site_description ) : ( siteinfo.site_description.substring(0, 250) + '...' ) ) }
                <Link href="/about"><a>Read more</a></Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer_box footer_app">
              <h1 className="footer_title">Download our App</h1>
              <p>Go Mobile with our app.<br /> Listen to your favourite songs at just one click. Download Now !</p>
              <a href="#" className="foo_app_btn"><img src="/images/google_play.jpg" alt className="img-fluid" /></a>
              <a href="#" className="foo_app_btn"><img src="/images/app_store.jpg" alt className="img-fluid" /></a>
              <a href="#" className="foo_app_btn"><img src="/images/windows.jpg" alt className="img-fluid" /></a>
            </div>
          </div>
          
             <Subscribe/>
          
          <div className="col-lg-3 col-md-6">
            <div className="footer_box footer_contacts">
              <h1 className="footer_title">contact us</h1>
              <ul className="foo_con_info">
                <li>
                  <div className="foo_con_icon">
                    <img src="/images/svg/phone.svg" alt />
                  </div>
                  <div className="foo_con_data">
                    <span className="con-title">Call us :</span>
                    <span>{siteinfo.site_phone}</span>
                  </div>
                </li>
                <li>
                  <div className="foo_con_icon">
                    <img src="/images/svg/message.svg" alt />
                  </div>
                  <div className="foo_con_data">
                    <span className="con-title">email us :</span>
                    <span><a href="#">{siteinfo.site_email}</a></span>
                  </div>
                </li>
                <li>
                  <div className="foo_con_icon">
                    <img src="/images/svg/add.svg" alt />
                  </div>
                  <div className="foo_con_data">
                    <span className="con-title">Address :</span>
                    <span>{siteinfo.site_address}</span>
                  </div>
                </li>
              </ul>
              <div className="foo_sharing">
                <div className="share_title">follow us :</div>
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--Copyright--*/}
      <div className="col-lg-12">
        <div className="ms_copyright">
          <div className="footer_border" />
          <p>Copyright © 2018 <a href="#">{siteinfo.site_name}</a>. Developed by &nbsp;&nbsp;
          <a href='https://www.softscandic.com/' target="_blank">
            <img src="/images/logoscandic.png" style={{width:'120px'}}/>
            </a>
          </p>
        </div>
      </div>
    </div>
    
    {/*--Audio Player Section--*/}
    <div className="ms_player_wrapper">
      <div className="ms_player_close">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </div>
      <div className="player_mid">
        <div className="audio-player">
          <div id="jquery_jplayer_1" className="jp-jplayer" />
          <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
            <div className="player_left">
              <div className="ms_play_song">
                <div className="play_song_name">
                  <a href="#" id="playlist-text">
                  
                  <div className="jp-now-playing flex-item">
                    
                      {
                         isPlaying == 0 ? 
                         (
                          <div className="jp-track-name">
                             <span className="que_img">
                                <img src="/images/loader.gif" style={{width:'50px'}}/>
                             </span>
                            <div className="que_data">Nothing playing 
                              <div className="jp-artist-name">click play to play
                              </div>
                            </div>
                          </div>
                         ):(
                          <div className="jp-track-name">
                              <span className="que_img">
                                <img src="/images/weekly/song1.jpg" style={{width:'50px'}}/>
                              </span>
                            <div className="que_data">Cro Magnon Man 
                              <div className="jp-artist-name">Mushroom Records
                              </div>
                            </div>
                          </div>
                         )
                      }
                    
                  </div>
                  </a>
                </div>
              </div>
              <div className="play_song_options">
                <ul>
                  <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_download" /></span>download now</a></li>
                  <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_playlist" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="song_optn_icon"><i className="ms_icon icon_share" /></span>Share</a></li>
                </ul>
              </div>


              <span className="play-left-arrow"><i className="fa fa-angle-right" aria-hidden="true" /></span>
            </div>
            
            {/*--Right Queue--*/}
            <div className="jp_queue_wrapper">
              <span className="que_text" id="myPlaylistQueue"><i className="fa fa-angle-up" aria-hidden="true" /> Playlist</span>
              <div id="playlist-wrap" className="jp-playlist">
                <div className="jp_queue_cls"><i className="fa fa-times" aria-hidden="true" /></div>
                <h2>Your playlist ({myplaylists.length})</h2>
                <div className="jp_queue_list_inner">                 
                  <ul>
                    {myplaylists.map((singleplaylist)=>(
                      // <li className="jp-playlist-current">
                      <li >
                       <div>
                           <a href="#" className="jp-playlist-item-remove" style={{display: 'none'}}>×</a>
                            <Link href={"/songs/" + singleplaylist.song_id}>
                            <a href="#" className="jp-playlist-item jp-playlist-current" tabIndex={0}>
                              <span className="que_img">
                             <img src={ process.env.siteurl + "/songimages/" + singleplaylist.song_thumbnail } style={{width:'60px'}}/></span><div className="que_data">{singleplaylist.song_name} <span className="jp-artist">by NUN</span></div>
                            </a>
                            </Link>
                             <div className="action"><span className="que_more"><img src="/images/svg/more.svg" /></span>
                             <span key={singleplaylist.song_id} onClick={() => clickToRemoveSong(singleplaylist.song_id)} className="que_close"><img src="/images/svg/close.svg" /></span>
                             </div>
                       </div>
                       <ul className="more_option">
                           <li className="jp-playlist-current"><a href="#"><span className="opt_icon" title="Add To Favourites"><span className="icon icon_fav" /></span></a></li><li><a href="#"><span className="opt_icon" title="Add To Queue"><span className="icon icon_queue" /></span></a></li><li><a href="#"><span className="opt_icon" title="Download Now"><span className="icon icon_dwn" /></span></a></li><li><a href="#"><span className="opt_icon" title="Add To Playlist"><span className="icon icon_playlst" /></span></a></li><li><a href="#"><span className="opt_icon" title="Share"><span className="icon icon_share" /></span></a></li>
                       </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="jp_queue_btn">
                  <a href="#" className="ms_clear" data-toggle="modal" data-target="#clear_modal">clear</a>
                  <a href="#" className="ms_save" data-toggle="modal" data-target="#save_modal">save</a>
                </div>
              </div>
            </div>
            <div className="jp-type-playlist">
              <div className="jp-gui jp-interface flex-wrap">
                <div className="jp-controls flex-item">

{/* <audio controls autoPlay >
  <source src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" type="audio/ogg" />
  <source src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio> */}
                  <button className="jp-previous" tabIndex={0}>
                    <i className="ms_play_control" />
                  </button>
                  <button className="jp-play" tabIndex={0}>
                    <i className="ms_play_control" />
                  </button>
                  <button className="jp-next" tabIndex={0}>
                    <i className="ms_play_control" />
                  </button>
                </div>
                <div className="jp-progress-container flex-item">
                  <div className="jp-time-holder">
                    <span className="jp-current-time" role="timer" aria-label="time">&nbsp;</span>
                    <span className="jp-duration" role="timer" aria-label="duration">&nbsp;</span>
                  </div>
                  <div className="jp-progress">
                    <div className="jp-seek-bar">
                      <div className="jp-play-bar">
                        <div className="bullet">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jp-volume-controls flex-item">
                  <div className="widget knob-container">
                    <div className="knob-wrapper-outer">
                      <div className="knob-wrapper">
                        <div className="knob-mask">
                          <div className="knob d3"><span /></div>
                          <div className="handle" />
                          <div className="round">
                            <img src="/images/svg/volume.svg" alt />
                          </div>
                        </div>
                      </div>
                      {/* <input></input> */}
                    </div>
                  </div>
                </div>
                <div className="jp-toggles flex-item">
                  <button className="jp-shuffle" tabIndex={0} title="Shuffle">
                    <i className="ms_play_control" /></button>
                  <button className="jp-repeat" tabIndex={0} title="Repeat"><i className="ms_play_control" /></button>
                </div>
                <div className="jp_quality_optn custom_select">
                  <select>
                    <option>quality</option>
                    <option value={1}>HD</option>
                    <option value={2}>High</option>
                    <option value={3}>medium</option>
                    <option value={4}>low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*main div*/}
    </div>
    

  </div>
  {/*--Register Modal Start--*/}
  {/* Modal */}
  <div className="ms_register_popup">
    <div id="myModal" className="modal  centered-modal" role="dialog">
      <div className="modal-dialog register_dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal">
            <i className="fa_icon form_close" />
          </button>
          <div className="modal-body">
            <div className="ms_register_img">
              <img src="/images/register_img.png" alt className="img-fluid" />
            </div>
            <div className="ms_register_form">
              <h2>Register / Sign Up</h2>
              <div className="form-group">
                <input type="text" placeholder="Enter Your Name" className="form-control" />
                <span className="form_icon">
                  <i className="fa_icon form-user" aria-hidden="true" />
                </span>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Enter Your Email" className="form-control" />
                <span className="form_icon">
                  <i className="fa_icon form-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Enter Password" className="form-control" />
                <span className="form_icon">
                  <i className="fa_icon form-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm Password" className="form-control" />
                <span className="form_icon">
                  <i className=" fa_icon form-lock" aria-hidden="true" />
                </span>
              </div>
              <a href="#" className="ms_btn">register now</a>
              <p>Already Have An Account? <a href="#myModal1" data-toggle="modal" className="ms_modal hideCurrentModel">login here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*--Login Popup Start--*/}
    <div id="myModal1" className="modal  centered-modal" role="dialog">
      <div className="modal-dialog login_dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal">
            <i className="fa_icon form_close" />
          </button>
          <div className="modal-body">
            <div className="ms_register_img">
              <img src="/images/register_img.png" alt className="img-fluid" />
            </div>
            <div className="ms_register_form">
              <h2>login / Sign in</h2>
              <div className="form-group">
                <input type="text" placeholder="Enter Your Email" className="form-control" />
                <span className="form_icon">
                  <i className="fa_icon form-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Enter Password" className="form-control" />
                <span className="form_icon">
                  <i className="fa_icon form-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="remember_checkbox">
                <label>Keep me signed in
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <a href="profile.html" className="ms_btn" target="_blank">login now</a>
              <div className="popup_forgot">
                <a href="#">Forgot Password ?</a>
              </div>
              <p>Don't Have An Account? <a href="#myModal" data-toggle="modal" className="ms_modal1 hideCurrentModel">register here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--Language Selection Modal--*/}
  <div className="ms_lang_popup">
    <div id="lang_modal" className="modal  centered-modal" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal">
            <i className="fa_icon form_close" />
          </button>
          <div className="modal-body">
            <h1>language selection</h1>
            <p>Please select the language(s) of the music you listen to.</p>
            <ul className="lang_list">
              <li>
                <label className="lang_check_label">
                  English 
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  hindi
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  punjabi
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  French
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  German 
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  Spanish
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  Chinese
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  Japanese 
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  Arabic
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
              <li>
                <label className="lang_check_label">
                  Italian
                  <input type="checkbox" name="check" /> 
                  <span className="label-text" />
                </label>
              </li>
            </ul>
            <div className="ms_lang_btn">
              <a href="#" className="ms_btn">apply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--Queue Clear Model --*/}
  <div className="ms_clear_modal">
    <div id="clear_modal" className="modal  centered-modal" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal">
            <i className="fa_icon form_close" />
          </button>
          <div className="modal-body">
            <h1>Are you sure you want to clear your queue?</h1>
            <div className="clr_modal_btn">
              <a href="#">clear all</a>
              <a href="#">cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--Queue Save Modal--*/}
  <div className="ms_save_modal">
    <div id="save_modal" className="modal  centered-modal" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal">
            <i className="fa_icon form_close" />
          </button>
          <div className="modal-body">
            <h1>Log in to start sharing your music!</h1>
            <div className="save_modal_btn">
              <a href="#"><i className="fa fa-google-plus-square" aria-hidden="true" /> continue with google </a>
              <a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /> continue with facebook</a>
            </div>
            <div className="ms_save_email">
              <h3>or use your email</h3>
              <div className="save_input_group">
                <input type="text" placeholder="Enter Your Name" className="form-control" />
              </div>
              <div className="save_input_group">
                <input type="password" placeholder="Enter Password" className="form-control" />
              </div>
              <button className="save_btn">Log in</button>
            </div>
            <div className="ms_dnt_have">
              <span>Dont't have an account ?</span>
              <a href="#" className="hideCurrentModel" data-toggle="modal" data-target="#myModal">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*--Queue Clear Model --*/}
  <div className="ms_clear_modal">
    <div id="customAlert" className="modal  centered-modal" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" onClick={alertNotAvailableClose}>
            <i className="fa_icon form_close" />
          </button>
          <div className="modal-body">
            <h1>{alertMessage}</h1>
            <div className="clr_modal_btn">
               <a href="#" onClick={alertNotAvailableClose} >close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*--Queue Save Modal--*/}


</div>
    </div>
    </>

  )
}


export default Layout

