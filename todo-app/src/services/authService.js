import axiosPrivate from "../api/useAxiosPrivate";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const axios = axiosPrivate();

export const signUp = async (fullname, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await axios.post("/api/register", {
    firebase_uid: userCredential?.user?.uid,
    email,
  });
  await updateProfile(userCredential.user, { displayName: fullname });
  return userCredential.user;
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
