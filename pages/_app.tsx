import App from 'next/app'
import React from 'react'

class MyApp extends App<{}> {
  render() {
    const {
        Component,
        pageProps,
    } = this.props;

    return <Component {...pageProps} />
  }
}
  
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}
  
  export default MyApp