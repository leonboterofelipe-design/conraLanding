import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Conra FBA | Amazon Wholesale con Conrado Loaldi',
  description: 'Mentoría especializada en Amazon Wholesale sin intermediarios. Desarrollado por Loaldi Consulting Group LLC',
  keywords: 'Amazon Wholesale, FBA, mentoría, Conrado Loaldi, negocio online',
  authors: [{ name: 'Conra FBA' }],
  icons: {
    icon: 'favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Conra FBA | Amazon Wholesale con Conrado Loaldi',
    description: 'Mentoría especializada en Amazon Wholesale sin intermediarios. Desarrollado por Loaldi Consulting Group LLC',
    url: 'https://conrafba.com',
    siteName: 'Conra FBA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-black text-zinc-100 antialiased selection:bg-brand-500 selection:text-white`}>
        <Navbar />
        <main className="min-h-screen bg-black pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}