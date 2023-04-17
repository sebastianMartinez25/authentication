import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { app, db } from "./firebase.js";
import { setupPosts, apikeyg, spreadSheetId } from "./postList.js";


//const docRef = db.collection('apis').doc('apikeygoogle');


const querySnapshot=await getDocs(collection(db, 'apis'))
setupPosts(querySnapshot.docs);
