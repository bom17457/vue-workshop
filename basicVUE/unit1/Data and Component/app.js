Vue.component('showcomment', {
    props:['commentpost'],
    template:'<h5>{{commentpost}}</h5>'
})

new Vue({
    el: '#vue-app',
    data: {
        newComment: '',
        comments: [
            'สวัสดีตอนเข้า',
            'ทักทาย',
            'ยินดีด้วย',
            'สบายดี'
        ]
    },
    methods: {
        addComment: function () {
            this.comments.push(this.newComment);
            this.newComment = ''
        }
    }
})