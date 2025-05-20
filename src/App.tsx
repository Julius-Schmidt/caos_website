import { Routes, Route } from 'react-router-dom'
import PlatformSection from './components/PlatformSection'
import Footer from './components/Footer'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Impressum from './pages/Impressum'
import IdeaSection from './components/ideaSection'
import SupportSection from './components/SupportSection'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="pt-24 bg-white text-black">
                <PlatformSection />

                <hr className="w-[80%] mx-auto" />

                <IdeaSection/>

                <hr className="w-[80%] mx-auto" />

                <SupportSection/>
                <hr className="w-[80%] mx-auto" />
              </div>
            </>
          }
        />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

      {/* move Footer outside the <Routes> if you want it on every page */}
      <Footer />
    </div>
  )
}

