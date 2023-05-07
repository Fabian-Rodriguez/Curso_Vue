Vue.component('vue-directives', {
    template: `<div>
        <h1 v-text="title">   </h1>
        <p v-text="text"></p>
        <a :href="link.href" v-text="link.text"></a>
        <DirectiveHtml/>
        <DirectiveShow/>
        <DirectiveIf/>
        <DirectiveFor/>
        <DirectiveOn/>
        <DirectiveModel/>
        <DirectiveSlot/>
        <DirectivePre/>
        <DirectiveOnce/>
    </div>
    `,
    data() {
        return {
            title:"Directivas de Vue.js",
            text: "texto de prueba de v-text",
            link:{
                text:'vuejs home',
                href:"https://vuejs.org/api/#Directives",
                title: "Documentacion vue"
            }
        }
    },
    components:{
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
        DirectivePre,
        DirectiveOnce
    }
})