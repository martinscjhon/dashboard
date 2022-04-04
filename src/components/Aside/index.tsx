import React from "react";
import logoImg from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink
 } from "./style";
import { Link } from "react-router-dom";

export const Aside: React.FC = () => {

    return (
        <Container>        
            <Header>
                <LogoImg src={logoImg} alt='Logo Minha Carteira' />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>                
                    <MenuItemLink href='/'>
                        <MdDashboard />
                        Dasboard
                    </MenuItemLink>  

                    <MenuItemLink href='/list/entry-balance'>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>  

                    <MenuItemLink href='/list/exit-balance'>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>  

                    <MenuItemLink href='/list/exit-balance'>
                        <MdExitToApp />
                        Sair
                    </MenuItemLink>  
            </MenuContainer>
        </Container>
    );
}