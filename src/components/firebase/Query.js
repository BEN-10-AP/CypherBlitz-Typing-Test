import { collection, query, where, orderBy } from "firebase/firestore";
import { db, leaderRef } from "./firebase";
const citiesRef = collection(db, "cities");

// Create a query against the collection.
leaderRef = query(leaderRef, where("state", "==", "CA"));

export default q;