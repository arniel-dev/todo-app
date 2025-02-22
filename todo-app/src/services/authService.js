import axiosPrivate from "../api/useAxiosPrivate";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const signUp = async (fullname, email, password) => {
  const axios = axiosPrivate();
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
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return signOut(auth);
};
