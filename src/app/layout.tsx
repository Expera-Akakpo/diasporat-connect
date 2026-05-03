import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'DiasporaConnect - Transfert blockchain',
  description: 'Envoyez de l\'argent au Bénin à 0.2% de frais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-black">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
