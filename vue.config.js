// module.exports = {
//     publicPath: '/e-wallet-proj/'
//   }


  module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/e-wallet-proj/'
      : '/'
  }


