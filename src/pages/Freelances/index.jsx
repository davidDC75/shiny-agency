import DefaultPicture from '../../assets/breakcore.jpg';

import styled from 'styled-components';

import Card from '../../components/Card';

import colors from '../../utils/style/colors';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        picture: DefaultPicture
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture
    },
    {
        name: 'David DC',
        jobTitle: 'Développeur back-end',
        picture: DefaultPicture
    }
];

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
    colot: ${colors.titleColor};
`;

const SpanContent = styled.span`
    font-weight: 700;
    font-size: 20px;
    color: ${colors.secondary};
    margin-bottom: 40px;
`;

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
    return (
        <DivContainer>
            <Title>Trouvez votre prestataire</Title>
            <SpanContent>Chez shiny nous réunissons les meilleurs profils pour vous.</SpanContent>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </DivContainer>
    );
}

export default Freelances;