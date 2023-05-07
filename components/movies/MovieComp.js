let MovieComp = {
    template: `
    <div >
        <img :src="cover">
        <h2 v-text="title"></h2>
        <p v-text="synopsis"></p>
        <button @click="toggleLike" v-text="like ? 'Favoritas' : 'Agregar Favorita' "></button>
    </div>
    `,
    /* props:[
        "id",
        "title",
        "synopsis",
        "cover"
    ] */
    props: {
        id: {
            type: Number,
            require: true
        },
        title: {
            type: String,
            requre: true
        },
        synopsis: {
            type: String,
            default: "No posee sinopsis"
        },
        cover: {
            type: String,
            require: true
        },
        like: {
            type: Boolean,
            require: true,
            default() {
                return false
            }
        }
    },
    methods: {
        toggleLike() {
            /* let data = {
                id: this.id,
                like: !this.like
            } */

            let movie = this.$parent.movies.find(m => m.id == this.id);
            movie.like = !this.like
            this.$parent.showLike = !this.like

            //this.$emit("toggleLike", data)

        }
    },
} 