new Vue({
    //el is element tag #id .class
    el:"#vue-app",
    data:{
        message:'Hello World.',
        name:"Akaporn Katip",
        count:0,
        job:"Student",
        age:21,
        status:false,
        foods:[],
        gender:'Male',
        website:'https://www.facebook.com/BomAkaporn',
    },
    methods: {
        getName:function(){
            return this.name;
        },
        setName:function(n){
            return this.name = n;
        },
        addAge:function(){
            this.age++;
            console.log(this.age)
        },
        SubtractAge:function(){
            this.age--;
            console.log(this.age);            
        },
        addCount:function(){
            this.count++;
            console.log(this.count);
        }
    },
})