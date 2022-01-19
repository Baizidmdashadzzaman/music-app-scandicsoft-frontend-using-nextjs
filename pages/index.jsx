import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Home({siteinfo ,data}) {
  const images = [
    {url: 'https://picsum.photos/seed/a/1600/900'},
    {url: 'https://picsum.photos/seed/b/1920/1080'},
    {url: 'https://picsum.photos/seed/c/1366/768'}
  ]
  return (
    <>
      <Head>
        <title>Musicapp : Home</title>
      </Head>
        <br/>
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
        {
          data.allData.map((singledataimages) => (
            <div className="ms-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="ms_banner_img " style={{paddingTop:'100px'}}>
                    <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_logo_second } 
                    className="img-fluid" style={{width:'70%'}} />
                  </div>
                  <div className="ms_banner_text">
                    <h1>This Month’s</h1>
                    <h1 className="ms_color">Record Breaking Albums !</h1>
                    <p>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless<br /> Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...</p>
                    <div className="ms_banner_btn">
                      <a href="#" className="ms_btn">Listen Now</a>
                      <a href="#" className="ms_btn">Add To Queue</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
       }
                  
        </Carousel>            
          {/*-Banner-*/}
          {/* <div className="ms-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="ms_banner_img " style={{paddingTop:'100px'}}>
                <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_logo_second } 
                className="img-fluid" style={{width:'70%'}} />
              </div>
              <div className="ms_banner_text">
                <h1>This Month’s</h1>
                <h1 className="ms_color">Record Breaking Albums !</h1>
                <p>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless<br /> Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...</p>
                <div className="ms_banner_btn">
                  <a href="#" className="ms_btn">Listen Now</a>
                  <a href="#" className="ms_btn">Add To Queue</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*-Recently Played Music-*/}
      <div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Featured Playlist</h1>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img1.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Top Trendings</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img2.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">New Romantic Charts</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img3.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Dance Beats - Hip Hops</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img4.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Workout Time</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div> 
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img5.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Best Classics Of All Time</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img6.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Heart Broken - Soul Music</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img7.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">International Hits</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img8.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Nostalgia</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img9.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Retros</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/featured/song4.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Summer Season</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img10.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Rock It</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6">
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
            <img src="images/radio/img11.jpg" alt className="img-fluid" />
            <div className="ms_main_overlay">
              <div className="ms_box_overlay" />
              <div className="ms_play_icon">
                <img src="images/svg/play.svg" alt />
              </div>
            </div>
          </div>
          <div className="ms_rcnt_box_text">
            <h3><a href="#">Top 20s Hits</a></h3>
            <p>20 songs</p>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</div>  
      {/*-Weekly Top 15-*/}
      <div className="ms_weekly_wrapper">
        <div className="ms_weekly_inner">
          <div className="row">
            <div className="col-lg-12">
              <div className="ms_heading">
                <h1>weekly top 15</h1>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 padding_right40">
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    01
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song1.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Until I Met You</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    02
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song2.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Walking Promises</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    03
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song3.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Gimme Some Courage</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    04
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song4.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Desired Games</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    05
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song5.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Dark Alley Acoustic</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 padding_right40">
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    06
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song6.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Walking Promises</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    07
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song7.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Endless Things</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box ms_active_play">
                <div className="weekly_left">
                  <span className="w_top_no">
                    08
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song8.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <div className="ms_bars">
                          <div className="bar" />
                          <div className="bar" />
                          <div className="bar" />
                          <div className="bar" />
                          <div className="bar" />
                          <div className="bar" />
                        </div>
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Dream Your Moments</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    09
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song9.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Until I Met You</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    10
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song5.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Gimme Some Courage</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    11
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song2.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Dark Alley Acoustic</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    12
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song11.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">The Heartbeat Stops</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    13
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song12.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">One More Stranger</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    14
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song13.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Walking Promises</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
              <div className="ms_divider" />
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    15
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <img src="images/weekly/song14.jpg" alt className="img-fluid" />
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><a href="#">Endless Things</a></h3>
                      <p>Ava Cornish</p>
                    </div>
                  </div>
                </div>
                <div className="weekly_right">
                  <span className="w_song_time">5:10</span>
                  <span className="ms_more_icon" data-other={1}>
                    <img src="images/svg/more.svg" alt />									
                  </span>
                </div>
                <ul className="more_option">
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                  <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-Featured Artists Music-*/}
      

      {/*--Add Section Start--*/}
      <div className="ms_advr_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <a href="#"><img src="images/adv.jpg" alt className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
      {/*--New Releases Section Start--*/}
      
      {/*--Featured Albumn Section Start--*/}
      
      {/*--Top Genres Section Start--*/}
      <div className="ms_genres_wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="ms_heading">
              <h1>Top Genres</h1>
              <span className="veiw_all"><a href="#">view more</a></span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ms_genres_box">
              <img src="images/genrs/img1.jpg" alt className="img-fluid" />
              <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">romantic</a></span>
                  <span className="ovrly_text2"><a href="#">view song</a></span>
                </div>
              </div>
              <div className="ms_box_overlay_on">
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">romantic</a></span>
                  <span className="ovrly_text2"><a href="#">view song</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <div className="ms_genres_box">
                  <img src="images/genrs/img2.jpg" alt className="img-fluid" />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_play_icon">
                      <img src="images/svg/play.svg" alt />
                    </div>
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">Classical</a></span>
                    </div>
                  </div>
                  <div className="ms_box_overlay_on">
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">Classical</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="ms_genres_box">
                  <img src="images/genrs/img3.jpg" alt className="img-fluid" />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_play_icon">
                      <img src="images/svg/play.svg" alt />
                    </div>
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">hip hop</a></span>
                    </div>
                  </div>
                  <div className="ms_box_overlay_on">
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">hip hop</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="ms_genres_box">
                  <img src="images/genrs/img5.jpg" alt className="img-fluid" />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_play_icon">
                      <img src="images/svg/play.svg" alt />
                    </div>
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">dancing</a></span>
                    </div>
                  </div>
                  <div className="ms_box_overlay_on">
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">dancing</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ms_genres_box">
                  <img src="images/genrs/img6.jpg" alt className="img-fluid" />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_play_icon">
                      <img src="images/svg/play.svg" alt />
                    </div>
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">EDM</a></span>
                    </div>
                  </div>
                  <div className="ms_box_overlay_on">
                    <div className="ovrly_text_div">
                      <span className="ovrly_text1"><a href="#">EDM</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="ms_genres_box">
              <img src="images/genrs/img4.jpg" alt className="img-fluid" />
              <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">rock</a></span>
                </div>
              </div>
              <div className="ms_box_overlay_on">
                <div className="ovrly_text_div">
                  <span className="ovrly_text1"><a href="#">rock</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--Add Section Start--*/}
      <div className="ms_advr_wrapper ms_advr2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <a href="#"><img src="images/adv1.jpg" alt className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
      {/*--Live Radio Section Start--*/}
      <div className="ms_free_download ms_purchase_wrapper">
  <div className="ms_heading">
    <h1>Your Favourites</h1>
  </div>
  <div className="album_inner_list">
    <div className="album_list_wrapper">
      <ul className="album_list_name">
        <li>#</li>
        <li>Song Title</li>
        <li>Album</li>
        <li className="text-center">price</li>
        <li className="text-center">Duration</li>
        <li className="text-center">Add To Favourites</li>
        <li className="text-center">More</li>
        <li className="text-center">remove</li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">01</span><span className="play_hover" /></a></li>
        <li><a href="#">Bloodlust</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">02</span><span className="play_hover" /></a></li>
        <li><a href="#">Desired Games</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">03</span><span className="play_hover" /></a></li>
        <li><a href="#">Until I Met You</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul className="play_active_song">
        <li><a href="#"><span className="play_no">04</span><span className="play_hover" /></a></li>
        <li><a href="#">Dark Alley Acoustic</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">free</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">05</span><span className="play_hover" /></a></li>
        <li><a href="#">Cloud nine</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">06</span><span className="play_hover" /></a></li>
        <li><a href="#">Walking Promises</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">free</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">07</span><span className="play_hover" /></a></li>
        <li><a href="#">Endless Things</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">08</span><span className="play_hover" /></a></li>
        <li><a href="#">Gimme Some Courage</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">09</span><span className="play_hover" /></a></li>
        <li><a href="#">One More Stranger</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <ul>
        <li><a href="#"><span className="play_no">10</span><span className="play_hover" /></a></li>
        <li><a href="#">Cloud nine</a></li>
        <li><a href="#">Dream Your Moments</a></li>
        <li className="text-center"><a href="#">$5</a></li>
        <li className="text-center"><a href="#">5:26</a></li>
        <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
        <li className="text-center"><a href="#"><span className="ms_close">
              <img src="images/svg/close.svg" alt /></span></a></li>
      </ul>
      <div className="ms_view_more">
        <a href="#" className="ms_btn">view more</a>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.siteurl+`/api/front-slider`)
  const data = await res.json()
  return { props: { data } }
}


export default Home
