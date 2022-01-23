app.component('meli-code', {
    template:
        /*html*/
        `
     <div class="containerG containerCM ">
     <div class="inerContainer"> 
                       <h2 > صحت کد ملی</h2>
                       <input type="text" placeholder="کد خود را وارد کنید" v-model="checkedResult">
                       <div>
                         <button type="button" class="btnPG" @click="testCode">تایید</button>
                       </div>
                       <button type="button" class="btnPG">download  <i class="fab fa-github"></i></button>
                       </div>
                       
                     </div>
    `,
    data: function () {
        return {
            checkedResult: ''
        }
    },
    methods: {
        testCode() {
            if (this.EnglishNumber()) {
                if (this.checkedResult.length == 10) {
                    if (this.controlNumber()) {
                        alert('کد صحیح است');
                    }
                    else
                        alert('کد نامعتبر است');
                }
                else
                    alert('ده رقم باید وارد شود');
            }
        },
        controlNumber() {
            result = 0;
            j = this.checkedResult.length;
            for (i = 0; i < this.checkedResult.length - 1; i++) {
                result += this.checkedResult[i] * j;
                j--;
            }
            result = Math.floor(result % 11);

            if (result >= 2) {
                result = 11 - result;
            }

            if (result == this.checkedResult[this.checkedResult.length - 1])
                return true;
            else return false;
        },
        EnglishNumber() {
            pn = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

            for (z = 0; z < 11; z++) {
                if (this.checkedResult.includes(pn[z], 0)) {
                    alert('لطفا اعداد را به انگلیسی تغییر دهید')
                    return false;
                }
            }
            return true;
        }


    }

})