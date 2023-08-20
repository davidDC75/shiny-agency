import { useEffect, useState } from 'react';
import styled from 'styled-components';

//import DefaultPicture from '../../assets/breakcore.jpg';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';

// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Développeur frontend',
//         picture: DefaultPicture
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture
//     },
//     {
//         name: 'David DC',
//         jobTitle: 'Développeur back-end',
//         picture: DefaultPicture
//     }
// ];

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

    // On initialise les states
    const [ freelancersList, setFreelancesList] = useState([]);
    const [ isDataLoading, setIsDataLoading] = useState(false);
    const [ error, setError] = useState(null);

    useEffect( () => {
        async function fetchProfiles() {
            setIsDataLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/freelances`);
                const { freelancersList } = await response.json();
                console.log(freelancersList);
                setFreelancesList(freelancersList);
            }
            catch(err) {
                console.log(err);
                setError(true);
            }
            finally {
                setIsDataLoading(false);
            }
        }
        fetchProfiles();
    }, []);

    if (error) {
        return (<span>Oups il y a eu un problème</span>);
    }

    return (
        <DivContainer>
            <Title>Trouvez votre prestataire</Title>
            <SpanContent>Chez shiny nous réunissons les meilleurs profils pour vous.</SpanContent>
            {isDataLoading ? (
                <Loader />
            ) : (
                <CardsContainer>
                {freelancersList.map((profile, index) => (
                    <Card
                        key={`${profile.id}-${profile.name}`}
                        name={profile.name}
                        job={profile.job}
                        picture={profile.picture}
                    />
                ))}
                </CardsContainer>
            )}

        </DivContainer>
    );
}

export default Freelances;