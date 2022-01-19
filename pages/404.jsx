import Head from 'next/head'
import Link from 'next/link'
function Notfound({siteinfo }) {

  return (
    <>
      <Head>
        <title>Musicapp : 404</title>
      </Head>
        <br/>
          <div className="ms-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="ms_banner_img " style={{paddingTop:'100px'}}>
                    <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_logo_second } 
                    className="img-fluid" style={{width:'70%'}} />
                  </div>
                  <div className="ms_banner_text">
                    <h1>404</h1>
                    <h1 className="ms_color">Opss , nothing found!</h1>
                    <p>Sorry somthing went wrong or you are here by mistake. Please refresh the page or visit differnt pages.</p>
                    <div className="ms_banner_btn">
                      <Link href="/" ><a className="ms_btn">Back to home</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          


    
    </>
  )
}




export default Notfound
