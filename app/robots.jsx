export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi folder hide karna ho
    },
    sitemap: 'https://ladydevzubia.vercel.app/sitemap.xml', // Apni domain ke saath sitemap ka link
  }
}
