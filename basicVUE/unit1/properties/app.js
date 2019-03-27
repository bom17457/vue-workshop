//Vue Custom tag
//ต้องตัวเล็กทั้งหมด
Vue.component('btncount', {
    data:function(){
        return {
            count:0
        }
    },
    template:'<button v-on:click="count++">Click:{{count}}</button>'
})

Vue.component('post', {
    props:['title'],
    template:'<h3>{{title}}</h3>'
})

new Vue({
    el:"#vue-app"
})