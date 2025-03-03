import axiosPrivate from "../api/useAxiosPrivate";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  deleteUser,
} from "firebase/auth";

const axios = axiosPrivate();

export const signUp = async (fullname, email, password) => {
  let userCredential;
  try {
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await axios.post("/api/register", {
      firebase_uid: userCredential?.user?.uid,
      email,
      name: fullname,
    });

    await updateProfile(userCredential.user, { displayName: fullname });

    return userCredential.user;
  } catch (error) {
    if (userCredential?.user) {
      await deleteUser(userCredential.user);
      console.log("User deleted from Firebase due to failed API registration.");
    }
    throw error;
  }
};

export const signIn = async (email, password) => {
  const userCreds = await signInWithEmailAndPassword(auth, email, password);
  const response = await axios.get(
    `api/user?firebase_uid=${userCreds.user.uid}`
  );

  return { ...userCreds.user, user: response?.data?.user };
};

export const logout = async () => {
  return signOut(auth);
};
