import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface MainPageProps {
  children: React.ReactNode
}

export default function MainPage({ children }: MainPageProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
