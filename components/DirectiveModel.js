let DirectiveModel = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <p  v-html="message"></p>
        <input type="text" v-model="inputText">

        <h2>Tipo checkbox</h2>
        <label>
            <input type="checkbox" v-model="checked">
            Activado
        </label>

        <h2>Peliculas</h2>

        <label v-for="(movie, key) in movies" :key="key">
        <input :value="movie" type="checkbox" v-model="favoritesMovies">
        {{movie}}
        </label>

        <div v-show="favoritesMovies.length > 0">
        <h1>Peliculas Favoritas</h1>
        <ul>
            <li v-for="(favorite, key) of favoritesMovies" :key="key">
            {{favorite}}
            </li>
        </ul>
        </div>
    </div>
    `,
    data() {
        return {
            title: "Directiva v-model",
            message: "<b>Hola desde directive v-model</b>",
            inputText: "Data del input",
            checked: false,
            favoritesMovies: [],
            movies: ['Buscando a Nemo', 'Titanic', 'Toy Storie']
        }
    }
}