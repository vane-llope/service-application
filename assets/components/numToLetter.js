app.component('number', {
    template:
        /*html*/
        ` <div class="containerCM containerG">
        <div class="inerContainer"> 
    <h1 >تبدیل عدد به حروف</h1>
    <input type="text" placeholder="عدد را وارد کنید" v-model="number">
    <div class="resultPG">
    <p>{{resultN}}</p>
    </div>
    
    <div>
      <button type="button" class="btnPG" @click="changeNumber">تایید</button>
    </div>
    <a type="button" class="btnPG">download <i class="fab fa-github"></i></a>
    </div>
    
    </div>`,
    data: function () {
        return {
            resultN: '',
            number: '',
            constLetters:
                [
                    ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
                    ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
                    ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
                    ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
                    ['', ' هزار', ' میلیون', ' میلیارد', ' بیلیون', ' بیلیارد', ' تریلیون', ' تریلیارد'],
                ]
        }
    },
    methods: {
        changeNumber() {
            this.numberToLetter();
        },
        numberToLetter() {
            if (this.number == 1000000)
                this.resultN = 'یک میلیون';

            else if (this.number.length == 1)
                this.resultN = this.length1(this.number);

            else if (this.number.length == 2)
                this.resultN = this.length2(this.number);

            else if (this.number.length == 3)
                this.resultN = this.length3(this.number);

            else if (this.number.length > 3 && this.number.length < 6)
                this.resultN = this.length4(this.number);

            else
                this.resultN = ' اعداد در محدوده ی زیر یک میلیون هستند'
        },
        length1(L1) {
            return this.constLetters[0][L1];
        },
        length2(L2) {

            temp = 0;
            if (L2 < 20)
                return this.constLetters[1][L2[1]];

            else {
                temp = this.constLetters[2][L2[0]];
                if (L2[1] != 0) {
                    temp += ' و ' + this.length1(L2[1]);
                }
            }
            return temp;
        },
        length3(L3) {
            temp = 0
            temp = this.constLetters[3][L3[0]];
            if (L3.slice(-2) >= 10)
                temp += ' و ' + this.length2(L3.slice(-2));
            else {
                if (L3[2] != 0)
                    temp += ' و ' + this.length1(L3.slice(-1));
            }
            return temp;
        },

        length4(L4) {
            tempResult = 0;
            temp = this.number.substring(0, this.number.length - 3);
            if (temp.length == 1) { tempResult = this.length1(temp) + this.constLetters[4][1]; }
            if (temp.length == 2) { tempResult = this.length2(temp) + this.constLetters[4][1]; }


            if (L4.length == 4 && L4[2] == 0 && L4[1] == 0) {
                if (L4[L4.length - 1] != 0)
                    tempResult += ' و ' + this.length1(L4.slice(-1));
            }
            else if (L4.length == 4 && L4[1] == 0)
                tempResult += ' و ' + this.length2(L4.slice(-2));

            else if (L4.length == 5 && L4[3] == 0 && L4[2] == 0) {
                if (L4[L4.length - 1] != 0)
                    tempResult += ' و ' + this.length1(L4.slice(-1));
            }

            else if (L4.length == 5 && L4[2] == 0)
                tempResult += ' و ' + this.length2(L4.slice(-2));

            else
                tempResult += ' و ' + this.length3(L4.slice(-3));
            return tempResult;
        }
    }

});