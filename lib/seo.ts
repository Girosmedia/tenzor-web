import type { PostFrontmatter } from "./blog";

export const SITE_URL = "https://tenzorlabs.cl";

// FALTA: reemplazar por una imagen OG dedicada al blog (WebP) cuando exista;
// por ahora los posts sin `image` propia caen en el OG general del sitio.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;

export function postUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`;
}

export function postImage(frontmatter: PostFrontmatter) {
  return frontmatter.image ? `${SITE_URL}${frontmatter.image}` : DEFAULT_OG_IMAGE;
}

export function buildArticleJsonLd(frontmatter: PostFrontmatter) {
  const url = postUrl(frontmatter.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: postImage(frontmatter),
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Person",
      name: "Pavel Chávez",
    },
    publisher: {
      "@type": "Organization",
      name: "Tenzor Labs",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
