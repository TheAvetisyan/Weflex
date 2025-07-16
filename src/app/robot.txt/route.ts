export async function GET(): Promise<Response> {
  return new Response(
    `User-agent: *
  Allow: /
  Sitemap: https://weflex.am/sitemap.xml
  `,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
