import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.unipathsdn.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: '2026-09-29',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: '2026-09-29',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/egypt`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/china`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/scholarships`,
      lastModified: '2026-09-29',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/self-funded`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: '2026-09-29',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/special-admission`,
      lastModified: '2026-09-29',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2026-09-29',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2026-09-29',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
