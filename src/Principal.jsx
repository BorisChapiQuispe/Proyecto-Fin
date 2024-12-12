import './Principal.css'
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import { Card, CardBody, CardText, CardLink,Button } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Album from './componentes/Album.jsx';
import Video from './componentes/Video.jsx';
import Tienda from './componentes/Tienda.jsx';
import Mas from './componentes/Mas.jsx';
import Registrar from './componentes/Registrar.jsx';
function Card1(){
    return(
        <div>
            <Card
  style={{
    width: '18rem'
  }}
>
  <a href="https://eminem.news/spotifys-top-3-rappers-2024.html" target='blank'>
  <img href="https://eminem.news/spotifys-top-3-rappers-2024.html"
    alt="Card cap"
    src="https://eminem.news/wp-content/uploads/2024/12/Wrapped-2024.jpg"
    width="100%"
  /></a>
  <CardBody>
    <CardText>
    <a href='https://eminem.news/spotifys-top-3-rappers-2024.html' target='blank'><h4 >Eminem entre los 5 raperos más escuchados en Spotify en 2024</h4></a>
    </CardText>
    <Button href="https://eminem.news/spotifys-top-3-rappers-2024.html" target="blank">
      Leer Noticia
    </Button>
  </CardBody>
</Card>
        </div>

    )
}
function Card2(){
    return(
        <div>
            <Card
  style={{
    width: '18rem'
  }}
>
  
  <a href="https://eminem.news/sandler-praises-eminem.html" target="_blank" rel="noopener noreferrer"><img
    alt="Card cap"
    src="https://eminem.news/wp-content/uploads/2024/12/Eminem-Adam-Sandler.jpg"
    width="100%"
  /></a>
  <CardBody>
    <CardText>
      <a href="https://eminem.news/sandler-praises-eminem.html" target='_blank'><h4>Adam Sandler elogia el cameo de Eminem en “Happy Gilmore 2”</h4></a>
    </CardText>
    <Button href="https://eminem.news/sandler-praises-eminem.html" target="_blank">
      Leer Noticia
    </Button>
  </CardBody>
</Card>
        </div>

    )
}
function Card3(){
    return(
        <div>
            <Card
  style={{
    width: '18rem'
  }}
>
  
  <a href="https://eminem.news/the-real-slim-shady-2b.html" target='_blank'><img
    alt="Card cap"
    src="https://eminem.news/wp-content/uploads/2021/04/The-Real-Slim-Shady-VMA-2000.jpg"
    width="100%"
  /></a>
  <CardBody>
    <CardText>
    <a href="https://eminem.news/the-real-slim-shady-2b.html"><h4>Eminem: “The Real Slim Shady” superó los 2 mil millones de reproducciones en Spotify</h4></a>
    </CardText>
    <Button href="https://eminem.news/the-real-slim-shady-2b.html" target="_blank">
      Leer Noticia
    </Button>
  </CardBody>
</Card>
        </div>

    )
}
function Card4(){
    return(
        <div>
            <Card
  style={{
    width: '18rem'
  }}
>
  
  <a href='https://eminem.news/genius-2024-roundup.html' target='_blank'><img
    alt="Card cap"
    src="https://eminem.news/wp-content/uploads/2024/08/eminem-la-2024-06-2048x1366.jpeg"
    width="100%"
  /></a>
  <CardBody>
    <CardText>
      <a href='https://eminem.news/genius-2024-roundup.html' target='_blank'><h4>Eminem brilla en el resumen de Genius para 2024</h4></a>
    </CardText>
    <Button href="https://eminem.news/genius-2024-roundup.html" target="_blank">
      Leer Noticia
    </Button>
  </CardBody>
</Card>
        </div>

    )
}
function Card5(){
    return(
        <div>
            <Card
  style={{
    width: '18rem'
  }}
>
  <a href="https://eminem.news/fortnite-remix-concert-record.html" target='_blank'>
  <img
    alt="Card cap"
    src="https://eminem.news/wp-content/uploads/2024/12/Eminem-Fortnite-Remix-Finale.jpg"
    width="100%"
  /></a>
  <CardBody>
    <CardText>
       <a href="https://eminem.news/fortnite-remix-concert-record.html" target='_blank'><h4>Eminem regresa a Fortnite y rompe récords en conciertos del juego</h4></a>
    </CardText>
    <Button href="https://eminem.news/fortnite-remix-concert-record.html" target="_blank">
       Leer Noticia
    </Button>
  </CardBody>
</Card>
        </div>

    )
}
function Card6(){
    return(
        <div>
            <Card
  style={{
    width: '18rem'
  }}
>
  <a href="https://eminem.news/eminems-mother-dies.html" target='blank'>
  <img
    alt="Card cap"
    src="https://eminem.news/wp-content/uploads/2014/05/6dp0w9tzusn50tatuiw800nmz-630x420x11.png"
    width="100%"
  /></a>
  <CardBody>
    <CardText>
      <a href="https://eminem.news/eminems-mother-dies.html" target="_blank" rel="noopener noreferrer"><h4>Debbie Nelson, madre de Eminem, muere a los 69 años</h4></a>
    </CardText>
    <Button href="https://eminem.news/eminems-mother-dies.html" target="_blank">
      Leer Noticia
    </Button>
  </CardBody>
</Card>
        </div>

    )
}
function Card7(){
  return(
      <div>
          <Card
style={{
  width: '18rem'
}}
>
<a href="https://eminem.news/middle-east-2024-run-confirmed.html" target="_blank" rel="noopener noreferrer">
<img
  alt="Card cap"
  src="https://eminem.news/wp-content/uploads/2024/06/Eminem-Detroit-Show-5.jpg"
  width="100%"
/></a>
<CardBody>
  <CardText>
    <a href="https://eminem.news/middle-east-2024-run-confirmed.html" target='_blank'><h4>Eminem confirma que los shows de diciembre continuarán</h4></a>
  </CardText>
  <Button href="https://eminem.news/middle-east-2024-run-confirmed.html" target="_blank">
    Leer Noticia
  </Button>
</CardBody>
</Card>
      </div>

  )
}
function Card8(){
  return(
      <div>
          <Card
style={{
  width: '18rem'
}}
>
<a href="https://eminem.news/houdini-apple-musics-top-100-lyrics.html" target="_blank" rel="noopener noreferrer">
<img
  alt="Card cap"
  src="https://eminem.news/wp-content/uploads/2024/12/Houdini-Apple-Music-100-Lyrics.jpg"
  width="100%"
/></a>
<CardBody>
  <CardText>
   <a href="https://eminem.news/houdini-apple-musics-top-100-lyrics.html" target='_blank'><h4>Eminem: “Houdini” aparece en la lista de las 100 mejores letras de Apple Music</h4></a>
  </CardText>
  <Button href="https://eminem.news/houdini-apple-musics-top-100-lyrics.html" target="_blank">
  Leer Noticia
</Button>
</CardBody>
</Card>
      </div>

  )
}
const items = [
  {
    src: 'https://store.polydor.co.uk/cdn/shop/files/3200x1200_EmSite_desktop-2048x768.jpg?v=1720786083&width=2048',
    key: 1,
  },
  {
    src: 'https://media.pitchfork.com/photos/6684240060b8546529994d1a/16:9/w_1280,c_limit/Eminem-Tobey.jpg',
    key: 2,
  },
  {
    src: 'https://linkstorage.linkfire.com/medialinks/images/8f570c24-48c8-4dbe-bea3-e59188cb970f/artwork-440x440.jpg',
    key: 3,
  },
  {
    src: 'https://shop.eminem.com/cdn/shop/files/Em-Mouse-pad_01.jpg?v=1714407860&width=800',
    key: 4,
  },
  {
    src: 'https://assets.megamediaradios.fm/2023/11/EMINEM.png',
    key: 5,
  },
  {
    src: 'https://shop.eminem.com/cdn/shop/files/EM-0436-Q4-Evergreen-Merch-Moment-.Desktop-Homepage-New-Arrivals_2.png?v=1732718300&width=2000',
    key: 6,
  },
  {
    src: 'https://shop.eminem.com/cdn/shop/files/EM-0436-Q4-Evergreen-Merch-Moment-.Homepage-Desktop-Guess-Who-V4_1.png?v=1732291346&width=2000',
    key: 7,
  },
];

function Carro(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
function Contp(){
  return(
    <div
    >
      <div className='carrusel'>
                <Carro></Carro>
            </div>
            <div className='noticias'>
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
                <Card4></Card4>
                <Card5></Card5>
                <Card6></Card6>
                <Card7></Card7>
                <Card8></Card8>
            </div>
    </div>
  )
}
export default function Principal(){
    return(
            <div className="para">
            <div className='menu'>
            <Nav pills>
  <NavItem>
    <Link className="nav-link" to="/" >Principal</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/Albumes">Albumes</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/Video">Videos</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/Tienda">Tienda</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/Mas">Mas</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/Registrar">Registrarse</Link>
  </NavItem>
  <div className='logo-container'>
  <img className="logo" src='https://www.eminem.net/wp-content/uploads/eminem-logo-2013-1200x267.png.webp'></img>
  </div>
</Nav>
            </div>
            
            <Routes>
          <Route path='/' element={<Contp></Contp>}></Route>
          <Route path='/Albumes' element={<Album></Album>}></Route>
          <Route path='/Video' element={<Video></Video>}></Route>
          <Route path='/Tienda' element={<Tienda></Tienda>}></Route>
          <Route path='/Mas' element={<Mas></Mas>}/>
          <Route path='/Registrar' element={<Registrar></Registrar>}/>
        </Routes>
        <div className='footer'>
              <h3>DISEÑADO POR: BORIS CHAPI QUISPE</h3>
            </div>
        </div>
    );
}