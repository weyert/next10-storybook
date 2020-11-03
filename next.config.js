/* eslint-disable no-console */

module.exports = {
  distDir: 'build',
  poweredByHeader: false,

  //
  images: {
    deviceSizes: [100, 320, 420, 768, 1024, 1200],
    iconSizes: [16, 32, 48],
    domains: ['images.unsplash.com'],
    path: '/_next/image',
    loader: 'default',
  },

  // Attempt to inject polyfills as part of the main polyfills file that is bundled with the Next.js
  webpack: (config, { dev: isDevelopmentMode }) => {
    // Attempt to ignore storybook files when doing a production build,
    // see also: https://github.com/vercel/next.js/issues/1914
    if (!isDevelopmentMode) {
      config.module.rules.push({
        test: /\.stories.(js|tsx?)/,
        loader: 'ignore-loader',
      })
    }

    return config
  },
}
