import {NnnBillingRepository} from "../repository/nnnBillingRepository.ts";
import {MemberRepository} from "../repository/memberRepository.ts";
import {BbbBillingConverter} from "../domain/bbb/billing/bbbBillingConverter.ts";
import {BbbBillingRepository} from "../repository/bbbBillingRepository.ts";

export class BbbBillingService {

    private memberRepository: MemberRepository = new MemberRepository();
    private nnnBillingRepository: NnnBillingRepository = new NnnBillingRepository();
    private bbbBillingRepository: BbbBillingRepository = new BbbBillingRepository();

    make(billingMonth: string): void {
        const nnnBillings = this.nnnBillingRepository.load(billingMonth)
        const bbbBillings = new BbbBillingConverter(nnnBillings).invoke()
        const bbbBillingsFixed = bbbBillings.map(bbbBilling => bbbBilling.fix(this.memberRepository.findBy(bbbBilling.caf)))
        this.bbbBillingRepository.register(bbbBillingsFixed)
    }


}