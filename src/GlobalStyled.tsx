import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    // css 초기값 정의
    ${reset};

    // 따로 스타일링
    a{
        text-decoration:none;
        color:inherit;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
    }

    *{
        box-sizing:border-box;
    }

    

`;

export default GlobalStyles;