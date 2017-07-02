import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */
    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  > 9) {
                result[i] = carryBit%10;
                result[i-1] = 1;
            }  else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    /* Method changing number
    *  @param {jQuery element} root Parent element
    */
    changeNumber(root) {
        super.changeNumber();
        let activeElement = root.find('.active');
        activeElement.attr('contenteditable', 'true');


    }
    initEvents(root) {
        super.initEvents();
          let cos =$(".tooltip");
         cos.prev().on('click', (event) => {
          this.checkNumber();
          console.log('nn');

         })
    }
    checkNumber() {
        super.checkNumber();
        this.updateResult();
    }

    /* Method changing Result
    */
    updateResult() {
         let root =  this.$calculatorDOMElement;
         let $resultNumber = root.children(".group-number").children(".result-bit");
         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
           $($resultNumber).eq(j).text(this.resultNumberArray[i]).css('text-align', 'center');
          
         }
    }
}

export { DecCalculator  };
