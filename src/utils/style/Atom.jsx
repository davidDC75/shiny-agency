import colors from './colors';
import styled, { keyframes } from 'styled-components';

// L'animation de la rotation du loader
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

// Le loader des questions
export const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`;


// Pas utilisé car j'ai fait l'exercice différemment
// export const StyledLink = styled(Link)`
//     padding: 10px 15px;
//     color: #8186a0;
//     text-decoration: none;
//     font-size: 18px;
//     text-align: center;
//     ${(props) =>
//         props.$isFullLink &&
//         `
//             color: white;
//             border-radius: 30px;
//             background-color: ${colors.primary};
//         `}
// `;
