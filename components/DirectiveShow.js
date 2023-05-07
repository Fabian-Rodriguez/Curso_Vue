let DirectiveShow = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <p v-show="show" v-html="message"></p>
        <p v-show="user.permision"> el Usuario tiene permiso</p>
        <p v-show="!user.permision"> el Usuario no tiene permiso</p>
    </div>
    `,
    data() {
        return {
            title: "Directiva v-show",
            message: "<b>Hola desde directive v-show</b>",
            show: true,
            user:{
                permision:false,
            }
        }
    }
}