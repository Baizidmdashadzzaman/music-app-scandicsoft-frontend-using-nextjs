import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta name="description" content="Music" />
            <meta name="keywords" content="Music" />
            <meta name="author" content="baizid.md.ashadzzaman@gmail.com" />
            <meta name="MobileOptimized" content={320} />
            {/*Start Style */}
            <link rel="stylesheet" type="text/css" href="css/fonts.css" />
            <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
            <link rel="stylesheet" type="text/css" href="js/plugins/swiper/css/swiper.min.css" />
            <link rel="stylesheet" type="text/css" href="js/plugins/nice_select/nice-select.css" />
            <link rel="stylesheet" type="text/css" href="js/plugins/player/volume.css" />
            <link rel="stylesheet" type="text/css" href="js/plugins/scroll/jquery.mCustomScrollbar.css" />
            <link rel="stylesheet" type="text/css" href="css/style.css" />
            {/* Favicon Link */}
            <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        </Head >
        <body>
          <div class="ms_loader">
		    <div class="wrap">
		      <img src="images/loader.gif" alt="" />
		    </div>
	      </div>
          <Main />
          <NextScript />
            <script type="text/javascript" src="js/jquery.js"></script>
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script type="text/javascript" src="js/plugins/swiper/js/swiper.min.js"></script>
            <script type="text/javascript" src="js/plugins/player/jplayer.playlist.min.js"></script>
            <script type="text/javascript" src="js/plugins/player/jquery.jplayer.min.js"></script>
            <script type="text/javascript" src="js/plugins/player/audio-player.js"></script>
            <script type="text/javascript" src="js/plugins/player/volume.js"></script>
            <script type="text/javascript" src="js/plugins/nice_select/jquery.nice-select.min.js"></script>
	        <script type="text/javascript" src="js/plugins/scroll/jquery.mCustomScrollbar.js"></script>
            <script type="text/javascript" src="js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument