import styled from "styled-components";

export const Feet = styled.div`
width:100%;
height:50px;
display:flex;
justify-content: center;
align-items:center;
background-color:#446061;
font-size:16px;
color:#FFFFFF;
@media(max-width:500px){
    font-size:9px;
}
`

export const Some = styled.div`
width:100%;
height:300px;
display:flex;
justify-content: space-between;
align-items: center;
background-color:#F2F4F1;
@media (max-width:500px){
    flex-direction:column-reverse;
    justify-content: space-evenly;
    height:500px;
    background-color:#FBFBFB;
}
`

export const Social = styled.div`
width:30%;
display:flex;
justify-content: space-around;
align-items:center;
@media (max-width:500px){
    width:70%;
    
}
`

export const Menu = styled.nav`
width:40%
`

export const Containerlista = styled.ul`
list-style:none;
display:flex;
justify-content: space-evenly;
align-items: center;
height:90px;
@media (max-width:500px){
    flex-direction:column;
    justify-content: space-around;
    height:250px;
}

`
export const Lista = styled.li`
display:flex;
align-items:center;
justify-content:center;
width:30%;
height:80px;
font-size:30px;
&:hover{
    border:solid;
    cursor:pointer;
}`