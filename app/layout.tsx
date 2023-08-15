import './globals.css'
import type { Metadata } from 'next'
import { Instrument_Serif, Xanh_Mono } from 'next/font/google'

// adding two lovely font from Google Fonts
// https://fonts.google.com/specimen/Instrument+Serif
// https://fonts.google.com/specimen/Xanh+Mono
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const mono = Xanh_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
})

// this adds metadata to the Next.js pages
// you can see all the options over at
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: 'Learn To Code Now',
  description: 'A demo project for the SuperHi ChatGPT workshop',
  authors: [{ name: 'SuperHi', url: 'https://superhi.com' }],
  openGraph: {
    title: 'Learn To Code Now',
    description: 'A demo project for the SuperHi ChatGPT workshop',
    url: 'https://gpt-workshop-demo.preview.superhi.com/',
    siteName: 'Learn To Code Now',
    images: [
      {
        url: 'https://gpt-workshop-demo.preview.superhi.com/social.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn To Code Now',
    description: 'A demo project for the SuperHi ChatGPT workshop',
    creator: '@superhi_',
    images: ['https://gpt-workshop-demo.preview.superhi.com/social.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  themeColor: '#089755',
}

// our general theme
// all the head tags are given to us by Next.js's build system
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={serif.variable + ' ' + mono.variable}>
      <body>
        <main>
          <header>
            <p>
              <span>Learn To Code Now</span> &ndash; A book by SuperHi
            </p>
            <nav>
              <a href="#">&larr; Previous</a>
              <a href="#">Chapters</a>
              <a href="#">About</a>
              <a href="#">Next page &rarr;</a>
            </nav>
          </header>

          {children}
        </main>
      </body>
    </html>
  )
}
