const handleAsyncError = async (asyncFunction, ...args) => {
  try {
    return await asyncFunction(...args);
  } catch (error) {
    console.error('Error occurred:', error);
    // Optionally, handle errors with global state or UI notification

    throw new Error(error);
  }
};

export default handleAsyncError;
