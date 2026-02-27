// const admin = require("firebase-admin");
// const path = require("path");

// // Firebase project (fuel-verification-efff2) ki key ka path
// const serviceAccount = require("./firebase-key.json");

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });
// }

// const db = admin.firestore();
// module.exports = db;

const admin = require("firebase-admin");
const path = require("path");

let serviceAccount;

// ✅ If running on Render (ENV exists)
if (process.env.FIREBASE_KEY) {
  console.log("🔥 Using Firebase ENV credentials");
  serviceAccount = JSON.parse(process.env.FIREBASE_KEY);
} 
// ✅ Otherwise use local file
else {
  console.log("💻 Using Local Firebase key file");
  serviceAccount = require("./firebase-key.json");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

module.exports = db;