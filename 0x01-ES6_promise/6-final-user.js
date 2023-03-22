import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName);
    const photo = await uploadPhoto(fileName);
    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photo }
    ];
  } catch (error) {
    return [
      { status: 'rejected', reason: error },
      { status: 'rejected', reason: error }
    ];
  }
}

export default handleProfileSignup;
