<template>
    <div>
        <h1>Hello this is the admin page</h1>
        <button @click="logout()" class="btn btn-info mt-4 mx-4">log me out</button>
    </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

export default {
    created() {
        const self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                self.$router.push("login");
            } else {
                console.log("user is logged in");
            }
        });
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => 
                this.$router.push('login')
            )
        }
    }
}
</script>
<style>
    
</style>