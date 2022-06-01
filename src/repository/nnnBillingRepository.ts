import {NnnBillingCode, NnnBilling} from '../domain/nnn/billing/nnnBilling.ts'
import {Caf} from "../domain/nnn/contract/caf.ts";

export class NnnBillingRepository {
    load(billingMonth: string): NnnBilling[] {
        return [
            new NnnBilling(NnnBillingCode.回線工事費, new Caf("CAF00000001"), 12000, new Date("2022-05-01"), new Date("2022-05-01")),
            new NnnBilling(NnnBillingCode.端末設置費, new Caf("CAF00000002"), 2000, new Date("2022-05-01"), new Date("2022-05-01")),
            new NnnBilling(NnnBillingCode.テレビ月額料金, new Caf("CAF00000003"), 500, new Date("2022-05-01"), new Date("2022-05-30")),
            new NnnBilling(NnnBillingCode.回線月額料金, new Caf("CAF00000004"), 4000, new Date("2022-05-01"), new Date("2022-05-30")),
            new NnnBilling(NnnBillingCode.テレビ工事費, new Caf("CAF00000005"), 15000, new Date("2022-05-01"), new Date("2022-05-01")),
            new NnnBilling(NnnBillingCode.電話工事費, new Caf("CAF00000006"), 9000, new Date("2022-05-02"), new Date("2022-05-02")),
            new NnnBilling(NnnBillingCode.電話月額料金, new Caf("CAF00000007"), 800, new Date("2022-05-02"), new Date("2022-05-30")),
        ];
    }


}