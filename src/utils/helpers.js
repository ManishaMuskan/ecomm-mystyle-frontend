/* eslint-disable import/prefer-default-export */
export const generateUID = () => {
  return Math.floor(Math.random() * Date.now()).toString(16); // Generates a unique URT
};
