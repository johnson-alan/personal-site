import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

import Header from './Header'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Lato, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
`

const Layout = styled.div`
  margin: 0;
  text-align: center;
  overflow-x: hidden;
  font-weight: 300;
  letter-spacing: 0.02rem;
  display: block;
  user-select: none;
`

export default ({ children }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="theme-color" content="#ecebf9" />
      <meta
        name="description"
        content="Allen Johnson is a Brooklyn-based developer building modern, React-based web applications."
      />
      <meta property="og:title" content="Allen Johnson - Web Developer"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.allenhj.com"/>
      <meta property="og:image" content="/prof-round.png"/>
      <meta property="og:description" content="Allen Johnson is a Brooklyn-based developer building modern, React-based web applications."></meta>
      <title>Allen Johnson - Web Developer</title>
      <link rel="canonical" href="http://allenhj.com" />
    </Helmet>
    <GlobalStyles />
    <Header />
    {children}
  </Layout>
)
