import styled from "styled-components";
import bground from "../assets/bgp.png";

export const Sec1 = styled.section`
width:100%;
display:flex;
justify-content:center;
align-items:center;
height:1300px;
background-image: url(${bground})
`
export const Hone= styled.h1`
font-size:150px;
color:#373737;
@media (max-width: 500px){
    font-size:45px;
}
`
export const Sec2 = styled.section`
height:1300px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
background-color:#F2F4F1;
@media(max-width:500px){
    height:2000px;
}
`
export const Htrhee = styled.h3`
font-size:40px;
color:#373737;
border-bottom:solid 10px;
`
export const ContainerCaixas = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width:100%;
@media (max-width: 500px){
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:90%;
    height:80%;
}
`
export const Caixa = styled.div`
height:500px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
background-color:#FFFFFF;
`

export const Photo = styled.img`
width: 350px;
@media (max-width:500px){
    width:100%;
}
`

export const Leg = styled.p`
font-size:32px;
color:#373737;
`

export const Sec3 = styled.section`
width:100%;
display:flex;
align-items:center;
@media (max-width:500px){
    flex-direction:column;
    justify-content:space-between;
    height:1100px;
}
`
export const Spoon =styled.img`
width:50%;
@media (max-width:500px){
    width:100%;
}
`
export const Read= styled.div`
display:flex;
flex-direction: column;
align-items:center;
@media (max-width:500px){
    height:600px;
    justify-content:space-between;
}
`

export const Lorem = styled.p`
font-size:20px;
 width:68%;
 @media (max-width:500px){
    width:90%;
}
`

export const Sec4 =styled.section`
width:100%;
height:700px;
display:flex;
flex-direction: column;
align-items:center;
justify-content:space-evenly;
background-color:#DFE4DE;
@media (max-width:500px){
    height:450px;
}
`

export const Sub = styled.h3`
font-size:40px;
color:#373737;
`

export const Insert = styled.input`
height:70px;
width:500px;
border:none;
background-color:#EFF1EE;
&: placeholder {
    font-size:24px;
    color:#707070;
}
@media (max-width:500px){
    width:90%;
}
`

export const Send = styled.button`
border:solid 5px;
 width:200px;
 height:50px;
 background-color:#DFE4DE;
 &:hover{
    cursor:pointer;
 }
 @media (max-width:500px){
    width:90%;
}
`