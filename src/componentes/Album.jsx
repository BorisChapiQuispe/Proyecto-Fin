import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
import {Card,CardBody,CardTitle,CardSubtitle,Button} from "reactstrap"
import { Nav,NavItem } from "reactstrap"
import Principal from "../Principal"
import './Album.css'
function Card9({imagen,text,can}){
   return(
    <div>
        <Card
    color="dark"
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src={imagen}
    />
    <CardBody>
      <CardTitle tag="h5" style={{color:'white'}}>
        ALBUM
      </CardTitle>
      <CardSubtitle
         style={{ color: 'white' }}
        className="mb-2"
        tag="h2"
      >
        {text}
      </CardSubtitle>
      <Button href={can} target="_blank">
        Canciones
      </Button>
    </CardBody>
  </Card>
    
    </div>
   )
}
export default function Album(){
    return(
        <div className="cont padre">
            <div className="albums">
                <Card9 imagen="https://cdn-images.dzcdn.net/images/cover/53b29cc4d8716973b5791cf9679e6001/0x1900-000000-80-0-0.jpg" text="The Death of Slim Shady(Coup De Grace)" can="https://www.youtube.com/watch?v=0QvdDX2Q7rI&list=PLN1mxegxWPd0GfRvWy_WzwpNKnqSWTV5U" ></Card9>
                <Card9 imagen="https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c" text="Music To Be Murdered By" can="https://www.youtube.com/watch?v=hlFOLS7vKaQ&list=OLAK5uy_nyPpHefgBGBt_CgAaqT3PV6BLxh_tU59s"></Card9>
                <Card9 imagen="https://www.lahiguera.net/musicalia/artistas/eminem/disco/9341/eminem_kamikaze-portada.jpg" text="Kamikaze" can="https://www.youtube.com/watch?v=ACNgFW50EbU&list=OLAK5uy_nId4aStP-eFWiSYeOJGwcoty17mIZjW8A"></Card9>
                <Card9 imagen="https://cdn-images.dzcdn.net/images/cover/432ed502692292710f09a88837077f5a/0x1900-000000-80-0-0.jpg" text="Revival" can="https://www.youtube.com/watch?v=ryr75N0nki0&list=OLAK5uy_m8R1SwPPUCgq777T9Nt-zLRzaekFmhet0"></Card9>
                <Card9 imagen="https://cdn-images.dzcdn.net/images/cover/e61fae5f1b2253dfa639ec3e84af11ec/1900x1900-000000-80-0-0.jpg" text="The Marshall Mathers LP2" can="https://www.youtube.com/watch?v=NFtsBBXDrGs&list=OLAK5uy_l0FbbGAEddn8zg-TkJLWjWTRRyvzV-SkY"></Card9>
                <Card9 imagen="https://cdn-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/0x1900-000000-80-0-0.jpg" text="Recovery" can="https://www.youtube.com/watch?v=c4Yz9o5UtN8&list=OLAK5uy_m_oiFQ5FK6PCTzskpi60YNQwxKZqkVD1M"></Card9>
                <Card9 imagen="https://upload.wikimedia.org/wikipedia/en/4/42/Relapse_%28album%29.jpg" text="Relapse" can="https://www.youtube.com/watch?v=94JmRMOH83k&list=OLAK5uy_ltQp3k4tTYR_YVKJh_NtnubW3ttr6-MN4"></Card9>
                <Card9 imagen="https://upload.wikimedia.org/wikipedia/en/b/b4/Encore_%28Eminem_album%29_coverart.jpg" text="Encore" can="https://www.youtube.com/watch?v=5ZSshuS9YxM&list=OLAK5uy_k_3v1q5GTr5Jngo01yJBPJEX9EirgbfFc"></Card9>
                <Card9 imagen="https://cdn-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1900x1900-000000-80-0-0.jpg" text="The Eminem Show" can="https://www.youtube.com/watch?v=5o7AxtD3leM&list=PL11r1CIQbGxt4ynj-RKFXLh5MfzfGAKcm"></Card9>
                <Card9 imagen="https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42" text="The Marshall Mathers LP" can="https://www.youtube.com/watch?v=0NmsogZClfM&list=OLAK5uy_nyRZBNr6_NOMq4osjNSBbB7xpS2L_AH8w"></Card9>
                <Card9 imagen="https://i.scdn.co/image/ab67616d0000b2739bef45ee387f274ea3198c55" text="The Slim Shady LP" can="https://www.youtube.com/watch?v=qM00SPx-Gao&list=OLAK5uy_kqHXZBl9FyDtb2UckFaLtvT2L0HLVnqTs"></Card9>
                <Card9 imagen="https://i.scdn.co/image/ab67616d0000b273f598f32df9d06fd5e1ff9568" text="Infinite" can="https://www.youtube.com/watch?v=TyUWs246kAo&list=PLdRHHn3OMrcyyQMqEdI_m6EgvGLhuLU0k"></Card9>                
                <Card9 imagen="https://cdn-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/0x1900-000000-80-0-0.jpg" text="Curtain Call: The Hits" can="https://www.youtube.com/watch?v=FyJh-0EejUc&list=OLAK5uy_kX9TfEUQY9Xm5za--N6kEzsFn-qrVo-r0"></Card9>
                <Card9 imagen="https://www.lahiguera.net/musicalia/artistas/eminem/disco/6321/eminem_shady_xv-portada.jpg" text="Shady XV" can="https://www.youtube.com/playlist?list=OLAK5uy_nIZOxb18CUyQjcFNIFdmqMFddDHNvcYOs"></Card9>
                <Card9 imagen="https://www.lahiguera.net/musicalia/artistas/eminem/disco/12313/eminem_curtain_call_2-portada.jpg" text="Curtain Call II" can="https://www.youtube.com/watch?v=r_0JjYUe5jo&list=OLAK5uy_mHmQtAojdO4PRMxhyG_9FR2cScq52Z_ww"></Card9>
            </div>
            
        </div>
        
    )
}
