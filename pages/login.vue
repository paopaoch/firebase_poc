<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-4 offset-4">
                <label for="">email</label>
                <input v-model="email" class="form-control" type="text" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-4 offset-4">
                <label for="">password</label>
                <input
                    v-model="password"
                    class="form-control"
                    type="password"
                />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-1 offset-7">
                <button @click="onClick()" class="btn btn-info">Login</button>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
    created() {
        const self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                self.$router.push("admin");
            } else {
                console.log("user is not logged in");
            }
        });
    },
    data() {
        return {
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        onClick() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    console.log(data);
                    firebase
                        .auth()
                        .currentUser.getIdToken(true)
                        // .then(token => {
                        //     // Cookies.set("access_token", token);
                        //     this.$cookiz.set("access_token", token, {
                        //         maxAge: 60 * 60 * 24 * 30
                        //     });
                        // });
                    this.$router.push("admin_post_page");
                })
                .catch(error => (this.error = error));
        },

        redirectAdmin() {
            this.router.push("admin");
        }
    }
};
</script>
