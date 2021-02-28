app.component("photo-search", {
    props: {
        form: Object,
    },
    template:
        /*html*/
        `
    <div>
    <span :class="{'hidden' : form.search }"><i class="fas fa-search" @click="search"></i></span>
    <span :class="{'hidden' : !form.search}">
    <input class="px-2 border-2 border-red-800 mx-2 " placeholder="Please enter text" v-model="form.text">
    <button class="mx-2 rouned text-white px-1 py-1 bg-red-600" @click="cancel">Cancel</button>
    </span>
    </div>
   `,
    methods: {
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    }
});