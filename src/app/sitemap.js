export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mariam-portfolio-zeta.vercel.app'; // Replace with actual domain if different

    const routes = [
        '',
        '/about',
        '/projects',
        '/contact',
        '/resume',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
