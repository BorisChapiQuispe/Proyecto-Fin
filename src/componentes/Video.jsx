import { Card ,CardBody,CardTitle,Button} from "reactstrap"
import './Video.css'
function Vidio({vid,ncan,im}){
  
  return(
       <div>  
       <a href={vid} target="_blank" rel="noopener noreferrer">
       <Card
        color="dark"
  style={{
    width: '30rem'
    
  }}
>
  <img
    alt="Sample"
    src={im}
  />
  <CardBody>
    <CardTitle tag="h5" style={{color:'white'}}>
      {ncan}
    </CardTitle>

  </CardBody>
</Card>
       </a>
   
       </div>
    )
}
export default function Video(){
    return(
        <div className="cont padre">
            <div className="cont1">
        <Vidio vid="https://youtu.be/RjrA-slMoZ4?si=8kNlDmLACaAriBpj" ncan="Eminem-From The D 2 The LBC (Feat. Snoop Doog)" im="https://i.ytimg.com/vi/RjrA-slMoZ4/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://www.youtube.com/watch?v=8CdcCD5V-d8" ncan="Eminem-Venom" im="https://i.ytimg.com/vi/8CdcCD5V-d8/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/3qFvCPmee8U?si=rwxzym-KekXvXFrm" ncan="Eminem-Godzilla(Feat. Juice WRLD)" im="https://i.ytimg.com/vi/3qFvCPmee8U/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/RHQC4fAhcbU?si=qhhnO-a55Oa6H_Ot" ncan="Eminem-Darkness" im="https://i.ytimg.com/vi/RHQC4fAhcbU/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/wfWIs2gFTAM?si=5JaF3ZmjjQCqLddw" ncan="Eminem-River(Feat. Ed Sheeran)" im="https://i.ytimg.com/vi/wfWIs2gFTAM/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/22tVWwmTie8?si=rbvxYvNiS-454g98" ncan="Eminem-Houdini(Official Music Video)" im="https://i.ytimg.com/vi/22tVWwmTie8/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/9xn0OHEZZ8Q?si=BfF2VikRq4Vit5le" ncan="Eminem-Tobey(Feat. Big Sean & Babytron)" im="https://i.ytimg.com/vi/9xn0OHEZZ8Q/mqdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/ZaK9Wi5ho0o?si=Q5-7grjdlt4UGQIL" ncan="Eminem-Temporary(Feat. Skylar Grey)" im="https://i.ytimg.com/vi/ZaK9Wi5ho0o/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/Vwa0HenQMi4?si=H0K3x6qbs-5KKdNa" ncan="Eminem-Somebody Save Me(Feat. Jelly Roll)" im="https://i.ytimg.com/vi/Vwa0HenQMi4/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/ryr75N0nki0?si=Q7lUihGZov_U9l3q" ncan="Eminem-Walk On Water(Feat. Beyoncé)" im="https://i.ytimg.com/vi/ryr75N0nki0/maxresdefault.jpg"></Vidio>
        <Vidio vid="https://youtu.be/FxQTY-W6GIo?si=MUUOb201ZL9Z-yHe" ncan="Eminem-Killshot" im="https://i.ytimg.com/vi/FxQTY-W6GIo/maxresdefault.jpg"></Vidio>
    </div>
    <div className="boton" >
  <Button className='bot' style={{fontSize:'25px', padding:'15px 20px'}} href="https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw" target="_blank"
    color="success"
  >
    Ver mas
  </Button>
</div>
        </div>
    )
}