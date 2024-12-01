import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


//  Update the config
var firebaseConfig = {
  // ...Update config
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = app.firestore();
const auth = app.auth();


// Uncomment the following if you want to use emulator
// if (process.env.NODE_ENV === "development") {
//   firestore.useEmulator("localhost", 8080);
//   auth.useEmulator("http://localhost:9099");
// }

export { firebase, firestore, auth, app };
