import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import data from './assets/data';  
import StartPage from './assets/StartPage';  
import timersound from './assets/timer-sound.mp3';  
import endSound from './assets/end.mp3';  // Import the end sound
import ParticleBackground from './assets/ParticleBackground'; // Import the ParticleBackground component

// Circular progress bar with label component
function CircularProgressWithLabel(props) {
  const { value } = props;

  const progressColor = value >= 50 ? 'white' : 'red'; 
  const shadowColor = value >= 50 ? '#3f82e8' : 'red';  

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
    >
      <CircularProgress
        size={60}
        variant="determinate"
        {...props}
        sx={{
          color: progressColor,
          boxShadow: `0 0 35px ${shadowColor}`,
          borderRadius: '50%',
          transition: 'box-shadow 0.3s ease, color 0.3s ease',
        }}
      />
    </Box>
  );
}

const App = () => {
  const [questionData, setQuestionData] = useState([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(null);
  const [seconds, setSeconds] = useState(10); // Changed to 10 seconds
  const [isActive, setIsActive] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(1);  

  const audioRef = useRef(null);
  const endAudioRef = useRef(null); // Reference for end audio

  useEffect(() => {
    const questionsArray = Object.values(data.team1);
    const shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
    setQuestionData(shuffledQuestions);
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (endAudioRef.current) { // Play end sound when time is up
        endAudioRef.current.play();
      }
    }

    if (audioRef.current && isActive && seconds > 0) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (quizStarted) {
      startTimer();
    }
  }, [quizStarted]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(10); // Reset to 10 seconds
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const startTimer = () => {
    setIsActive(true);
    setSeconds(10); // Start with 10 seconds
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleNextClick = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (questionData[nextIndex]) {
      setPreviousQuestionIndex(currentQuestionIndex);
      setCurrentQuestionIndex(nextIndex);
    } else {
      alert('No more questions for this team.');
    }
    setAnswerVisible(false);
  };

  const handleBackClick = () => {
    if (previousQuestionIndex !== null) {
      setCurrentQuestionIndex(previousQuestionIndex);
      const newPreviousQuestionIndex = previousQuestionIndex - 1;
      setPreviousQuestionIndex(newPreviousQuestionIndex >= 0 ? newPreviousQuestionIndex : null);
      setAnswerVisible(false);
    } else {
      alert('No previous questions.');
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const toggleAnswerVisibility = () => {
    setAnswerVisible(!answerVisible);
  };

  const handleTeamClick = (teamNumber) => {
    setCurrentTeam(teamNumber);
    setCurrentQuestionIndex(0);
    const questionsArray = Object.values(data[`team${teamNumber}`]);
    const shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
    setQuestionData(shuffledQuestions);
    setAnswerVisible(false);
    resetTimer();
    startTimer();
  };

  return (
    <div className="container">
      <ParticleBackground /> {/* Add ParticleBackground here */}
      {!quizStarted ? (
        <StartPage startQuiz={startQuiz} />
      ) : (
        <>
          <div className="next">
            <button className="btn-5" onClick={handleNextClick}>
              <span>next</span>
            </button>
          </div>

          <button className="backclick" onClick={handleBackClick}>
            <span>Back</span>
          </button>

          {/* Timer Box */}
          <div className="timer">
            <CircularProgressWithLabel value={(seconds / 10) * 100} /> {/* Update to 10 */}
            <h2>{seconds}</h2>
          </div>

          {/* Question Box with framer-motion */}
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="question-box"
          >
            <h1>{questionData[currentQuestionIndex]?.question}</h1>
          </motion.div>

          <div className="answer-box">
            {answerVisible && (
              <button className="answer">
                <span>{questionData[currentQuestionIndex]?.answer}</span>
              </button>
            )}
          </div>

          <button className="optiontwo" onClick={toggleTimer}>
            <span>{isActive ? String.fromCharCode(10074, 10074) : String.fromCharCode(9654)}</span>
          </button>

          <button className="optiontworeset" onClick={resetTimer}>
            <span>&#x21bb;</span>
          </button>

          <div className="buttonBox">
            <button className="btn6" onClick={toggleAnswerVisibility}>
              <span>{answerVisible ? 'hide' : 'show'}</span>
              <div className="border"></div>
              <div className="border"></div>
            </button>
          </div>

          <audio ref={audioRef} src={timersound} />
          <audio ref={endAudioRef} src={endSound} /> {/* Add end audio reference */}
        </>
      )}
    </div>
  );
};

export default App;
