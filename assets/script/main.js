const app=Vue.createApp({
    data:function(){
      return{
        choosen: '',
        appName:'firstApp',
        name:'yourName',
        Bio:'your Bio',
        phoneNumber:'123456789',
        image:'./assets/images/oled-abstract-people-jsnzks1b36a58xfx.jpg',
        backgroundColor:'',
        buttonColor:'',
    }
},
methods:{
    changephoto(){

    },
    meli(){
        this.choosen='meli-code';
    },
    number(){
        this.choosen='number'
    },
    password(){
        this.choosen='password-generator'
    },
    engToPer(){
        this.choosen='pn-to-eng'
    },
    test(){
        alert(this.name+"   "+this.Bio+"   "+this.phoneNumber)
    }
}
});

