
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/prajwalj27/prajwalj27.github.io/notes-community-classroom/' : '',
}