import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';
import { ThemeContext, SurveyContext } from '../../utils/context';

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const TitleH1 = styled.h1`
    font-weight: 700;
    color: ${(props) => props.$isDarkMode ? 'white' : `${colors.titleColor}`};
    font-size: 45px;
`;

const TitleH2 = styled.h2`
    font-size: 25px;
    font-weight: 700;
    color: ${(props) => props.$isDarkMode ? 'white' : `${colors.titleColor}`};
    text-decoration-line: underline;
    text-decoration-color: ${colors.primary};
`;

const QuestionLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const QuestionLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    text-align: right;
    color: ${colors.error404title};
`;

const QuestionButton = styled.button`
    width: 291px;
    height: 96px;
    border-radius: 31px;
    border: 2px solid ${colors.primary};
    font-weight: 700;
    font-size: 25px;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;

const QuestionContent = styled.span`
    margin: 30px;
    color: ${(props) => props.$isDarkMode ? 'white' : `${colors.titleColor}`};
`;
function Survey() {

    // Objet contenant la liste des questions récupérées par l'api
    const [surveyData, setSurveyData] = useState({});
    // Boolean pour savoir si les questions sont en cours de loading
    const [isDataLoading, setDataLoading] = useState(false);

    const [error, setError] = useState(null);

    // Paramètre passé par l'url pour avoir la question en cours
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);

    // Calcul pour les liens question précédente et suivante
    const questionPrecedente =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const questionSuivante =
        questionNumberInt === 6 ? 6 : questionNumberInt + 1;

    // On récupère les contextes
    const { saveAnswers, answers } = useContext(SurveyContext);
    const { theme } = useContext(ThemeContext);

    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer });
    }

    // Chargement des données via l'API au premier appel du composant
    // useEffect( () => {
    //     setDataLoading(true);
    //     fetch(`http://localhost:8000/survey`)
    //         .then( (response) => response.json()
    //         .then( ({ surveyData }) => {
    //             console.log(surveyData);
    //             setSurveyData(surveyData);
    //             setDataLoading(false);
    //         })
    //         .catch((error) => console.log(error))
    //     )
    // }, []);

    // Chargement des données via l'API au premier appel du composant
    // Mais cette voici en utilisant async, await et en gérant les erreurs
    useEffect( () => {
        async function fetchSurvey() {
            setDataLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/survey`);
                const { surveyData } = await response.json();
                console.log(surveyData);
                setSurveyData(surveyData);
            }
            catch(err) {
                console.log(err);
                setError(true);
            }
            finally {
                setDataLoading(false);
            }
        }
        fetchSurvey()
    }, []);


    if (error) {
        return (
            <MainContainer>
                <TitleH1>Oups il y a eu un problème</TitleH1>
            </MainContainer>
        );
    }
    // Affiche les liens si nécessaire
    const isQuestionPrecedente =
        questionNumberInt === 1 ? null : (
            <QuestionLink to={'/survey/' + questionPrecedente}>
                Question précédente
            </QuestionLink>
        );

    const isQuestionSuivante =
        questionNumberInt === 6 ? (
            <QuestionLink to="/results">Résultats</QuestionLink>
        ) : (
            <QuestionLink to={'/survey/' + questionSuivante}>Question suivante</QuestionLink>
        );

    return (
        <MainContainer>
            <TitleH1 $isDarkMode={theme === 'dark'}>Questionnaire 🧮</TitleH1>
            <TitleH2 $isDarkMode={theme === 'dark'}>Question {questionNumber}</TitleH2>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent $isDarkMode={theme === 'dark'}>{surveyData[questionNumber]}</QuestionContent>
            )}

            <QuestionLinkContainer>
                <QuestionButton
                    onClick={() => saveReply(true)}
                    disabled={answers[questionNumber]===true}
                >
                    Oui
                </QuestionButton>
                <QuestionButton
                    onClick={() => saveReply(false)}
                    disabled={answers[questionNumber]===false}
                >
                    Non
                </QuestionButton>
            </QuestionLinkContainer>
            <QuestionLinkContainer>
                {isQuestionPrecedente}
                {isQuestionSuivante}
            </QuestionLinkContainer>
        </MainContainer>
    );
}

Survey.propTypes = {
    questionNumber: PropTypes.string
}
export default Survey;
