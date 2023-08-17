import { useParams, Link } from 'react-router-dom';

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);

    const questionPrecedente =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const questionSuivante =
    questionNumberInt === 10 ? 50 : questionNumberInt + 1;

    // Affiche les liens si nécessaire
    const isQuestionPrecedente =
        Number(questionNumber) === 1 ? null : (
            <Link to={'/survey/' + questionPrecedente}>
                Question précédente
            </Link>
        );

    const isQuestionSuivante =
        Number(questionNumber) === 10 ?
            <Link to="/results">Résultats</Link>
        : (
            <Link to={'/survey/' + questionSuivante}>Question suivante</Link>
        );

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            {isQuestionPrecedente}
            {isQuestionSuivante}
        </div>
    );
}

export default Survey;
