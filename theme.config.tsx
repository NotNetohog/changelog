import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Bornlogic</span>,
  project: {
    link: 'https://github.com/NotNetohog/changelog',
  },
  docsRepositoryBase: 'https://github.com/NotNetohog/changelog',
  footer: {
    text: 'Bornlogic Changelog',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  head: (
    <>
      <meta property="og:description" content="Bornlogic Changelog" />
    </>
  )
}

export default config
