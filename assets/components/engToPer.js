app.component('pn-to-eng', {
  template:
        /*html*/`<div class="containerCM containerG">
        <div class="inerContainer"> 
        <h1> تبدیل عدد فارسی و انگلیسی </h1>
        <input type="text" placeholder="عدد فارسی" v-model="numberPE">
        <div>
        <div class="resultPG">
        <p>{{resultPE}}</p>
        </div>
          <button type="button" class="btnPG" @click="assign">تایید</button>
        </div>
        <a type="button" class="btnPG">download<i class="fab fa-github"></i></a>
        </div>
        
      </div>`,
  data: function () {
    return {
      numberPE: '',
      resultPE: '',
      pn: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
      eng: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    }
  },
  methods: {
    assign() {
      temp = '';
      for (i = 0; i < 10; i++) {
        if (this.numberPE[0].includes(this.pn[i])) {
          temp = 'pn'
          break;
        }
      }
      if (temp == 'pn')
        this.PnToEng();
      else
        this.EngToper();
    },
    PnToEng() {
      temp = '';
      for (j = 0; j < this.numberPE.length; j++) {
        for (i = 0; i < 10; i++) {
          if (this.numberPE[j].includes(this.pn[i])) {
            temp += this.eng[i];
            break;
          }
        }
      }
      this.resultPE = temp;
    },
    EngToper() {
      temp = '';
      for (j = 0; j < this.numberPE.length; j++) {
        for (i = 0; i < 10; i++) {
          if (this.numberPE[j].includes(this.eng[i])) {
            temp += this.pn[i];
            break;
          }
        }
      }
      this.resultPE = temp;
    }
  }
});