import { FormGroup,Label,Input,Button,Form } from "reactstrap"
import './Registrar.css'
export default function Registrar(){
    return(
        <div className="cont padre">
             <div className="form">
             <Form className="form1">
  <FormGroup>
    <Label for="exampleEmail" style={{color:'white'}}>
      EMAIL
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Ingrese Email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword" style={{color:'white'}}>
       CODIGO POSTAL
    </Label>
    <div>
    <Input placeholder="Ingrese Codigo Postal"
    />
    </div>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect" style={{color:'white'}}>
      CIUDAD
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        La Paz
      </option>
      <option>
        Cochabamba 
      </option>
      <option>
        Santa Cruz
      </option>
      <option>
        Tarija
      </option>
      <option>
        Beni
      </option>
      <option>
        Oruro
      </option>
      <option>
        Potosi
      </option>
      <option>
        Pando
      </option>
    </Input>
  
  </FormGroup>   
  <div>
    <p style={{color:'white'}}><b>Nota: </b>Al enviar este formulario, acepto recibir noticias, fechas de giras y ofertas especiales de Eminem. Los correos electrónicos serán enviados por o en nombre de Universal Music Group 2220 Colorado Avenue, Santa Mónica, CA 90404 (310) 865-4000. Puede retirar su consentimiento en cualquier momento</p>
  </div>  
  <Button>
    Enviar
  </Button>
 
</Form>
             </div>
        </div>
    )
} 