class CPF {
    constructor(){
        this.cpf = this.gerar();
    }
    gerar(){
        let n = 9;
        let n1 = Math.round(Math.random() * n);
        let n2 = Math.round(Math.random() * n);
        let n3 = Math.round(Math.random() * n);
        let n4 = Math.round(Math.random() * n);
        let n5 = Math.round(Math.random() * n);
        let n6 = Math.round(Math.random() * n);
        let n7 = Math.round(Math.random() * n);
        let n8 = Math.round(Math.random() * n);
        let n9 = Math.round(Math.random() * n);

        let d1 = (n9 * 2) + (n8 * 3) + (n7 * 4) + (n6 * 5) + (n5 * 6) + (n4 * 7) + (n3 * 8 + n2 * 9) + (n1 * 10);
        d1 = 11 - (this.mod(d1, 11));
        if(d1 > 9){
            d1 = 0;
        } 
        let d2 = (d1 * 2) + (n9 * 3) + (n8 * 4) + (n7 * 5) + (n6 * 6) + (n5 * 7) + (n4 * 8) + (n3 * 9) + (n2 * 10) + (n1 * 11);
        d2 = 11 - (this.mod(d2, 11));
        if(d2 > 9){
            d2 = 0;
        }
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2; 
    }
    mod(dividendo, divisor){
            return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
        }
    }
    
const meuCPF = new CPF();
console.log(meuCPF);

