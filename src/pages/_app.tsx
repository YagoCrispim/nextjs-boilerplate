import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS - Boilerplate</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta
          name='description'
          content='Aprenda a criar um app completo com Next.js'
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
