import styled from "styled-components";

export const Cabecalho = styled.header`
width: 100%;
height:150px;
display: flex;
justify-content: space-between;
align-items:center;
background-color:#00000029;
@media (max-width:500px){
    height:40px;
    justify-content:flex-end;
}
`
export const Logo=styled.img`
@media (max-width: 500px){
    display:none;
}
`
export const Menu = styled.nav`
width:40%;
display:flex;
justify-content: center;
@media (max-width: 500px){
    display:none;
}
`
export const Containerlista = styled.ul`
list-style:none;
width:100%;
display:flex;
justify-content: space-around;
align-items: center;
height:90px;
`
export const Lista =styled.li`
display:flex;
align-items:center;
justify-content:center;
width:33%;
height:80px;
font-size:30px;
&:hover{
    border:solid;
    cursor:pointer;
}
`

export const Ham= styled.button`
display:none;
@media (max-width:500px){
    height:40px;
    width:50px;
    font-size:20px;
    display:initial;
    border:none;
    background-color:transparent;

}
`