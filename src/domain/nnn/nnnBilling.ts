export class NnnBilling {
    private code: Code
    private amount: number

    constructor(code: Code, amount: number) {
        this.code = code
        this.amount = amount
    }
}

export enum Code {
    回線工事費 = 111,
    端末設置費 = 222,
    回線月額料金 = 333,
    電話工事費 = 444,
    電話月額料金 = 555,
    テレビ月額料金 = 666,
    テレビ工事費 = 777,
}