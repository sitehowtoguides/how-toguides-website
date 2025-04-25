import '@/app/globals.css';
import '@/app/mobile.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadGenerationProvider } from '@/components/lead-generation/LeadGenerationProvider';
import Analytics from '@/components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Analytics />
      </head>
      <body>
        <LeadGenerationProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </LeadGenerationProvider>
      </body>
    </html>
  );
}
