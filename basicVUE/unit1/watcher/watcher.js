new Vue({
    el: '#vue-app',
    data: {
        newData: {
            name: "",
            salary: 0
        },
        empGroup: [{
            empName: "สมพร",
            salary: 5000
        }, {
            empName: "สมศรี",
            salary: 4000
        }]
    },
    methods: {
        addEmp: function () {
            this.empGroup.push({
                empName: this.newData.name,
                salary: this.newData.salary
            })
            this.newData.name = ""
            this.newData.salary = 0
        },

        //ทำต่อจาก watcher แล้วค่อย render 
        showMessage: function(){
            alert('บันทึกข้อมูลเรียบร้อย')
        }
        //สามารถ ส่งค่า รับค่าได้
        /*summation: function (a, b) {
            var sum = a + b
            return sum;
        }*/
    },
    computed: {
        /**Watcher 
         * เมื่อทำคำสั่งของ computed เสร็จก็จะไปทำคำสั่ง watch
        */

        //**Compute */
        //ไม่สามารถส่งค่าเข้ามาทำงานได้ เรียกว่า getter method
        //compute จะตรวจการเปลียนแปลงของข้อมูลให้
        summation: function () {
            var sum = this.empGroup.reduce(function (value, data) {
                return value + Number(data.salary)
            }, 0)
            return sum;
        },
        average: function(){
            var sum = this.empGroup.reduce(function (value, data){
                return value + Number(data.salary)
            }, 0)
            return sum/this.empGroup.length
        }    
    },

    //ทำหลังจากที่ summation จาก compute ทำงานเสร็จ
    watch: {
        summation: function(){
            //call showMessage from methods
            this.showMessage();
        }
    },
})