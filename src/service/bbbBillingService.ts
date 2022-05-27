import {NnnBillingRepository} from "../repository/nnnbBillingRepository.ts";
import {BbbBillingFactory} from "../domain/bbb/bbbBilling.ts";

export class BbbBillingService {
    make(): void {
        const nnnBillings = new NnnBillingRepository().load()
        const bbbBillings = BbbBillingFactory.createBy(nnnBillings)
    }


}