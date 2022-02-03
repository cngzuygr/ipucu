import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithCredential,
	FacebookAuthProvider,
	GoogleAuthProvider,
} from "firebase/auth";
import {
	collection,
	getDocs,
	getFirestore,
	initializeFirestore,
} from "firebase/firestore";
import {
	FIREBASE_API_KEY,
	FACEBOOK_APP_ID,
	GOOGLE_IOS_CLIENT_ID,
	GOOGLE_ANDROID_CLIENT_ID,
} from "@env";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: "ipucu-dfc83.firebaseapp.com",
	projectId: "ipucu-dfc83",
	storageBucket: "ipucu-dfc83.appspot.com",
	messagingSenderId: "215729676538",
	appId: "1:215729676538:web:6297ee6e807b4a4fbe6943",
	measurementId: "G-TQGS9CX9L0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

//facebook login
export async function signUpFacebook() {
	try {
		await Facebook.initializeAsync({
			appId: FACEBOOK_APP_ID,
		});
		const { type, token } = await Facebook.logInWithReadPermissionsAsync({
			permissions: ["public_profile"],
		});

		if (type == "success") {
			const credential = FacebookAuthProvider.credential(token);

			signInWithCredential(auth, credential).catch((error) => {
				console.log(error);
			});
		}
	} catch ({ message }) {
		alert(`Facebook Login Error: ${message}`);
	}
}

//google login
export async function signUpGoogle() {
	try {
		const result = await Google.logInAsync({
			androidClientId: GOOGLE_ANDROID_CLIENT_ID,
			iosClientId: GOOGLE_IOS_CLIENT_ID,
			scopes: ["profile", "email"],
		});

		//console.log(result);

		if (result.type === "success") {
			const credential = GoogleAuthProvider.credential(result.idToken);

			signInWithCredential(auth, credential).catch((error) => {
				console.log(error);
			});
		} else {
			console.log("cancelled");
		}
	} catch (e) {
		return { error: true };
	}
}
