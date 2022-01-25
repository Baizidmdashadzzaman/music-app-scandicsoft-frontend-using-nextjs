import Head from 'next/head'
import Link from 'next/link'
function Category({data}) {
  
  return (
      <>
      <Head>
        <title>Musicapp : Category</title>
      </Head>
      
      <div className="ms_top_artist">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="ms_heading">
          <h1>Music category list</h1>
        </div>
      </div>
      {
        data.allData.map((singledata) => (

          <div className="col-lg-2 col-md-6">
          <Link href={"/category/" + singledata.id} >
            <a>
            <div className="ms_rcnt_box marger_bottom30">
            <div className="ms_rcnt_box_img">
               <img src={ process.env.siteurl + "/categoryimages/" + singledata.category_logo } className="img-fluid"/>
                <div className="ms_main_overlay">
                <div className="ms_box_overlay" />
                <div className="ms_play_icon">
                  <img src="/images/svg/play.svg" alt />
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
      
      </>


  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.siteurl+`/api/front-category`)
  const data = await res.json()
  return { props: { data } }
}


export default Category