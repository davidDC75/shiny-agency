//import { useState } from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoAccueil from '../../assets/home.svg';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context';

const HomeContainer = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-colors: ${colors.backgroundLight};
`;

const LeftHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.$isDarkMode ? 'white' : `${colors.titleColor}`};
`;

const StyledLink = styled(Link)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    border-radius: 30px;
    background-color: ${colors.primary};
`;

const ImageHome = styled.img`
    width: 541px;
    height: 506px;
`;
// const Balloon = styled.div`
//     height: 100px;
//     width: 100px;
//     border-radius: 50px;
//     background-color: #e20202;
//     transform: scale(${({ size }) => size});
// `;

function Home() {
    // const [size, setSize] = useState(1);
    // return (
    //     <HomeContainer>
    //         <h1 onClick={() => setSize(size + 0.1)}> Page D'accueil 🏠</h1>
    //         <Balloon size={size} />
    //     </HomeContainer>
    // );
    const { theme } = useContext(ThemeContext);

    return (
        <HomeContainer>
            <LeftHomeContainer>
                <Title $isDarkMode={theme === 'dark'}>Repérez vos besoins,<br/>on s'occupe du reste,<br/>avec les meilleurs<br/>talents</Title>
                <StyledLink to="/survey/1">Faire le test</StyledLink>
            </LeftHomeContainer>
            <ImageHome src={logoAccueil} alt="Logo Accueil" />
        </HomeContainer>
    )
}

export default Home;
