import styled from 'styled-components';

import colors from '../../utils/style/colors';

import error404img from '../../assets/error404.svg';

const DivContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.backgroundLight};
    gap: 35px;
`;

const Title = styled.h1`
    color: ${colors.error404title};
    font-weight: 700;
`;

const ImgError = styled.img`
    width: 875px;
    height: 476px;
`;

function Error() {
    return (
        <DivContainer>
            <Title>Oups...</Title>
            <ImgError src={error404img} alt="Erreur 404" />
            <Title>Il semblerait qu'il y ait un problème</Title>
        </DivContainer>
    );
}

export default Error;
