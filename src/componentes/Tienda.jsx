import { Card,CardBody,CardTitle } from "reactstrap"
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import './Tienda.css'
function CardP({wi,im,tit,desc,tal,prec}) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };
return(
        <div>
            <Card color="dark"
  style={{
    width: wi
  }}
>
  <img
    alt="Sample"
    src={im}
  />
  <CardBody >
    <CardTitle tag="h5"  style={{color:'white'}}>
     <h2>{tit}</h2>
    </CardTitle>
    <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><b>DATOS DEL PRODUCTO</b></AccordionHeader>
          <AccordionBody accordionId="1">
            <b>Descripción: </b><p>{desc}</p>
            <b>Tallas: </b><p>{tal}</p>
            <b>Precio: </b><p>{prec}</p>
          </AccordionBody>
        </AccordionItem>
        </Accordion>
  </CardBody>
</Card>
        </div>
    )
}
export default function Tienda(){
    return(
        <div className="cont padre">
            <div className="productos">
                <div className="c1">
                    <CardP wi='40rem' im="https://shop.eminem.com/cdn/shop/products/SF-BOMBER-G-B.png?v=1644589646&width=800" tit="Chaqueta bomber ligera Shady Football (verde)"
                    desc="Chaqueta bomber ligera con parches en ambas mangas y en el pecho derecho. El texto está bordado en el pecho izquierdo y una combinación de bordado y estampado en la parte posterior de la chaqueta." tal="S,M,L,XL" prec="$150.00"></CardP>
                </div>
                <CardP wi='18rem' im="https://shop.eminem.com/cdn/shop/files/tdosstruckerhat.png?v=1720756096&width=800" tit="Gorra de camionero con logotipo de TDOSS" 
                desc="Gorra negra de camionero con el logo del álbum TDOSS. Cierre ajustable." tal="Ajustable" prec="$30.00"></CardP>
                <CardP wi='18rem' im="https://shop.eminem.com/cdn/shop/products/Shady-25_032.jpg?v=1709066306&width=800" tit="Camiseta de la banda Shady SSLP25"
                desc="Camiseta negra con el gráfico de Shady Bunch, como se ve en el video musical 'My Name Is'." tal="S,M,L,XL" prec="$35.00"></CardP>
                <CardP wi='18rem' im="https://shop.eminem.com/cdn/shop/files/Gold-Necklace_02_1.png?v=1733156038&width=800" tit="Colgante con máscara de hockey (oro)" 
                desc="Colgante y cadena con máscara de hockey. Presenta detalles de sangre y máscara agrietada y cierre tipo E al revés. Material: acero inoxidable con baño de PVD en oro de 18 k
Estilo de cadena: cadena de cuerda de 3 mm de 20 o 24 pulgadas" tal="20 y 24 pulgadas" prec="$75.00"></CardP>
                <CardP wi='18rem' im="https://shop.eminem.com/cdn/shop/files/chainsaw_tee_front.png?v=1722874711&width=800" tit="Camiseta de motosierra TDOSS"
                desc="Camiseta blanca con el logotipo de TDOSS y la imagen de Slim Shady Chainsaw en el frente." tal="S,M,L,XL" prec="$40.00"></CardP>
                <CardP wi='18rem' im="https://shop.eminem.com/cdn/shop/products/Super_E_Hoodie_Navy_1a14000e-e9c0-4afa-8ab1-70dd61f4b468.png?v=1554150403&width=800" tit="Sudadera con capucha Super E (azul marino)" 
                desc="Logotipo de Eminem Super-E estampado en una sudadera con capucha azul marino." tal="S,M,L,XL" prec="$45.00"></CardP>
                <CardP wi='18rem' im="https://shop.eminem.com/cdn/shop/files/kamikazecamojumper.png?v=1722355247&width=800" tit="Chaqueta ligera de camuflaje verde"
                desc="Poncho de camuflaje ligero, resistente al agua, en color verde. Parche multicolor en el pecho izquierdo delantero y texto blanco estampado en la espalda." 
                tal="S,M,L,XL" prec="$70.00"></CardP>
            </div>
        </div>
    )
}