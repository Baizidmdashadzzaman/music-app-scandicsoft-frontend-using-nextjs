import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactHtmlParser from 'react-html-parser';
function Songview({data}) {
    const router = useRouter()
    const pid = router.query.id
    const sl = 0;
    return (
        <>
        <Head>
           <title>Musicapp : Single song</title>
        </Head>

<div style={{paddingTop:'5px'}} >
  <div className="album_single_data">
    <div className="album_single_img">
      <img src={ process.env.siteurl + "/songimages/" + data.singledata.song_thumbnail } alt="song" className="img-fluid" />
    </div>
    <div className="album_single_text">
      <h2>Song name : {data.singledata.song_name}</h2>
      <div className="album_feature">
        <a href="#" className="album_date">Rating : {data.singledata.song_rating} star</a>
        <a href="#" className="album_date">Released : {data.singledata.song_release_date} </a>
        <a href="#" className="album_date">Album : {data.songAlbum == null ? ('Not specified'):(data.songAlbum.album_name)} </a>
      </div>
      <div className="album_btn">
        <a href="#" className="ms_btn play_btn"><span className="play_all"><img src="/images/svg/play_all.svg" alt />Play song</span><span className="pause_all"><img src="/images/svg/pause_all.svg" alt />Pause</span></a>
        <a href="#" className="ms_btn"><span className="play_all"><img src="/images/svg/add_q.svg" alt />Add To Queue</span></a>
      </div>
      <div className="album_feature" style={{paddingTop:'20px'}}>
        <a href="#" className="album_date">Share on :</a>
      </div>
      <div className="ms_blog_tag foo_sharing">
           <ul style={{paddingLeft:'2px'}}>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            </ul>
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

  <div className="ms_blog_single_wrapper" style={{paddingTop:'5px'}}>
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <div className="ms_blog_single">
        
        <div className="blog_single_content">
          <h3 className="ms_blog_title">Song description</h3>
          <div className="ms_post_meta">
           
          </div>
          <blockquote style={{width:'100%'}}>
            <pre className="textviewashtm precustom" style={{color:'white'}}>
            {ReactHtmlParser(data.singledata.song_full_description)}
            </pre>
          </blockquote>
          <div className="album_feature" style={{paddingTop:'20px'}}>
            <a href="#" className="album_date">Song Lyrics :</a>
          </div>
          <blockquote style={{width:'100%'}}>
            <pre className="textviewashtm precustom" style={{color:'white'}}>
            {ReactHtmlParser(data.singledata.song_lyrics)}
            </pre>
          </blockquote>

          <blockquote style={{width:'100%'}}>
           
<div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1 style={{color:'white'}} >Music category</h1>
        </div>
      </div>
      {
        data.songCategorys.map((singledatacat) => (
          <div className="col-lg-1 col-md-6" key={singledatacat.category_id}>
          <Link href={"/category/" + singledatacat.category_id} >
            <a>
            <div className="ms_rcnt_box marger_bottom30">
            <div className="ms_rcnt_box_img">
               <img src={ process.env.siteurl + "/categoryimages/" + singledatacat.category_logo } className="img-fluid"/>
                <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="/images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#"><font style={{fontSize:'10px'}}>
              {singledatacat.category_name}
                </font></a></h3>
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

<div className="ms_top_artist" style={{marginTop:'10px'}}>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1 style={{color:'white'}}>Music artists</h1>
        </div>
      </div>
      {
        data.songArtists.map((singledataart) => (

          <div className="col-lg-1 col-md-6" key={singledataart.artist_id}>
          <Link href={"/artist/" + singledataart.artist_id} >
            <a>
            <div className="ms_rcnt_box marger_bottom30">
            <div className="ms_rcnt_box_img">
               <img src={ process.env.siteurl + "/artistimages/" + singledataart.artist_logo } className="img-fluid"/>
                <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="/images/svg/play.svg" alt />
                </div>
              </div>
            </div>
            <div className="ms_rcnt_box_text">
              <h3><a href="#"><font style={{fontSize:'10px'}}>{singledataart.artist_name}</font></a></h3>
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

          </blockquote>

        </div>
        
      </div>
    </div>
  </div>
</div> 

  <div className="album_inner_list">
  <div className="album_feature" style={{paddingTop:'20px'}}>
        <a href="#" className="album_date"><font style={{fontSize:'20px'}}>Similar song :</font></a>
  </div>
    <div className="album_list_wrapper">
      <ul className="album_list_name">
        <li>#</li>
        <li>Song Thumbnail</li>
        <li>Song Title</li>
        <li className="text-center">Rating</li>
        <li className="text-center">Add To Favourites</li>
        <li className="text-center">More</li>
      </ul>
      {
        data.allData.map((singledata) => (
      <ul key={singledata.id}>
        <li>
        <Link href={"/songs/" + singledata.id} >
            <a ><span className="play_no">{sl+1}</span><span className="play_hover" /></a>
        </Link>    
        </li>
        <li>
        <Link href={"/songs/" + singledata.id} >
            <a><img src={ process.env.siteurl + "/songimages/" + singledata.song_thumbnail } className="img-fluid" width="50px" /></a>
        </Link>    
        </li>
        <li>
        <Link href={"/songs/" + singledata.id} >
            <a >{singledata.song_name}</a>
        </Link>    
        </li>
        <li className="text-center"><a >{singledata.song_rating}</a></li>
        <li className="text-center"><a ><span className="ms_icon1 ms_fav_icon" /></a></li>
        <li className="text-center ms_more_icon"><a href="#"><span className="ms_icon1 ms_active_icon" /></a>
          <ul className="more_option">
            <li><a href="#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
            <li><a href="#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
          </ul>
        </li>
      </ul>
        ))
     }
      
    </div>
  </div>
</div>

            
        </>
    )
}

export async function getServerSideProps(context) {
    const pid = context.params.id
    const res = await fetch(process.env.siteurl+`/api/front-song-view/`+pid)
    const data = await res.json()
    return { props: { data } }
  }

export default Songview