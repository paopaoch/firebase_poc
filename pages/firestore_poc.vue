<template>
    <div>
        <h1>Hi This is Firestore test</h1>
        <button @click="onClick">click me</button>

        <div class="mt-4">
            <input v-model="user" type="text" />
            <button @click="onSubmit">Send to firestore</button>
        </div>
    </div>
</template>
<script>
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
export default {
    data() {
        return {
            user: ''
        }
    },
    methods: {
        async onClick() { // to retreive data from firestore
            const db = getFirestore();
            const docRef = doc(db, "users", "6");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        },
        async onSubmit() { // to send data to firestore
            const db = getFirestore();
            await setDoc(doc(db, "users", "2"), {
                username: this.user,
                age: 20
            });
        }
    }
};
</script>
<style></style>
