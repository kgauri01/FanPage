import React from 'react'
import styles from './style.module.css'
import ImageParagraph from '../../components/ImageParagraph'
import SecondImageParagraph from '../../components/SecondImageParagraph'
import First from '../../components/Images/First'
import Second from '../../components/Images/Second'
import Third from '../../components/Images/Third'
import Fourth from '../../components/Images/Fourth'
 
const firstText = `
Bijelo dugme je jedna od najpoznatijih rock grupa bivše Jugoslavije, osnovana u Sarajevu 1974. godine. 
Iako mladi, članovi grupe su bili već iskusni glazbenici.
Sastav aktivno djeluje od 1974.-1989. i u tom vremenu objavljuju petnaestak albuma, nekoliko kompilacija i mnoge singlove. 
Početkom 2005. godine najavljuje se ponovno okupljanje Bijelog dugmeta i u lipnju oni održavaju svega tri povratnička koncerta, u Sarajevu, Zagrebu i Beogradu pred ukupno više od dvjesto tisuća gledatelja. 
Grupa se poslije toga više nije okupila.
`
 
const secondText = ['Vokali: Željko Bebek(1974. - 1984.), Mladen Vojičić(1984. - 1985.), Alen Islamović(1985. - 1989.)', 
'Gitaristi: Goran Bregović(1974. - 1989.)', 
'Basisti: Sanin Karić(1977.), Ljubiša Racić(1975. - 1977.), Mustafa Kurtalić(1975), Zoran Redžić(1974. - 1975., 1977. - 1989.)', 
'Klavijature: Vlado Pravdić(1974. - 1976., 1978. - 1987.),  Laza Ristovski(1976. - 1978., 1985. - 1989.)',
'Bubnjevi:Goran "Ipe" Ivandić (1974. - 1976., 1977. - 1978., 1982. - 1989.), Điđi Jankelić(1978. - 1982.), Milić Vukašinović - bubnjevi (1976.)']

const thirdText = ['"Bijelo dugme je više od muzike za to vrijeme"','"Momci su bili popularniji od samoga maršala"','"To je bila prava dugmemanija"','"Oni su bili prava eksplozija rock and rolla"','"Bijelo dugme je bio pravi početak muzičke industrije"']

const fourthText = `
Krajem 1988. godine izašao je album Ćiribiribela s "Đurđevdanom" kao mega-hitom. Iskoristivši stih Đorđa Balaševića A ja nisam s onom koju volim i staru cigansku temu, Bregović je uz pratnju orkestra Fejata Sejdića, napravio pjesmu za sva vremena. Provokacija nisu izostale ni ovog puta, bile su smještena u spajanju himne "Lijepa naša" i pjesme "Tamo daleko". Publika u Hrvatskoj i Srbiji loše je primila ovaj spoj i žestoko zviždala tijekom njegovog izvođenja na koncertima. Ostatak albuma čine pjesme koje bi teško ušle na kompilaciju najboljih trideset: "Evo zakleću se", "Napile se ulice", "Ako ima boga", "Šta ima novo".

Početkom 1989. godine Bijelo dugme polazi na dvomjesečnu turneju, ali poslije koncerta u Derventi Alen Islamović mučen bolovima u bubrezima napušta grupu i odlazi kući u Bihać. Turneja se naglo prekida, otkazuju se koncerti u Kini i Sovjetskom Savezu, a Bregović odlazi u Pariz. Nitko tada nije pomislio da će do sljedećeg koncerta najpopularnije grupe ex Jugoslavije proći čak šesnaest godina.

Željko Bebek po izbijanju rata seli u Zagreb i nastavlja karijeru, Zoran Redžić odlazi u Finsku, a Mladen Vojičić - Tifa tek 1995. napušta Sarajevo i odlazi u Njemačku. Ipe Ivandić po izbijanju rata seli u Beograd gdje je tragično nastradao 1994. godine.
`

const AboutContent = () => (
  <section className={styles.aboutContent}>
    <ImageParagraph image={<First />} title="Tko/što je Bijelo dugme?" text={firstText}/>
    <SecondImageParagraph image={<Second />} title="Članovi"  text={secondText.map(tab => <li>{tab}</li>)}/>
    <ImageParagraph image={<Third />} title="Izjave poznatih" text={thirdText.map(tab => <li>{tab}</li>)}/>
    <SecondImageParagraph image={<Fourth/>} title="Kraj benda"  text={fourthText}/>
  </section>)
 
export default AboutContent  