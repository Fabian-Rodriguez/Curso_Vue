Vue.component('computed-properties',{
    template:`
    <div>
        <h2>Computed Properties</h2>
        <p>{{fullName}}</p>
        <p>{{userAge}}</p>
    </div>
    `,
    data(){
        return {
            user:{
                name:"Jesus",
                lastName:"Lopez",
                year:"2002"
            }
        }
    },
    computed: {
        fullName() {
            return `${this.user.name} ${this.user.lastName} ${this.user.year}`
        },
        userAge(){
            let date = new Date()
            let currenYear = date.getFullYear()
            return currenYear - Number(this.user.year)
        }
    },
    methods:{
        nombreCompleto(){
            return `${this.user.name} ${this.user.lastName} ${this.user.year}`
        }
        
    }
})