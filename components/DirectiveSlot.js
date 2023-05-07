let DirectiveSlot = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <buttonComp>
            <template v-slot:action>
                Prueba
            </template>
        </buttonComp>
    </div>
    `,
    data() {
        return {
            title: "Directiva v-slot",
        }
    },
    components: {
        buttonComp,
    }
}