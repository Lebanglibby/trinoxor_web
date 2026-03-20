export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trinoxor',
    url: 'https://www.trinoxor.co.bw',
    logo: 'https://www.trinoxor.co.bw/images/logos/final_logo.png',
    description:
      'Trinoxor is a technology solutions company in Botswana offering web development, mobile apps, cloud hosting, and IT support.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Gaborone, Botswana',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Mall',
      addressLocality: 'Gaborone',
      addressCountry: 'BW',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+267-78080590',
      contactType: 'customer service',
      email: 'trinoxorbw@gmail.com',
      availableLanguage: 'English',
      hoursAvailable: 'Mo-Fr 09:00-18:00',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development', description: 'Modern, responsive websites and web applications.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Hosting & Cloud Services', description: 'Reliable hosting with 99.9% uptime guarantee.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Application Development', description: 'Android and cross-platform mobile apps.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support & Technical Services', description: 'Comprehensive IT support and technical consultation.' } },
      ],
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trinoxor',
    url: 'https://www.trinoxor.co.bw',
    description: 'Technology solutions company in Botswana — web development, mobile apps, hosting & IT support.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.trinoxor.co.bw/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
