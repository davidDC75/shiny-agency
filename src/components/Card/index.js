import defaultPicture from '../../assets/logo.svg';

import PropTypes from 'prop-types';

function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
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
