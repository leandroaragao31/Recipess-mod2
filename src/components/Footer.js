import React from 'react';
import * as S from "../styles/Sfooter.js"
import Ig from "../assets/ig.svg";
import TT from "../assets/tt.svg";
import Fb from "../assets/fb.svg";
import Pin from "../assets/pin.svg";

export default function Footer() {

    return (
        <footer>
            <S.Some>
                <S.Social>
                    <img src={Ig} alt="Logo of Instagram " />
                    <img src={TT} alt="Logo of Twitter" />
                    <img src={Fb} alt="Logo of Facebook " />
                    <img src={Pin} alt="Logo of Pinterest" />
                </S.Social>
                <S.Menu>
                    <S.Containerlista>
                        <S.Lista>ABOUT</S.Lista>
                        <S.Lista>RECIPES</S.Lista>
                        <S.Lista>SUBSCRIBE</S.Lista>
                    </S.Containerlista>
                </S.Menu>
            </S.Some>
            <S.Feet>
            <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
            </S.Feet>    
        </footer>
    )
};