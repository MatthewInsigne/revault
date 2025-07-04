import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import '../lib/polyfill'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['700'], // ✅ or multiple: ['400', '700']
  variable: '--font-ibm'
});

export const metadata = {
  title: "ReVault",
  description: "A version-controlled document repository",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} light`} suppressHydrationWarning>
      <body
          className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
