// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, push, ref, onValue } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Tu należy wstawić własne dane z panelu Firebase app:
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function createOrder(orderData) {
  push(ref(db, 'orders'), orderData);
}

export function getOrders(callback) {
  onValue(ref(db, 'orders'), (snapshot) => {
    const data = snapshot.val();
    callback(data);
  })
}