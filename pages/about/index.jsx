import Head from 'next/head'

export default function About() {
  return (
      <>
      <Head>
        <title>Musicapp : Aboutus</title>
      </Head>
      
      <div className="ms_blog_single_wrapper">
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <div className="ms_blog_single">
        <div className="blog_single_img">
          <img src="images/blog/blog_single.jpg" alt className="img-fluid" />
        </div>
        <div className="blog_single_content">
          <h3 className="ms_blog_title">Dream Your Moments</h3>
          <div className="ms_post_meta">
            <ul>
              <li>May 05,2018 / </li>
              <li>12 likes /  </li>
              <li>8 comments  </li>
            </ul>
          </div>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <blockquote>
            Music is composed and performed for many purposes, ranging from aesthetic pleasure, religious or ceremonial purposes, or as an entertainment product for the marketplace.
          </blockquote>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
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