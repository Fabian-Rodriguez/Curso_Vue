let DirectivePre = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <p v-pre>{{title}}</p>
    </div>
    `,
    data() {
        return {
            title: "Directiva v-pre",
        }
    }
}