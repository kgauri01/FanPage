import React from 'react'
import styles from './style.module.css';
import {Container,Row,Col,Card,Button,CardImg} from 'react-bootstrap'
import Image1 from "../../images/cover1.jpg"
import Image2 from "../../images/cover2.jpeg"
import Image3 from "../../images/cover3.jpeg"
import Image4 from "../../images/cover4.jpeg"
import Image5 from "../../images/cover5.jpg"
import Image6 from "../../images/cover6.jpg"
import Image7 from "../../images/cover7.jpg"
import Image8 from "../../images/cover8.jpg"
import Image9 from "../../images/cover9.jpg"
import Image10 from "../../images/cover10.jpg"
import Image11 from "../../images/cover11.jpg"
 
const Albums = () => {

    const CardInfo=[
        {image:Image1,title:"Kad bi' bio bijelo dugme",subtitle:"1974.",text:"ervfer"},
        {image:Image2,title:"Šta bi dao da si na mom mjestu",subtitle:"1975."},
        {image:Image3,title:"Eto! Baš hoću!",subtitle:"1976."},
        {image:Image4,title:"Bitanga i princeza",subtitle:"1979."},
        {image:Image5,title:"Doživjeti stotu",subtitle:"1980."},
        {image:Image6,title:"...a milicija trenira strogoću!",subtitle:"1983."},
        {image:Image7,title:"Uspavanka za Radmilu M.",subtitle:"1983."},
        {image:Image8,title:"Bijelo dugme",subtitle:"1984."},
        {image:Image9,title:"Pljuni i zapjevaj moja Jugoslavijo",subtitle:"1986."},
        {image:Image10,title:"Ćiribiribela",subtitle:"1988."},
        {image:Image11,title:"Ko Ne Poludi Taj Nije Normalan!",subtitle:"2016."},
    ];


    const renderCard=(card,index) =>{
        return(   
             <Container>
                <Row>      
                     <Col sm="4">  
                     <Card className="mb-3" key={index}>
                         <CardImg src={card.image} className="card-img-top" height="250px" fluid="true"/>
                         <Card.Body >
                             <Card.Title>{card.title}</Card.Title>
                             <Card.Text>
                                 <h5>{card.subtitle}</h5>
                                 <div>
                                    <Button className="mt-4">O albumu</Button>
                                 </div>
                             </Card.Text>
                         </Card.Body>
                     </Card> 
                  </Col>                                             
                </Row> 
            </Container> 
        )
    }

    return <div>
        <h3 className={styles.textexplain}>Popis svih albuma te detaljnije informacije svakoga pojedinog albuma</h3>
                {CardInfo.map(renderCard)}
        </div>
}

export default Albums