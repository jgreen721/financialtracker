import { db } from "../firebase";
import { addDoc, doc, onSnapshot, collection } from "firebase/firestore";

export const addTransactionToFirestore = async (transaction) => {
  try {
    let newDoc = await addDoc(collection(db, "transactions"), transaction);
    console.log("new document successfully added!");
  } catch (e) {
    console.log("error adding transaction.\n", e);
  }
};

export const fetchTransactionsFromFirestore = async (user) => {
  return new Promise((resolve, reject) => {
    console.log("Fetch transactions for " + user);
    let transactions = [];
    onSnapshot(collection(db, "transactions"), (snapshot) => {
      snapshot.forEach((entry) => {
        // console.log(entry.data());
        let entryData = entry.data();
        if (entryData.client == user) {
          transactions.push({ id: entry.id, ...entry.data() });
        }
      });
      resolve(transactions);
    });
  });
  // try {
  //   let newDoc = await addDoc(collection(db, "transactions"), transaction);
  //   console.log("new document successfully added!");
  // } catch (e) {
  //   console.log("error adding transaction.\n", e);
  // }
};
