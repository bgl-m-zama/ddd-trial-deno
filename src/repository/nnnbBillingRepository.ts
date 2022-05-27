import {Code, NnnBilling} from '../domain/nnn/nnnBilling.ts'

export class NnnBillingRepository {
    load(): NnnBilling[] {
        return [
            new NnnBilling(Code.回線工事費, 12000),
            new NnnBilling(Code.端末設置費, 2000),
            new NnnBilling(Code.テレビ月額料金, 500),
            new NnnBilling(Code.回線月額料金, 4000),
            new NnnBilling(Code.テレビ工事費, 15000),
            new NnnBilling(Code.電話工事費, 9000),
            new NnnBilling(Code.電話月額料金, 800),
        ];
    }


}