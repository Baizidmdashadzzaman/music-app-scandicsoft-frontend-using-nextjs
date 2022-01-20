import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Link from 'next/link';
function Search({siteinfo ,data}) {
  const router = useRouter()
  const pid = router.query.id
  return (
     <>
     <Head>
        <title>{siteinfo.site_name} : Search ({pid})</title>
      </Head>
<div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Search results ({data.allData.length})</h1>
        </div>
      </div>
      
      {
        data.allData.map((singledata) => (
      <div className="col-lg-2 col-md-6">
        <Link href={"/songs/" + singledata.id} >
        <a>     
        <div className="ms_rcnt_box marger_bottom30">
          <div className="ms_rcnt_box_img">
          <img src={ process.env.siteurl + "/songimages/" + singledata.song_thumbnail } className="img-fluid"/>
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
            <h3><a >{singledata.song_name}</a></h3>
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




     </>

  );
}

export async function getServerSideProps(context) {
  const pid = context.params.id
  const res = await fetch(process.env.siteurl+`/api/front-song-search/`+pid)
  const data = await res.json()
  return { props: { data } }
}

export default Search;

