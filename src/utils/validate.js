export const checkValidDataForSignIn = (userEmail, userPassword) => {
  // its will return bool value "true or false"
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    userEmail
  );
  const isPasswordValid =
    /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userPassword);
  if (!isEmailValid) return "Email ID  is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const checkValidDataForSignUp = (userName, userEmail, userPassword) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName); // its will return bool value "true or false"
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    userEmail
  );
  const isPasswordValid =
    /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userPassword);

  if (!isNameValid) return "First letter must be capital !";
  if (!isEmailValid) return "Email ID  is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
