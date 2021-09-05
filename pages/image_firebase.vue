<template>
    <div>
        <img :src="imageUrl" alt="" />
        <button @click="getImageUrl()">Click</button>
        <div>
            <h5>Add Photo(s)</h5>

            <b-form-file
                v-model="files"
                :state="Boolean(files)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                multiple
            ></b-form-file>
            <div class="mt-2">
                <div>Selected files:</div>
                <div v-for="(file, index) in files" :key="index">
                    {{ file.name }}
                </div>
            </div>
        </div>
        <button @click="upload()">upload</button>
    </div>
</template>
<script>
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

export default {
    data() {
        return {
            imageUrl: "",
            files: null
        };
    },
    methods: {
        async getImageUrl() { // this function is to get an image stored in firebase storage
            const storage = getStorage();
            const httpsReference = ref(storage, "phpMm9Pd9PM.jpg");
            getDownloadURL(httpsReference)
                .then(url => {
                    this.imageUrl = url;
                })
                .catch(error => {
                    switch (error.code) {
                        case "storage/object-not-found":
                            alert("File doesn't exist");
                            break;
                        case "storage/unauthorized":
                            alert(
                                "User doesn't have permission to access the object"
                            );
                            break;

                        case "storage/unknown":
                            alert(
                                "Unknown error occurred, inspect the server response"
                            );
                            break;
                    }
                });
        },
        upload() { // this function is to upload an image to firebase storage
            const storage = getStorage();
            const httpsReference = ref(storage, "test.png");
            uploadBytes(httpsReference, this.files[0]).then(snapshot => {
                console.log("Uploaded a blob or file!");
            });
        }
    }
};
</script>
<style></style>
