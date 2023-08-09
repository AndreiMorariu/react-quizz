function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;

  function handleClick() {
    if (index < numQuestions - 1) dispatch({ type: 'nextQuestion' });
    else dispatch({ type: 'finish' });
  }

  return (
    <button className='btn btn-ui' onClick={handleClick}>
      {index < numQuestions - 1 ? 'Next' : 'Finish'}
    </button>
  );
}

export default NextButton;
