function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject("Missing first or last name");
    }
    const user = { firstName, lastName };
    resolve(`User ${firstName} ${lastName} created`);
  });
}

export { signUpUser };
