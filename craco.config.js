const path = require('path');

// craco.config.js
module.exports = {
  webpack: {
    alias: {
      querystring: path.resolve(__dirname, 'node_modules/querystring-es3'),
    }, 
  },
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}