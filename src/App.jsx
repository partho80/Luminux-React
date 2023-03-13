
import Footer from '../src/component/Footer/Footer'
import Header from '../src/component/Header/Header'
import AboutUs from './pages/AboutUs'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogPage from './pages/BlogPage'
import ContactUsPage from './pages/ContactUsPage'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Home_2 from './pages/Home_2'
import Service from './pages/ServicePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <div>
      
      <Router>
        <Header /> 
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home_2' element={<Home_2 />} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/Blog' element={<BlogPage />} />
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/ContactUs' element={<ContactUsPage />} />
          <Route exact path='/BlogDetails' element={<BlogDetailPage />} />
          <Route exact path='/Error' element={<ErrorPage />} />
          

        </Routes>
        <Footer />
      </Router>
     
    </div>
  )
}

export default App
