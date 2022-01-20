import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
function Home({siteinfo ,data}) {
  const slTop = 0; const slNew = 0;
  return (
    <>
      <Head>
        <title>{siteinfo.site_name} : Home</title>
      </Head>
        <br/>
        <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
        {
          data.allSlider.map((singleslider) => (
            <div className="ms-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="ms_banner_img " style={{paddingTop:'50px'}}>
                  <img src={ process.env.siteurl + "/sliderimages/" + singleslider.slider_image }
                    className="img-fluid img-bordered" width="100px"/>
                  </div>
                  <div className="ms_banner_text">
                    <h1>{singleslider.slider_title}</h1>
                    <h1 className="ms_color">{singleslider.slider_subtitle}</h1>
                    <p>{singleslider.slider_description}</p>
                    <div className="ms_banner_btn">
                      {singleslider.slider_btn1_text == null ? (''):(<a href={singleslider.slider_btn1_link} className="ms_btn">{singleslider.slider_btn1_text}</a>)}
                      {singleslider.slider_btn2_text == null ? (''):(<a href={singleslider.slider_btn2_link} className="ms_btn">{singleslider.slider_btn2_text}</a>)}
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
        
  {/*-Recently Played Music-*/}
  <div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Latest category</h1>
        </div>
      </div>
      {
        data.allCategory.map((singledata) => (
          <div className="col-lg-2 col-md-6">
          <Link href={"/category/" + singledata.id} >
            <a>
            <div className="ms_rcnt_box marger_bottom30">
            <div className="ms_rcnt_box_img">
               <img src={ process.env.siteurl + "/categoryimages/" + singledata.category_logo } className="img-fluid"/>
                <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">{singledata.category_name}</a></h3>
            </div>
            </div>
            </a>
          </Link>
          </div>
        ))
      }    
    </div>
  </div>
  </div>  
      {/*-Weekly Top 15-*/}
      <div className="ms_weekly_wrapper">
        <div className="ms_weekly_inner">
          <div className="row">
            <div className="col-lg-12">
              <div className="ms_heading">
                <h1>Top songs</h1>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 padding_right40">
            { data.allTopSong.map((singletopsong) => (
              <>
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    {slTop+1}
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <Link href={"/songs/" + singletopsong.id} >
                        <img src={ process.env.siteurl + "/songimages/" + singletopsong.song_thumbnail } className="img-fluid"/>
                      </Link>
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><Link href={"/songs/" + singletopsong.id} ><a>{singletopsong.song_name}</a></Link></h3>
                      <p></p>
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
              <div className="ms_divider" ></div>
              </>
              
              ))}
              
          </div>
          </div>
        </div>
      </div>
      {/*-Featured Artists Music-*/}
           
      {/*--Top Genres Section Start--*/}
      <div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Latest album</h1>
        </div>
      </div>
      {
        data.allAlbum.map((singledataalb) => (

          <div className="col-lg-2 col-md-6">
          <Link href={"/album/" + singledataalb.id} >
            <a>
            <div className="ms_rcnt_box marger_bottom30">
            <div className="ms_rcnt_box_img">
               <img src={ process.env.siteurl + "/albumimages/" + singledataalb.album_logo } className="img-fluid"/>
                <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">{singledataalb.album_name}</a></h3>
            </div>
            </div>
            </a>
          </Link>
          </div>

        ))
      }  
    </div>
  </div>
      </div>  
      {/*--Add Section Start--*/}
      
      {/*--Live Radio Section Start--*/}
      <div className="ms_weekly_wrapper">
        <div className="ms_weekly_inner">
          <div className="row">
            <div className="col-lg-12">
              <div className="ms_heading">
                <h1>Latest songs</h1>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 padding_right40">
            { data.allLatestSong.map((singlelatestsong) => (
              <>
              <div className="ms_weekly_box">
                <div className="weekly_left">
                  <span className="w_top_no">
                    {slTop+1}
                  </span>
                  <div className="w_top_song">
                    <div className="w_tp_song_img">
                      <Link href={"/songs/" + singlelatestsong.id} >
                        <img src={ process.env.siteurl + "/songimages/" + singlelatestsong.song_thumbnail } className="img-fluid"/>
                      </Link>
                      <div className="ms_song_overlay">
                      </div>
                      <div className="ms_play_icon">
                        <img src="images/svg/play.svg" alt />
                      </div>
                    </div>
                    <div className="w_tp_song_name">
                      <h3><Link href={"/songs/" + singlelatestsong.id} ><a>{singlelatestsong.song_name}</a></Link></h3>
                      <p></p>
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
              <div className="ms_divider" ></div>
              </>
              
              ))}
              
          </div>
          </div>
        </div>
      </div>

<div className="ms_free_download ms_purchase_wrapper">

<div className="album_inner_list">
  <div className="album_list_wrapper">
      <div className="ms_view_more">
        <a href="#" className="ms_btn">view more</a>
      </div>
      <br/>
    </div>
  </div>
</div>

      {/*--Top Genres Section Start--*/}
      <div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Latest artist</h1>
        </div>
      </div>
      {
        data.allArtist.map((singledataartist) => (

          <div className="col-lg-3 col-md-6">
          <Link href={"/artist/" + singledataartist.id} >
            <a>
            <div className="ms_rcnt_box marger_bottom30">
            <div className="ms_rcnt_box_img">
               <img src={ process.env.siteurl + "/artistimages/" + singledataartist.artist_logo } className="img-fluid"/>
                <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#">{singledataartist.artist_name}</a></h3>
            </div>
            </div>
            </a>
          </Link>
          </div>

        ))
      } 
    </div>
  </div>
      </div>  
      {/*--Add Section Start--*/}

    
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.siteurl+`/api/front-homepage`)
  const data = await res.json()
  return { props: { data } }
}


export default Home
