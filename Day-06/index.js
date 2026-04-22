const checkPassword = (pass) => {
  // conditions
  const hasUpperCase = /[A-Z]/.test(pass);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
  const validLength = pass.length >= 8; // you can change length rule

  if (hasUpperCase && hasSpecialChar && validLength) {
    console.log("Valid Password");
  } else {
    console.log("Invalid Password");
  }
};

// Example usage
checkPassword("HELLO@123");  // Valid Password
checkPassword("hello123");   // Invalid Password