import type { Metadata } from 'next'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Estúdio Ametista - Pilates, Yoga e Bem-estar em Joinville',
  description: 'Transforme seu corpo e mente com Pilates, Yoga e Pilates Suspenso. Aulas personalizadas em Joinville-SC. Agende sua aula experimental grátis!',
  keywords: 'pilates joinville, yoga joinville, pilates suspenso, estúdio ametista, bem-estar, saúde física',
  authors: [{ name: 'Estúdio Ametista' }],
  robots: 'index, follow'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}