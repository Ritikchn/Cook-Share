import * as firebase from "firebase";
import "firebase/firestore";

export const addRecipie = (newRecipie) => {
  firebase
    .firestore()
    .collection("Recipies")
    .add(newRecipie)
    .then((msg) => console.log("added recipie "))
    .catch((err) => console.log(err));
};

export async function getData() {
  var recipieList = [];

  var snapshot = await firebase.firestore().collection("Recipies").get();
  snapshot.forEach((element) => {
    recipieList.push(element.data());
  });

  return recipieList;
}
