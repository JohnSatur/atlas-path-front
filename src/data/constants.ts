import ogImg from '@images/logo.png';

export const SITE = {
  title: 'Atlas Path',
  tagline: 'Especialistas en la digitalización de tu negocio',
  description: 'Somos una empresa xalapeña especializada en llevar tu negocio al ámbito digital. Diseño web, desarrollo de aplicaciones, marketing digital y de redes sociales, fotografía, videoproducción, animación digital y mucho más.',
  descriptionShort: 'Somos una empresa xalapeña especializada en llevar tu negocio al ámbito digital.',
  url: 'https://atlas-path.com',
  author: 'Juan Carlos Marín Chávez',
};

export const SEO = {
  title: SITE.title,
  desciption: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    inLanguage: 'es-MX',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
  }
}

export const OG = {
  locale: 'es_MX',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: '',
  image: ogImg,
};
