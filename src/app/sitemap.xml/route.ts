export async function GET(): Promise<Response> {
    const baseUrl = "https://weflex.am";
  
    const staticRoutes = [
      "",
      "about",
      "contact",
      "growth-plan",
      "pricing",
      "services",
    ];
  
    const dynamicServices = [
      { slug: "pizza-ayo", updatedAt: "2025-06-30" },
      { slug: "automatr", updatedAt: "2025-06-28" },
      { slug: "gazar", updatedAt: "2025-06-30" },
      { slug: "creator-deck", updatedAt: "2025-06-30" },
    ];
  
    const staticUrls = staticRoutes.map((route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `);
  
    const serviceUrls = dynamicServices.map((service) => `
      <url>
        <loc>${baseUrl}/${service.slug}</loc>
        <lastmod>${service.updatedAt}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `);
  
    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${[...staticUrls, ...serviceUrls].join("")}
      </urlset>
    `.trim();
  
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  