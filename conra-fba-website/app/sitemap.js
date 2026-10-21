const siteUrl = 'https://conrafba.com';

const routes = [
  '/',
  '/resultados',
  '/casos-de-exito',
  '/conra-fba/crea',
  '/conra-fba/historia',
  '/conra-fba/logros',
  '/conra-fba/quien-soy',
  '/conra-fba/rese',
  '/Ada/a-quien-ayudamos',
  '/Ada/lo-que-hacemos',
  '/privacidad',
  '/terminos-de-servicio',
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
