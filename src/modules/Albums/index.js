import React from 'react'
import styles from './style.module.css';
import {Container,Row,Col,Card,Image,Button} from 'react-bootstrap'
 
const Albums = () => {

    const CardInfo=[
        {image:"cover1.jpg",title:"Kad bi' bio bijelo dugme",subtitle:"1974.",text:""},
        {image:"cover2.jpeg",title:"Šta bi dao da si na mom mjestu",subtitle:"1975.",text:""},
        {image:"cover3.jpeg",title:"Eto! Baš hoću!",subtitle:"1976.",text:""},
        {image:"cover4.jpeg",title:"Bitanga i princeza",subtitle:"1979.",text:""},
        {image:"cover5.jpg",title:"Doživjeti stotu",subtitle:"1980.",text:""},
        {image:"cover6.jpg",title:"...a milicija trenira strogoću!",subtitle:"1983.",text:""},
        {image:"cover7.jpg",title:"Uspavanka za Radmilu M.",subtitle:"1983.",text:""},
        {image:"cover8.jpg",title:"Bijelo dugme",subtitle:"1984.",text:""},
        {image:"cover9.jpg",title:"Pljuni i zapjevaj moja Jugoslavijo",subtitle:"1986.",text:""},
        {image:"cover10.jpg",title:"Ćiribiribela",subtitle:"1988.",text:""},
        {image:"cover11.jpg",title:"Ko Ne Poludi Taj Nije Normalan!",subtitle:"2016.",text:""},
    ];

    const renderCard=(card,index) =>{
        return(
        <main>
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <Card className="mb-3" key={index}>
                    <Image src={card.image} className="card-img-top"  fluid />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                <h5>{card.subtitle}</h5>
                                {card.text}
                                <Button className="mt-4">O albumu</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </main>
        )
    }

    return <div className="App"> 
        <h3 className={styles.textexplain}>Popis svih albuma te detaljnije pojašnjenje svakoga pojedinog albuma</h3>
        {CardInfo.map(renderCard)}
        </div>
}

export default Albums