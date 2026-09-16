// app/self-funded/page.tsx
'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SelfFundedAdmission from '../components/admission/SelfFundedAdmission'

export default function SelfFundedPage() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar activePage="self-funded" />
      <div className="mt-16">
        <SelfFundedAdmission />
      </div>
      <Footer />
    </div>
  )
}