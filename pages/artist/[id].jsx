import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Artistview({data}) {
    const router = useRouter()
    const pid = router.query.id
    const sl = 0;
    return (
        <>
        <Head>
           <title>Musicapp : Single Artist</title>
        </Head>

<div style={{paddingTop:'5px'}} >
  <div className="album_single_data">
    <div className="album_single_img">
      <img src={ process.env.siteurl + "/artistimages/" + data.singledata.artist_logo } alt className="img-fluid" />
    </div>
    <div className="album_single_text">
      <h2>Name : {data.singledata.artist_name}</h2>
      <p className="singer_name">Artist code : {data.singledata.artist_code}</p>
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
  <div className="album_inner_list">
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
      <ul>
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
    const res = await fetch(process.env.siteurl+`/api/front-artist-view/`+pid)
    const data = await res.json()
    return { props: { data } }
  }

export default Artistview