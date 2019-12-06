import React from 'react';
import App from 'next/app';
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <>
      <Head>
        <meta charSet="utf-8"/>

        <title>Ben Aubin</title>
        
        <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <script id="hs-script-loader" src="https://js.hs-scripts.com/6238237.js" type="text/javascript" async/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75923316-5"></script>
        <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-75923316-5');
        `}}/>

      </Head>
      <Component {...pageProps} />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Source+Code+Pro&display=swap');

        body {
          background: #28536B;
          font-family: "Josefin Sans", sans-serif;
        }


        a:visited {
          color: #15A6C6
        }

        a {
          color: #15A6C6;
        }

        code {
          font-family: "Source Code Pro", monospace;
        }
      `}</style>
    </>
  }
}

export default MyApp