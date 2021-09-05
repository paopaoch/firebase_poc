<template>
    <div class="container mr-5 ml-5">
        <div v-html="'<h1>'+text4+'</h1>'   "></div>
        <div class="text-center">
            <div class="home-title-text text-jet mb-3 mt-5">
                Admin Post Page
                <hr
                    class="bg-cambridge-blue"
                    width="22%"
                    style="margin: auto; height: 0.5px"
                />
            </div>
        </div>


        <h5>Heading</h5>
        <b-form-textarea
            id="textarea"
            v-model="text2"
            placeholder="Enter your heading..."
            rows="1"
            max-rows="1"
        ></b-form-textarea>

        <br />

        <h5>Sub-heading</h5>
        <b-form-textarea
            id="textarea"
            v-model="text3"
            placeholder="Enter your sub-heading..."
            rows="3"
            max-rows="3"
        ></b-form-textarea>

        <br />

        <h5>Main Content</h5>
        <b-form-textarea
            id="textarea"
            v-model="text4"
            placeholder="Enter your main content..."
            rows="8"
            max-rows="8"
        ></b-form-textarea>

        <br />

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

        <br /><br />

        <div class="text-center">
            <b-button variant="outline-dark" @click="onClick()"
                >Submit</b-button
            >
        </div>

        <br /><br /><br />

    </div>



</template>


<script>

export default {
    data() {
        return {
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            files: null,
        };
    },
    methods: {
        onClick() {
			Array.from(this.files).forEach(file => {
				if (file.name.slice(-3)=='png'||file.name.slice(-3)=='jpg'){
				    alert('Submitted')
				} else{
				    alert('Wrong File Format')
				}
				
			});
				
			},
  
        },
    
};
</script>