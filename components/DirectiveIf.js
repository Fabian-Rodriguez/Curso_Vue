let DirectiveIf = {
    template: `
    <div>
        <h1 v-text="title"></h1>
        <p v-if="show" v-html="message"></p>
        <h1> Uso de v-if / v-else-if / v-else</h1>
        <p v-if="user.permision && user.vip"> el Usuario tiene permiso y es VIP</p>
        <p v-else-if="user.permision"> el Usuario tiene permiso</p>
        <p v-else-if="user.vip"> el Usuario es VIP </p>
        <p v-else=""> el Usuario no tiene permiso ni es VIP</p>
    </div>
    `,
    data() {
        return {
            title: "Directiva v-if",
            message: "<b>Hola desde directive v-if</b>",
            show: true,
            user:{
                permision:false,
                vip:true
            }
        }
    }
}