import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore"; // Changed from "firebase/firestore"

const initFirebaseAdmin = () => {
    const apps = getApps();
    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL, // Fixed typo: EMIAL -> EMAIL
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            })
        });
    }
    return {
        auth: getAuth(),
        db: getFirestore() // Now using firebase-admin/firestore
    };
};

export const { auth, db } = initFirebaseAdmin();