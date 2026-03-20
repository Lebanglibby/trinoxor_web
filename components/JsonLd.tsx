const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${BASE_URL}/#organization`,
    name: 'Trinoxor Integrated Technologies',
    alternateName: 'Trinoxor',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logos/final_logo.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/images/logos/final_logo.png`,
    description:
      'Trinoxor Integrated Technologies is a professional IT and web development company in Gaborone, Botswana. We build websites, mobile apps, and provide cloud hosting and IT support.',
    slogan: 'Secure · Scalable · Seamless',
    foundingDate: '2019',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 5 },
    priceRange: 'P400 – P15,000+',
    currenciesAccepted: 'BWP',
    paymentAccepted: 'Cash, Bank Transfer, Mobile Money',
    openingHours: 'Mo-Fr 09:00-18:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Mall',
      addressLocality: 'Gaborone',
      addressRegion: 'South-East District',
      addressCountry: 'BW',
      postalCode: '0000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -24.6541,
      longitude: 25.9087,
    },
    areaServed: [
      { '@type': 'City', name: 'Gaborone' },
      { '@type': 'Country', name: 'Botswana' },
    ],
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
      {
        '@type': 'ContactPoint',
        telephone: '+267-78080590',
        contactType: 'sales',
        email: 'trinoxorbw@gmail.com',
      },
    ],
    sameAs: [
      'https://web.facebook.com/profile.php?id=61585999035434',
      'https://www.linkedin.com/company/trinoxor-integrated-technologies',
      'https://www.instagram.com/trinoxor/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Web Design & Development',
          description: 'Modern, responsive websites and web applications starting from P1,200.',
          price: '1200',
          priceCurrency: 'BWP',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Development',
            description: 'Professional website design and development for businesses in Botswana.',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
        {
          '@type': 'Offer',
          name: 'Web Hosting & Cloud Services',
          description: 'Reliable hosting with 99.9% uptime guarantee from P600/year.',
          price: '600',
          priceCurrency: 'BWP',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Hosting & Cloud Services',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
        {
          '@type': 'Offer',
          name: 'Mobile Application Development',
          description: 'Android and cross-platform mobile apps from P5,000.',
          price: '5000',
          priceCurrency: 'BWP',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Application Development',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
        {
          '@type': 'Offer',
          name: 'IT Support & Technical Services',
          description: 'Comprehensive IT support and maintenance from P400/hour.',
          price: '400',
          priceCurrency: 'BWP',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Support & Technical Services',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '40',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Trinoxor Integrated Technologies',
    alternateName: 'Trinoxor',
    url: BASE_URL,
    description:
      'Trinoxor Integrated Technologies — web development, mobile apps, cloud hosting & IT support in Botswana.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-BW',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in Botswana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trinoxor Integrated Technologies offers website design starting from P1,200 for a basic business site, P2,500 for a professional site, and custom pricing for enterprise solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does mobile app development cost in Botswana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile app development at Trinoxor starts from P5,000 for a basic Android app, P12,000 for an advanced cross-platform app, and custom pricing for enterprise solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trinoxor offer IT support in Gaborone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Trinoxor Integrated Technologies provides on-site and remote IT support in Gaborone and across Botswana, starting from P400/hour or P1,500/month for a monthly plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A basic website takes 1–2 weeks, a professional site 2–4 weeks, and complex web applications 4–12 weeks depending on requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trinoxor offer web hosting in Botswana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Trinoxor offers reliable web hosting starting from P600/year, including SSL certificates, email hosting, daily backups, and 99.9% uptime guarantee.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
