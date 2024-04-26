import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

const urbanist = Urbanist({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cloud Ai Dashboard',
  description: 'Cloud Ai Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.className} `}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
