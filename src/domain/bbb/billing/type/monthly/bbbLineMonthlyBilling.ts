import {BbbMonthlyBilling} from "./bbbMonthlyBilling.ts";
import {NnnBilling, NnnBillingCode, UseDateTerm} from "../../../../nnn/nnnBilling.ts";
import {Caf} from "../../../../nnn/caf.ts";
import {Member} from "../../../member.ts";
import {BbbBillingFixed} from "../../../bbbBilling.ts";
import {BbbBillingMemberCondition} from "../../condition/memberCondition.ts";

export class BbbLineMonthlyBilling implements BbbMonthlyBilling {
    static nnnCodes: NnnBillingCode[] = [NnnBillingCode.回線月額料金]
    readonly caf: Caf
    readonly amount: number
    readonly useDateTerm: UseDateTerm

    constructor(nnnBilling: NnnBilling) {
        this.caf = nnnBilling.caf
        this.amount = nnnBilling.amount
        this.useDateTerm = nnnBilling.useDateTerm
    }

    static convertTargetOnlyFrom(nnnBillings: NnnBilling[]): BbbLineMonthlyBilling[] {
        return nnnBillings
            .filter(BbbLineMonthlyBilling.isConvertTarget)
            .map(nttBilling => new BbbLineMonthlyBilling(nttBilling))
    }

    private static isConvertTarget(nnnBilling: NnnBilling): boolean {
        return this.nnnCodes.includes(nnnBilling.code)
    }

    fix(member: Member): BbbBillingFixed | null {
        return new BbbBillingMemberCondition(member, this).valid() ? new BbbBillingFixed(member, this) : null;
    }

}


