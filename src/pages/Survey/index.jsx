import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../utils/style/colors';

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const TitleH1 = styled.h1`
    font-weight: 700;
    color: ${colors.titleColor};
    font-size: 45px;
`;

const TitleH2 = styled.h2`
    font-size: 25px;
    font-weight: 700;
    color: ${colors.titleColor};
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
function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);

    const questionPrecedente =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const questionSuivante =
        questionNumberInt === 10 ? 10 : questionNumberInt + 1;

    // Affiche les liens si nécessaire
    const isQuestionPrecedente =
        questionNumberInt === 1 ? null : (
            <QuestionLink to={'/survey/' + questionPrecedente}>
                Question précédente
            </QuestionLink>
        );

    const isQuestionSuivante =
        questionNumberInt === 10 ? (
            <QuestionLink to="/results">Résultats</QuestionLink>
        ) : (
            <QuestionLink to={'/survey/' + questionSuivante}>Question suivante</QuestionLink>
        );

    return (
        <MainContainer>
            <TitleH1>Questionnaire 🧮</TitleH1>
            <TitleH2>Question {questionNumber}</TitleH2>
            <QuestionLinkContainer>
                <QuestionButton>Oui</QuestionButton>
                <QuestionButton>Non</QuestionButton>
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
