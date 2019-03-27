new Vue({
    el:'#vue-app',
    data:{
        newData:{
            name:"",
            salary:0
        },
        empGroup:[{
            empName:"สมพร",
            salary: 5000
        },{
            empName:"สมศรี",
            salary: 4000
        }]
    },
    methods:{
        addEmp:function(){
            this.empGroup.push({empName:this.newData.name, salary:this.newData.salary})
            this.newData.name = ""
            this.newData.salary = 0            
        }
    }
})