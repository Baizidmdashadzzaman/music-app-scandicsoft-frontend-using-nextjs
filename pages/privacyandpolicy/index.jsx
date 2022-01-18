import Head from 'next/head'

export default function Privacyandpolicy({siteinfo}) {
  return (
      <>
      <Head>
        <title>Musicapp : Privacy and policy</title>
      </Head>
      
<div className="ms_blog_single_wrapper" style={{paddingTop:'5px'}} >
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <div className="ms_blog_single">
        <div className="blog_single_img">
        <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_privacyandpolicy_banner } 
                className="img-fluid"  />
        </div>
        <div className="blog_single_content">
          <h3 className="ms_blog_title">Privacy and policy</h3>
          <div className="ms_post_meta">
           
          </div>
          <p className="textviewashtm">
               {siteinfo.site_privacyandpolicy}
          </p>
          
          <div className="ms_blog_tag foo_sharing">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

      
      </>


  )
}