import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './Principal.jsx'
import Album from './componentes/Album.jsx';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Principal></Principal>
  </BrowserRouter>,
)
