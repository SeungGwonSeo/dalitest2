import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 64px;
    top: 0;
    display: flex;
    padding-left : 20px;
    align-items: center;
    background : white;
`;

const IMAGE = styled.img`
    width : 30px;
    height : 30px;
`;

const Title = styled.div`
    width : 60%;
    line-height : 16px;
    font-size : 12px;
    font-weight : 700;
    padding-left : 10px;
    min-width: 180px;

`;

const HeaderCompo = styled.div`
    display :flex;
`;

interface HeaderTitle {
    title: string;
  }


const Header: React.FC<HeaderTitle> = ({title}) =>{
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <Container style={scrollPosition < 64 ? {position : 'static'} : {position : 'sticky'}}>
                {scrollPosition > 375 ? 
                (<HeaderCompo><IMAGE src="img/arrowleft.svg"></IMAGE><Title>{title}</Title></HeaderCompo>) : <IMAGE src="img/logo.svg"></IMAGE> }
        </Container>
    )
}

export default Header;