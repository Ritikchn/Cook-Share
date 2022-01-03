import * as firebase from "firebase";
import "firebase/firestore";

export const addRecipie = (newRecipie) => {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  firebase
    .firestore()
    .collection("Recipies")
    .add({ ...newRecipie, createdAt: timestamp() })
    .then((msg) => console.log("added recipie ", msg.id))
    .catch((err) => console.log(err));
};

export async function getData() {
  var recipieList = [];
  var snapshot = await firebase
    .firestore()
    .collection("Recipies")
    .orderBy("createdAt")
    .get();
  snapshot.forEach((element) => {
    recipieList.push(element.data());
  });

  return recipieList;
}
