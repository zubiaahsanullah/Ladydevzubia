export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi folder hide karna ho
    },
    sitemap: 'https://ladydevzubia.com/sitemap.xml', // Apni domain ke saath sitemap ka link
  }
}