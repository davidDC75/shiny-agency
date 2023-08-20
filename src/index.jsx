import React from 'react';
// Ne fonctionne pas sous react 17
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './styles/index.css';
// import App from './components/App';

// Les pages
import Header from './components/Header';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Error from './components/Error';
import Footer from './components/Footer';

// On importe le contexte
import { ThemeProvider, SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';


import reportWebVitals from './reportWebVitals';


// Ne fonctionne pas sous react version 17
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/survey/:questionNumber" element={<Survey />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
