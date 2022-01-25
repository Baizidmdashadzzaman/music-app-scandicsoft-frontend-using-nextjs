import Document, { Html, Head, Main, NextScript } from 'next/document'
import React ,{ useEffect } from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
            <link rel="stylesheet" type="text/css" href="/css/fonts.css" />
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
            <link rel="stylesheet" type="text/css" href="/js/plugins/swiper/css/swiper.min.css" />
            <link rel="stylesheet" type="text/css" href="/js/plugins/nice_select/nice-select.css" />
            <link rel="stylesheet" type="text/css" href="/js/plugins/player/volume.css" />
            <link rel="stylesheet" type="text/css" href="/js/plugins/scroll/jquery.mCustomScrollbar.css" />
            <link rel="stylesheet" type="text/css" href="/css/style.css" />
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" href="/css/asad.css" />
        </Head >
        <body>
          <div class="ms_loader">
		         <div class="wrap">
		           <img src="/images/loader.gif" alt="" />
		         </div>
	        </div>
          <Main />
          <NextScript />
            <script type="text/javascript" src="/js/jquery.js"></script>
            <script type="text/javascript" src="/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="/js/plugins/swiper/js/swiper.min.js"></script>
            <script type="text/javascript" src="/js/plugins/player/jplayer.playlist.min.js"></script>
            <script type="text/javascript" src="/js/plugins/player/jquery.jplayer.min.js"></script>
            <script type="text/javascript" src="/js/plugins/player/audio-player.js"></script>
            <script type="text/javascript" src="/js/plugins/player/volume.js"></script>
            <script type="text/javascript" src="/js/plugins/nice_select/jquery.nice-select.min.js"></script>
	          <script type="text/javascript" src="/js/plugins/scroll/jquery.mCustomScrollbar.js"></script>
            <script type="text/javascript" src="/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument