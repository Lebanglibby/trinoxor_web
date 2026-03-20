const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: 'Trinoxor',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logos/final_logo.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/images/logos/final_logo.png`,
    description:
      'Trinoxor is a technology solutions company in Botswana offering web design & development, mobile app development, cloud hosting, and IT support.',
    priceRange: 'P400 - P15,000+',
    currenciesAccepted: 'BWP',
    paymentAccepted: 'Cash, Bank Transfer, Mobile Money',
    openingHours: 'Mo-Fr 09:00-18:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Mall',
      addressLocality: 'Gaborone',
      addressRegion: 'South-East',
      addressCountry: 'BW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -24.6541,
      longitude: 25.9087,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+267-78080590',
        contactType: 'customer service',
        email: 'trinoxorbw@gmail.com',
        availableLanguage: ['English', 'Setswana'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    ],
    sameAs: [
      'https://www.facebook.com/trinoxor',
      'https://www.linkedin.com/company/trinoxor',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Web Design & Development',
          description: 'Modern, responsive websites and web applications from P1,200.',
          price: '1200',
          priceCurrency: 'BWP',
          itemOffered: { '@type': 'Service', name: 'Web Design & Development' },
        },
        {
          '@type': 'Offer',
          name: 'Web Hosting & Cloud Services',
          description: 'Reliable hosting with 99.9% uptime guarantee from P600/year.',
          price: '600',
          priceCurrency: 'BWP',
          itemOffered: { '@type': 'Service', name: 'Web Hosting & Cloud Services' },
        },
        {
          '@type': 'Offer',
          name: 'Mobile Application Development',
          description: 'Android and cross-platform mobile apps from P5,000.',
          price: '5000',
          priceCurrency: 'BWP',
          itemOffered: { '@type': 'Service', name: 'Mobile Application Development' },
        },
        {
          '@type': 'Offer',
          name: 'IT Support & Technical Services',
          description: 'Comprehensive IT support from P400/hour.',
          price: '400',
          priceCurrency: 'BWP',
          itemOffered: { '@type': 'Service', name: 'IT Support & Technical Services' },
        },
      ],
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Trinoxor',
    url: BASE_URL,
    description:
      'Technology solutions company in Botswana — web development, mobile apps, hosting & IT support.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-BW',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services',  item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: 'Portfolio', item: `${BASE_URL}/portfolio` },
      { '@type': 'ListItem', position: 4, name: 'About',     item: `${BASE_URL}/about` },
      { '@type': 'ListItem', position: 5, name: 'Contact',   item: `${BASE_URL}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
