Vue.component('computed-properties-get-set', {
    template: `
    <div>
        <h2>Computed Properties Get Set</h2>
        <p>{{fullName}}</p>
        <p>{{userAge}}</p>
    </div>
    `,
    data() {
        return {
            user: {
                name: "Jesus",
                lastName: "Lopez",
                year: "2002"
            }
        }
    },
    computed: {
        fullName: {
            get() {
                return `${this.user.name} ${this.user.lastName} ${this.user.year}`
            },
            set(item) {
                let name = item.split(' ')

                this.user.name[0] = name[0]
                this.user.lastName[0] = name[1]
            }
        },
        userAge() {
            let date = new Date()
            let currenYear = date.getFullYear()
            return currenYear - Number(this.user.year)
        }
    },
    methods: {
        nombreCompleto() {
            return `${this.user.name} ${this.user.lastName} ${this.user.year}`
        }
    }
})