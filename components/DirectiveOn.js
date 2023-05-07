let DirectiveOn = {
    template: `
    <header>
        <h1> {{ title }} </h1>
        <p v-text="message"></p>
        <p v-text="pelicula"></p>
        <button @click.stop="comprarEntrada">Comprar antrada</button> disponibles <span v-text="entradas"></span> 
        <div>
        <h1>Modificando vista y modelo</h1>
        <input type="text" :value="textInput" @keyup="updateDataTextInput">
        </div>
    </header>
`,
    data() {
        return {
            title: "Directiva v-on",
            message: 'Hola desde directiva v-on',
            welcome_text:"Bienvenido desde data",
            pelicula:"Dora",
            entradas : 5,
            textInput: "Valor por defecto input",
        }
    },
    methods:{
        decirHola(){  
            //debugger
            alert(this.welcome_text)
        },
        async updateDataTextInput (){
            this.textInput = event.target.value
        },
        async comprarEntrada(){
            if(this.entradas > 0) {
                this.entradas --
                return alert(`Entrada para ${this.pelicula} comprada `)
            }
            return alert("No hay entradas")
    },
}
}