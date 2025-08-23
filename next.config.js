module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wxnuttrlaeokfjgucybe.supabase.co',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    taint: true,
  },
};
