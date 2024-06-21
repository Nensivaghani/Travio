import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Header}  from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Destinations from './components/Pages/Destinations';
import Destinationdetail from './components/Pages/Destinationdetail';
import AboutUs from './components/Pages/AboutUs';
import Contact from './components/Pages/Contact';
import TourListspages from './components/Pages/TourListpages';
import TourDetailsPage from './components/Pages/TourDetailsPage';
import TourGuidepages from './components/Pages/TourGuidepages';
import BlogDetailsPages from './components/Pages/BlogDetailsPages';
import BlogListPages from './components/Pages/BlogListPages';
import GalleryPages from './components/Pages/GalleryPages';
import BookingProcressPages from './components/Pages/BookingprocreessPages';
import TourDealsPages from './components/Pages/TourDealsPages';
import ErrorPages from './components/Pages/ErrorPages';
import FaqPages from './components/Pages/FaqPages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>

 <BrowserRouter>
 <Header/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destinations'element={<Destinations/>}/>
    <Route path='/destinationsdetail'element={<Destinationdetail/>}/>
    <Route path='/about'element={<AboutUs/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/tourguide'element={<TourGuidepages />}/>
    <Route path='/tourelist'element={<TourListspages/>}/>
    <Route path='/touredetails'element={<TourDetailsPage/>}/>
    <Route path='/touredeals'element={<TourDealsPages/>}/>
    <Route path='/blogdetails'element={<BlogDetailsPages/>}/>
   <Route path='/bloglist'element={<BlogListPages/>}/>
   <Route path='/gallery'element={<GalleryPages/>}/>
   <Route path='/bookingprocress'element={<BookingProcressPages/>}/>
   <Route path='/error'element={<ErrorPages/>}/>
   <Route path='/faq'element={<FaqPages/>}/>
 
 

 </Routes>
 <Footer/>
 </BrowserRouter>   
 
 
 
 
 </>
);


