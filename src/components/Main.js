import React from 'react';
import Cake from "../assets/cake.png";
import Pizza from "../assets/pizza.png";
import Smoothie from "../assets/amendoim.png";
import Salt from "../assets/salt.png"
import * as S from "../styles/Smain.js";

export default function Main() {

    return (

        <main>
            <S.Sec1>
                <S.Hone>RECIPES</S.Hone>
            </S.Sec1>
            <S.Sec2>
                <S.Htrhee>LASTEST RECIPES</S.Htrhee>
                <S.ContainerCaixas>
                    <S.Caixa>
                        <S.Photo src={Cake} alt="Red Velvet Cake" />
                        <S.Leg>Red Velvet Cake</S.Leg>
                    </S.Caixa>
                    <S.Caixa>
                        <S.Photo src={Pizza} alt=" Margherita Pizza" />
                        <S.Leg>Margherita Pizza</S.Leg>
                    </S.Caixa>
                    <S.Caixa>
                        <S.Photo src={Smoothie} alt="Peanut Smoothie" />
                        <S.Leg>Peanut Smoothie</S.Leg>
                    </S.Caixa>
                </S.ContainerCaixas>
            </S.Sec2>
            <S.Sec3>
                <S.Spoon src={Salt} alt="spoon of salt" />
                <S.Read>
                    <S.Htrhee>ABOUT</S.Htrhee>
                    <S.Lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam</S.Lorem>
                </S.Read>
            </S.Sec3>
            <S.Sec4>
                <S.Sub>SUBSCRIBE</S.Sub>
                <S.Leg>Sign UP for newsletter</S.Leg>
                <S.Insert type="email" placeholder="Your Email" />
                <S.Send>SUBMIT</S.Send>
            </S.Sec4>
        </main>)
};