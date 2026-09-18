import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import NavBar from './NavBar.jsx'
import Banner from './Banner.jsx'
import Profile from './Profile.jsx'
import Gallery from './Gallery.jsx'
import Articles from './Articles.jsx'
import Tutorials from './Tutorials.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <title>Home Page</title>
    <NavBar />
    <Banner />
    <Profile />
    <Gallery />
    <Articles />
    <Tutorials />
    <Footer />
  </StrictMode>
)
