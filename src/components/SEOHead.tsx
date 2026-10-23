import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/assets/aistudio/LA Prestige Auto Logo Optimized.png',
  ogType = 'website',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const originalTitle = document.title;
    document.title = title;

    // 2. Helper to set/update meta tag
    const setMeta = (nameOrProperty: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameOrProperty, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set/update link tag
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Update Standard Meta
    setMeta('name', 'description', description);

    // Update OpenGraph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMeta('property', 'og:image', fullImageUrl);
    }
    const currentUrl = canonicalUrl || window.location.href;
    setMeta('property', 'og:url', currentUrl);
    setLink('canonical', currentUrl);

    // Update Twitter Cards
    setMeta('property', 'twitter:title', title);
    setMeta('property', 'twitter:description', description);
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMeta('property', 'twitter:image', fullImageUrl);
    }

    // 4. Inject Dynamic Schema.org JSON-LD
    let scriptElement = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'dynamic-page-schema';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      const dynamicSchema = document.getElementById('dynamic-page-schema');
      if (dynamicSchema) dynamicSchema.remove();
    };
  }, [title, description, canonicalUrl, ogImage, ogType, schema]);

  return null;
};
