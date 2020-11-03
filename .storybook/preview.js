import * as React from 'react'
import { linkTo } from '@storybook/addon-links'
import { addDecorator } from '@storybook/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'

// Allow the use of getConfig() in Storybook stories
import { setConfig } from 'next/config'
setConfig({
  publicRuntimeConfig: {
    featureEnabled: true,
  },
})

// Wrap the Next.js's RouterContext around every story,
// based on the issue: https://github.com/vercel/next.js/issues/15543
addDecorator((storyFn) => (
  <RouterContext.Provider
    value={{
      pathname: '/',
      basePath: '',
      push: (url, as) => {
        if (as) linkTo('Routes', as !== '/' ? startCase(as) : 'Index')()
        return Promise.resolve(true)
      },
      replace: (url, as) => {
        if (as) linkTo('Routes', as !== '/' ? startCase(as) : 'Index')()
        return Promise.resolve(true)
      },
      reload: () => {},
      prefetch: () => Promise.resolve(true),
    }}
  >
    {storyFn()}
  </RouterContext.Provider>
))
