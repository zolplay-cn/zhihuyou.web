module.exports = {
  async rewrites() {
    return [
      { source: '/api/http/:path*', destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*` }
    ]
  },
}
