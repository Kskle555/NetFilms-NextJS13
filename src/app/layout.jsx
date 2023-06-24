import '../styles/reset.css'
import '../styles/global.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer'
const interFontFamily = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}