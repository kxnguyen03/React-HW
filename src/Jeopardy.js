import React, { useState, useEffect } from 'react';

function Jeopardy() {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [category, setCategory] = useState(null);
  const [answerVisible, setAnswerVisible] = useState(false);
  
  // Fetch data from the API to get a random question
  useEffect(() => {
    fetch('https://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        setQuestion(data[0].question);
        setAnswer(data[0].answer);
        setCategory(data[0].category.title);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Update the state to show the answer
  const showAnswer = () => {
    setAnswerVisible(true);
  };

  // Fetch a new random question when the "Next Question" button is clicked
  const nextQuestion = () => {
    setAnswerVisible(false);
    fetch('https://jservice.io/api/random')
      .then(response => response.json())
      .then(data => {
        setQuestion(data[0].question);
        setAnswer(data[0].answer);
        setCategory(data[0].category.title);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <br />
      <h2>Test your knowledge, Jeopardy! style</h2>
      <p>Setting the Jeopardy! mood</p>
      <iframe width="350" height="200" src="https://www.youtube.com/embed/DykZEOV5wD4?si=OaXG4I3dLiz4KC74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {question && (
        <div>
          <p><b>Category:</b> {category}</p>
          <p><b>Question:</b> {question}</p>
          {answerVisible && <p><b>Answer:</b> What/Who is {answer}?</p>}
        </div>
      )}
      {!question && <p>Loading...</p>}
      <button className="jeopardy-button" onClick={nextQuestion}>
        Next Question
      </button>
      <button className="jeopardy-button" onClick={showAnswer}>
        Show Answer
      </button>
      <br></br>
      <br></br>
    </div>
  );
}

export default Jeopardy;
