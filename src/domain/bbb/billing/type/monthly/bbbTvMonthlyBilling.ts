import {BbbMonthlyBilling} from "./bbbMonthlyBilling.ts";
import {NnnBilling, NnnBillingCode, UseDateTerm} from "../../../../nnn/billing/nnnBilling.ts";
import {Caf} from "../../../../nnn/contract/caf.ts";
import {Member} from "../../../member/member.ts";
import {BbbBillingFixed} from "../../bbbBilling.ts";
import {BbbBillingMemberCondition} from "../../condition/memberCondition.ts";

export class BbbTvMonthlyBilling implements BbbMonthlyBilling {
    static nnnCodes: NnnBillingCode[] = [NnnBillingCode.テレビ月額料金]
    readonly caf: Caf
    readonly amount: number
    readonly useDateTerm: UseDateTerm

    constructor(nnnBilling: NnnBilling) {
        this.caf = nnnBilling.caf
        this.amount = nnnBilling.amount
        this.useDateTerm = nnnBilling.useDateTerm
    }


    static convertTargetOnlyFrom(nnnBillings: NnnBilling[]): BbbTvMonthlyBilling[] {
        return nnnBillings
            .filter(BbbTvMonthlyBilling.isConvertTarget)
            .map(nttBilling => new BbbTvMonthlyBilling(nttBilling))
    }

    private static isConvertTarget(nnnBilling: NnnBilling): boolean {
        return this.nnnCodes.includes(nnnBilling.code)
    }

    fix(member: Member): BbbBillingFixed | null {
        return new BbbBillingMemberCondition(member, this).valid() ? new BbbBillingFixed(member, this) : null;
    }

}