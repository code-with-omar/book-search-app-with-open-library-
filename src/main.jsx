import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import BookList from './components/BookList/BookList.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/book" element={<BookList />} />
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>
  </BrowserRouter>
);
