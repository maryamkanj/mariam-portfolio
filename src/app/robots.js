export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mariam-portfolio-zeta.vercel.app';
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
