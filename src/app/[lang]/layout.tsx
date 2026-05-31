import '../globals.css';
import { i18nUI } from '@/lib/layout.shared';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';
import { Noto_Sans_JP, Space_Mono } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Kawaii Store API',
  description: 'API学習を楽しくする日本語のSample Store API',
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html
      lang={lang}
      className={`${notoSansJP.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <RootProvider i18n={i18nProvider(i18nUI, lang)}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
