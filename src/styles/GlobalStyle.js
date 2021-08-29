import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    body{
        font-family: 'Rubik', sans-serif;
    }

    @media ${({ theme }) => theme.mediaQueries['below-1280']}{
        html{
            font-size: 13px;
        }
    }
    @media ${({ theme }) => theme.mediaQueries['below-1022']}{
        html{
            font-size: 12px;
        }
    }
    @media ${({ theme }) => theme.mediaQueries['below-425']}{
        html{
            font-size: 11px;
        }
    }
`;

export default GlobalStyle;
