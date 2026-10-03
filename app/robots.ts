import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin-login/',
        '/cms/',
        '/hub/',
        '/crm/',
        '/cashbox/',
        '/api/',
      ],
    },
    sitemap: 'https://www.unipathsdn.com/sitemap.xml',
  }
}
