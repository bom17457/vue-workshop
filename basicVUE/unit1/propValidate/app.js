//Vue Custom tag
//ต้องตัวเล็กทั้งหมด
Vue.component('post', {
    props:['title'],
    template: '<h3>{{title}}</h3>'
})

Vue.component('showview', {
    props:{
        title:{
            type:String,
            required:true,
            //pattern:/regex/
        },
        view:{
            type:Number,
            default:0
        }
    },
    template:'<h3>{{title}} | {{view}}</h3>'
})

new Vue({
    el:"#vue-app"
})