function FinishScreen({ points, totalPoints }) {
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage >= 80 < 100) emoji = '🥳';
  if (percentage >= 50 < 80) emoji = '😄';
  if (percentage >= 0 < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🤦';

  return (
    <p className='result'>
      {emoji} You scored <strong>{points}</strong> out of {totalPoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
