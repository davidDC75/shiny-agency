import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../utils/style/colors';
import logo from '../../assets/dark-logo.png';

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ImgLogo = styled.img`
    width: 260px;
    height: 97px;
`;

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    ${(props) =>
        props.$isFullLink &&
        `
            color: white;
            border-radius: 30px;
            background-color: ${colors.primary};
        `}
`;

function Header() {
    return (
        <HeaderStyled>
            <ImgLogo src={logo} alt="logo" />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </nav>
        </HeaderStyled>
    );
}

export default Header;
