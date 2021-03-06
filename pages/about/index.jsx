import Head from 'next/head'

export default function About({siteinfo}) {
  
  return (
      <>
      <Head>
        <title>Musicapp : Aboutus</title>
      </Head>
      
  <div className="ms_blog_single_wrapper" style={{paddingTop:'5px'}}>
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <div className="ms_blog_single">
        <div className="blog_single_img">
           <img src={ "http://127.0.0.1:8000/settingfolder/" + siteinfo.site_aboutus_banner } 
                className="img-fluid"  />
        </div>
        <div className="blog_single_content">
          <h3 className="ms_blog_title">About us</h3>
          <div className="ms_post_meta">
           
          </div>
          <blockquote>
            <pre className="textviewashtm precustom" style={{color:'white'}}>
               {siteinfo.site_description}
            </pre>
          </blockquote>
            <p className='blog_single_img'>
            <iframe src={siteinfo.site_map} allowfullscreen="allowfullscreen"
             width="100%" height="450" frameborder="2"></iframe>
            </p>
          <div className="ms_blog_tag foo_sharing">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-youtube" /></a></li>
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