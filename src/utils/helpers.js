/* eslint-disable import/prefer-default-export */
export const generateUID = (timestamp) => {
  return Math.floor(
    Math.random() * (timestamp || Date.now()) * Math.random()
  ).toString(16); // Generates a unique URT
};

export const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600).toString();
  const mins = Math.floor((seconds % 3600) / 60).toString();
  const secs = (seconds % 60).toString();

  if (hrs > '0') {
    return `${hrs.padStart(2, '0')}:${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`;
  }
  return `${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`;
};
