let DirectiveFor = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <ul>
        <li v-for="(color,index) in list" v-text="color" :key="index"></li>
        </ul>

        <h3>Lista de un Objeto</h3>
        <ul>
        <li v-for="(item, key, index) in object_list" :key="index">
        {{key}}:{{item}}
        </li>
        </ul>

        <h3>Lista de un array con objetos</h3>
        <ul>
        <li v-for="(item, index) in other_list" :key="index">
        Nombre: {{item.name}} <br>
        Apellido: {{item.last_name}}<br>
        Nick: {{item.alias}} 
        </li>
        </ul>
    </div>
    `,
    data() {
        return {
            title: "Directiva v-For",
            message: "<b>Hola desde directive v-For</b>",
            list: ["Rojo", "Amarillo", "Azul", "Verde"],
            object_list: {
                name: "Jesus",
                last_name: "Lopez",
                alias: "Lovip"
            },

            other_list: [{
                name: "Jesus",
                last_name: "Lopez",
                alias: "Lovip"
            },
            {
                name: "Jorge",
                last_name: "Martinez",
                alias: "Jmar"
            },
            {
                name: "Ismael",
                last_name: "Carranza",
                alias: "Isama"
            },
            ]

        }
    }
}