module.exports = {
    images: {
        domains: ['i.dummyjson.com'],
      },
      async rewrites() {
        return [
          {
            source: '/aboutUs.html',
            destination: '/aboutUs.html',
          },
          {
            source: '/cart.html',
            destination: '/cart.html',
          },
          {
            source: '/contactUs.html',
            destination: '/contactUs.html',
          },
          {
            source: '/index.html',
            destination: '/index.html',
          },
          {
            source: '/login.html',
            destination: '/login.html',
          },
          {
            source: '/products.html',
            destination: '/products.html',
          },
        ]
      },
}
