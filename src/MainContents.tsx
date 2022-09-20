import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Image = styled.img`
  width: 375px;
  margin: auto;
  height : 375px;
  display : block;
`;

const Title = styled.div`
  width: 90%;
  margin: 20px auto 20px;

  h1{
    font-size : 21px;
    line-height : 26px;
    font-weight : 700;
  }
`;
const Text = styled.div`
    width: 90%;
    margin: auto;

    font-size : 16px;
    line-height : 24px;
    font-weight : 400;

    h3{
        margin : 10px 0;
        font-size : 16px;
        line-height : 24px;
        font-weight : 700;
        color : #6A30F9;
    }
`;
const title ="평범한 한복데이트는 그만! 고퀄리티 한복대여 체험단 모집";

export default function MainContents() {
    
    return(
        <div>
        <Header title={title} />
        <Image src="img/hanbok.png" />
        <Title>
            <h1>{title}</h1>
        </Title>
        <Text>
            <h3>모집중</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </div>


    )
}