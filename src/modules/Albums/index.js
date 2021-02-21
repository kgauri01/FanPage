import React from 'react'
import styles from './style.module.css';
import {Container,Row,Col,Card,Button,CardImg,Popover,OverlayTrigger} from 'react-bootstrap'
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
        {image:Image1,title:"Kad bi' bio bijelo dugme",subtitle:"1974.",text:"ervfer",pjesme:["Kad bi bio bijelo dugme","Blues za moju bivšu dragu","Ne spavaj mala moja muzika dok svira","Sve ću da ti dam samo da zaigram","Selma","Patim evo deset dana"]},
        {image:Image2,title:"Šta bi dao da si na mom mjestu",subtitle:"1975.",pjesme:["Tako ti je mala moja kad ljubi Bosanac","Hop-cup","Došao sam da ti kažem da odlazim","Ne gledaj me tako i ne ljubi me više","Požurite konji moji","Bekrija si cijelo selo viče, e pa jesam, šta se koga tiče","Šta bi dao da si na mom mjestu"]},
        {image:Image3,title:"Eto! Baš hoću!",subtitle:"1976.",pjesme:["Izgledala je malo čudno u kaputu žutom krojenom bez veze","Loše vino","Eto! baš hoću!","Dede bona, sjeti se, de, tako ti svega","Slatko li je ljubit tajno","Ništa mudro","Ne dese se takve stvari pravome muškarcu","Sanjao sam noćas da te nemam"]},
        {image:Image4,title:"Bitanga i princeza",subtitle:"1979.",pjesme:["Bitanga i princeza","Ala je glupo zaboravit njen broj","Ipak, poželim neko pismo","Kad zaboraviš juli","Na zadnjem sjedištu moga auta","A koliko si ih imala do sad","Sve će to mila moja prekriti ruzmarin, snjegovi i šaš"]},
        {image:Image5,title:"Doživjeti stotu",subtitle:"1980.",pjesme:["Doživjeti stotu","Lova","Tramvaj kreće (ili kako biti heroj u ova šugava vremena)","Hotel, motel","Pjesma mom mlađem bratu (iz Niša u proljeće '78.)","Čudesno jutro u krevetu gđe Petrović","Mogla je biti prosta priča","Ha, ha, ha","Zažmiri i broj","Pristao sam biću sve što hoće"]},
        {image:Image6,title:"...a milicija trenira strogoću!",subtitle:"1983.",pjesme:[	"...a milicija trenira strogoću!","Pjesma o vozovima","Pjesma o mlijeku",	"Pjesma o bašti, parku i cvijeću","Pjesma o žmurki i lovu",	"Divlji zapad" ,	"Pjesma o životinjama",	"Pjesma o Mocartu","Lava dva"]},
        {image:Image7,title:"Uspavanka za Radmilu M.",subtitle:"1983.",pjesme:["Polubauk polukruži poluevropom","Drugovi i drugarice","Kosovska","U vrijeme otkazanih letova","Zašto me ne podnosi tvoj tata","Ako možeš zaboravi","Ovaj ples dame biraju","Ne plači" ,"Uspavanka za Radmilu M."]},
        {image:Image8,title:"Bijelo dugme",subtitle:"1984.",pjesme:["Hej, slaveni" ,"Padaju zvijezde","Meni se ne spava","Za Esmu","Jer kad ostariš" ,"Lipe cvatu, sve je isto k'o i lani","Pediculis pubis","Aiaio radi radio","Lažeš","Da te bogdo ne volim"]},
        {image:Image9,title:"Pljuni i zapjevaj moja Jugoslavijo",subtitle:"1986.",pjesme:["Padaj silo i nepravdo","Pljuni i zapjevaj moja Jugoslavijo","Zamisli","Noćas je ko' lubenica pun mjesec iznad Bosne" ,"Te noći kad umrem kad odem, kad me ne bude","A i ti me iznevjeri","Zar ne vidiš da pravim budalu od sebe","Hajdemo u planine","Pjesma za malu pticu","Ružica si bila, sada više nisi"]},
        {image:Image10,title:"Ćiribiribela",subtitle:"1988.",pjesme:["Ćiribiribela","Šta ima novo","Neću to na brzaka","Evo zakleću se","Đurđevdan je a ja nisam s onom koju volim","Napile se ulice" ,"Ako ima Boga","Nakon svih ovih godina" ,"Lijepa naša"]},
        {image:Image11,title:"Ko Ne Poludi Taj Nije Normalan!",subtitle:"2016.",pjesme:["Ipak, poželim neko pismo","Ružica si bila, sada više nisi","Zar ne vidiš da pravim budalu od sebe","Meni se ne spava","Zamisli","Ćiribiribela","Napile se ulice","Lipe cvatu, sve je isto ko i lani","A i ti me iznevjeri","Đurđevdan"]},
    ];


    const renderCard=(card,index) =>{
        return(   
                     <Col >  
                     <Card className="mb-3" key={index}>
                         <CardImg src={card.image} className="card-img-top" height="250px" fluid="true"/>
                         <Card.Body >
                             <Card.Title>{card.title}</Card.Title>
                             <Card.Text>
                                 <h5>{card.subtitle}</h5>
                                 <div>
                                 <OverlayTrigger trigger="click" placement="right" overlay={ <Popover id="popover-basic"><Popover.Content>{card.pjesme.map(tab => <li className={styles.tekstpjesama}>{tab}</li>)}</Popover.Content></Popover>}>
                                    <Button className="mt-4">Pjesme</Button>
                                    </OverlayTrigger>
                                 </div>
                             </Card.Text>
                         </Card.Body>
                     </Card> 
                  </Col>    
        )
    }


    return <Container>
            <Row>
                <Col className="text-center py-5">
                    <h3 className={styles.textexplain}>Popis svih albuma te popis pjesama pojedinog albuma</h3>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3}>      
                {CardInfo.map(renderCard)}                                        
            </Row> 
        </Container>
}
export default Albums