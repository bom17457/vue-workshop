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
    template:'<h3>new post</h3>'
})

new Vue({
    el:"#vue-app"
})