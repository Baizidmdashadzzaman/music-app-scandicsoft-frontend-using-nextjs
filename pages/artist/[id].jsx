import Head from 'next/head'

export default function Artistview() {
  return (
      <>
      <Head>
        <title>Musicapp : Artist View</title>
      </Head>
      
<div>
  <div className="ms_album_single_wrapper ms_artist_single">
    <div className="album_single_data">
      <div className="album_single_img">
        <img src="/images/featured/song1.jpg" alt className="img-fluid" />
      </div>
      <div className="album_single_text">
        <h2>Ava Cornish</h2>
        <p className="singer_name">Singer, New York</p>
        <div className="about_artist">
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br /> reprehenderit in voluptate velit esse cillum dolor... <a href="#">Read More</a>
        </div>
        <div className="album_btn">
          <a href="#" className="ms_btn play_btn"><span className="play_all"><img src="/images/svg/play_all.svg" alt />Play All</span><span className="pause_all"><img src="/images/svg/pause_all.svg" alt />Pause</span></a>
          <a href="#" className="ms_btn"><span className="play_all"><img src="/images/svg/add_q.svg" alt />Add To Queue</span></a>
        </div>
      </div>
      <div className="album_more_optn ms_more_icon">
        <span><img src="/images/svg/more.svg" alt /></span>
      </div>
      <ul className="more_option">
        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
        <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
      </ul>
    </div>
    {/*--Song List--*/}
    <div className="album_inner_list">
      <div className="album_list_wrapper">
        <ul className="album_list_name">
          <li>#</li>
          <li>Song Title</li>
          <li>Artist</li>
          <li className="text-center">Duration</li>
          <li className="text-center">Add To Favourites</li>
          <li className="text-center">More</li>
        </ul>
        <ul>
          <li><a href="#"><span className="play_no">01</span><span className="play_hover" /></a></li>
          <li><a href="#">Bloodlust</a></li>
          <li><a href="#">Ava Cornish &amp; Brian Hill</a></li>
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
        </ul>
        <ul>
          <li><a href="#"><span className="play_no">02</span><span className="play_hover" /></a></li>
          <li><a href="#">Desired Games</a></li>
          <li><a href="#">Ava Cornish &amp; Brian Hill</a></li>
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
        </ul>
        <ul>
          <li><a href="#"><span className="play_no">03</span><span className="play_hover" /></a></li>
          <li><a href="#">Until I Met You</a></li>
          <li><a href="#">Ava Cornish &amp; Brian Hill</a></li>
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
        </ul>
        <ul className="play_active_song">
          <li><a href="#"><span className="play_no">04</span><span className="play_hover" /></a></li>
          <li><a href="#">Dark Alley Acoustic</a></li>
          <li><a href="#">Ava Cornish &amp; Brian Hill</a></li>
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
        </ul>
        <ul>
          <li><a href="#"><span className="play_no">05</span><span className="play_hover" /></a></li>
          <li><a href="#">Cloud nine</a></li>
          <li><a href="#">Ava Cornish &amp; Brian Hill</a></li>
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
        </ul>
      </div>
    </div>
    <div className="ms_view_more padder_bottom20">
      <a href="#" className="ms_btn">view more</a>
    </div>
  </div>
  <div className="ms_content_wrapper ms_artist_content">
    <div className="ms_featured_slider">
      <div className="ms_heading">
        <h1>Similar Artists</h1>
        <span className="veiw_all"><a href="#">view more</a></span>
      </div>
      <div className="ms_relative_inner">
        <div className="ms_feature_slider swiper-container swiper-container-horizontal">
          <div className="swiper-wrapper" style={{transform: 'translate3d(-1179px, 0px, 0px)', transitionDuration: '0ms'}}><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song1.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                </div>
              </div>
            </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={7} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song2.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Until I Met You</a></h3>
                </div>
              </div>
            </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={8} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song3.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Gimme Some Courage</a></h3>
                </div>
              </div>
            </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={9} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song4.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Dark Alley Acoustic</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song1.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Best Of Ava Cornish</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song2.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Until I Met You</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={2} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song3.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Gimme Some Courage</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={3} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song4.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Dark Alley Acoustic</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={4} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song5.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Walking Promises</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={5} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song6.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Desired Games</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={6} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song1.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={7} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song2.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Until I Met You</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index={8} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song3.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Gimme Some Courage</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index={9} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song4.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Dark Alley Acoustic</a></h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song1.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Best Of Ava Cornish</a></h3>
                </div>
              </div>
            </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song2.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Until I Met You</a></h3>
                </div>
              </div>
            </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song3.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Gimme Some Courage</a></h3>
                </div>
              </div>
            </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} style={{width: '264.75px', marginRight: 30}}>
              <div className="ms_rcnt_box">
                <div className="ms_rcnt_box_img">
                  <img src="/images/featured/song4.jpg" alt />
                  <div className="ms_main_overlay">
                    <div className="ms_box_overlay" />
                    <div className="ms_more_icon">
                      <img src="/images/svg/more.svg" alt />
                    </div>
                    <ul className="more_option">
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                      <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                    </ul>
                    <div className="ms_play_icon">
                      <img src="/images/svg/play.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="ms_rcnt_box_text">
                  <h3><a href="#">Dark Alley Acoustic</a></h3>
                </div>
              </div>
            </div></div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
        {/* Add Arrows */}
        <div className="swiper-button-next1 slider_nav_next" tabIndex={0} role="button" aria-label="Next slide" />
        <div className="swiper-button-prev1 slider_nav_prev" tabIndex={0} role="button" aria-label="Previous slide" />
      </div>
    </div>
    {/*--Live Radio Section Start--*/}
    <div className="ms_radio_wrapper padder_top20">
      <div className="ms_heading">
        <h1>Live Radio</h1>
        <span className="veiw_all"><a href="#">view more</a></span>
      </div>
      <div className="ms_radio_slider swiper-container swiper-container-horizontal">
        <div className="swiper-wrapper" style={{transform: 'translate3d(-1179px, 0px, 0px)', transitionDuration: '0ms'}}><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={6} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="i/mages/radio/img1.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Dream Your Moments (Duet)</a></h3>
              </div>
            </div>
          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={7} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img2.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Until I Met You</a></h3>
              </div>
            </div>
          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={8} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img3.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Gimme Some Courage</a></h3>
              </div>
            </div>
          </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={9} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img4.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img1.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Top Trendings</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img2.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">New Romantic Charts</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={2} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img3.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Dance Beats - Hip Hops</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={3} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img4.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Workout Time</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={4} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img5.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Best Classics Of All Time</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={5} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img6.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Heart Broken - Soul Music</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={6} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img1.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Dream Your Moments (Duet)</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={7} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img2.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Until I Met You</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide" data-swiper-slide-index={8} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img3.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Gimme Some Courage</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index={9} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img4.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Dark Alley Acoustic</a></h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img1.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Top Trendings</a></h3>
              </div>
            </div>
          </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img2.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">New Romantic Charts</a></h3>
              </div>
            </div>
          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img3.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Dance Beats - Hip Hops</a></h3>
              </div>
            </div>
          </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} style={{width: '264.75px', marginRight: 30}}>
            <div className="ms_rcnt_box">
              <div className="ms_rcnt_box_img">
                <img src="/images/radio/img4.jpg" alt />
                <div className="ms_main_overlay">
                  <div className="ms_box_overlay" />
                  <div className="ms_more_icon">
                    <img src="/images/svg/more.svg" alt />
                  </div>
                  <ul className="more_option">
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                  </ul>
                  <div className="ms_play_icon">
                    <img src="/images/svg/play.svg" alt />
                  </div>
                </div>
              </div>
              <div className="ms_rcnt_box_text">
                <h3><a href="#">Workout Time</a></h3>
              </div>
            </div>
          </div></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
      {/* Add Arrows */}
      <div className="swiper-button-next4 slider_nav_next" tabIndex={0} role="button" aria-label="Next slide" />
      <div className="swiper-button-prev4 slider_nav_prev" tabIndex={0} role="button" aria-label="Previous slide" />
    </div>
    {/*--Main div close--*/}
  </div>
</div>


      
      </>


  )
}