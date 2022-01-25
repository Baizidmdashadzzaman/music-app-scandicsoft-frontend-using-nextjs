import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Albumview({data}) {
    const router = useRouter()
    const pid = router.query.id
    const sl = 0;
    return (
        <>
        <Head>
           <title>Musicapp : Single Album</title>
        </Head>

<div style={{paddingTop:'5px'}} >
  <div className="album_single_data">
    <div className="album_single_img">
      <img src={ process.env.siteurl + "/albumimages/" + data.singledata.album_banner } alt className="img-fluid" />
    </div>
    <div className="album_single_text">
      <h2>Album : {data.singledata.album_name}</h2>
      <p className="singer_name">Rating : {data.singledata.album_rating}</p>
      <div className="album_feature">
        <a href="#" className="album_date">Number of songs : {data.singledata.album_numberof_songs} song</a>
        <a href="#" className="album_date">Released : {data.singledata.album_release_date} </a>
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
    const res = await fetch(process.env.siteurl+`/api/front-album-view/`+pid)
    const data = await res.json()
    return { props: { data } }
  }

export default Albumview