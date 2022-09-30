import React, {useState} from "react";
import Logo from "../assets/logo.svg";
import * as S from "../styles/Sheader.js"

export default function Header() {
  const [open, setOpen] = useState(false);

  const Modal = () => {
    return (
      <nav>
        <ul>
          <li>
            ABOUT
          </li>
          <li>
            RECIPES
          </li>
          <li>
            SUBSCRIBE
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <S.Cabecalho>
      <S.Logo src={Logo} alt="logo RC" />
      <S.Menu>
        <S.Containerlista>
          <S.Lista>ABOUT</S.Lista>
          <S.Lista>RECIPES</S.Lista>
          <S.Lista>SUBSCRIBE</S.Lista>
        </S.Containerlista>
      </S.Menu>
      {open && Modal()}
      <S.Ham
        onClick={() => {
          setOpen(!open);
        }}>
        {open === true ? "X" : "≡"}
      </S.Ham>
    </S.Cabecalho>
  )
};