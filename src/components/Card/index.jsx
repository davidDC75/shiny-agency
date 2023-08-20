import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultPicture from '../../assets/logo.svg';
import colors from '../../utils/style/colors';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    justify-content: center;
    align-items: center;
    gap: 50px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: 400;
`;

const CardImage = styled.img`
    height: 148px;
    width: 148px;
    border-radius: 90px;
`;

const CartTitle = styled.span`
    font-weight: 400;
    font-size: 25px;
    color: ${colors.titleColor};
`;

function Card({ name, job, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{job}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CartTitle>{name}</CartTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    label: 'Mon label par défaut',
    title: 'Mon titre par défaut',
    picture: defaultPicture
}

export default Card;
