module.exports = {
    images: {
        domains: ['i.dummyjson.com'],
      },
      async rewrites() {
        return [
          {
            source: '/:path*',
            destination: '/',
          },
        ]
      },
}
