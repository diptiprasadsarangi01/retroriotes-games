import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Games from './components/Games.jsx'
import Testimonial from './components/Testimonial.jsx'
import ContactPage from './components/ContactPage.jsx'
import GamingFooter from './components/GamingFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
   <About />
   <Games />
   <Testimonial/>
   <ContactPage/>
   <GamingFooter/>
  </StrictMode>,
)
