var post = new Vue({
    el:"#post",
    data:{
        title:'อะไรเอ่ย',
        message:'ข้อความยาวๆ สามบรรทัด',        
    }
})

var comment = new Vue({
    el:"#comment",
    data:{
        text:'มันแค่บันทัดเดียวเว้ยยยย'
    }
})

var likeSystem = new Vue({
    el:"#likeSystem",
    data:{
        like:false
    },
    methods:{
        changeLike:function(){
            this.like = !this.like
        }
    }
})