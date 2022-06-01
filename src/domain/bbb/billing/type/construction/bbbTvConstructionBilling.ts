import {BbbConstructionBilling, PayType} from "./bbbConstructionBilling.ts";
import {NnnBilling, NnnBillingCode, UseDateTerm} from "../../../../nnn/billing/nnnBilling.ts";
import {Caf} from "../../../../nnn/contract/caf.ts";
import {Member} from "../../../member/member.ts";
import {BbbBillingFixed} from "../../bbbBilling.ts";
import {BbbBillingMemberCondition} from "../../condition/memberCondition.ts";

export class BbbTvConstructionBilling implements BbbConstructionBilling {
    static nnnCodes: NnnBillingCode[] = [NnnBillingCode.テレビ工事費]
    readonly caf: Caf
    readonly amount: number
    readonly useDateTerm: UseDateTerm

    constructor(nnnBilling: NnnBilling) {
        this.caf = nnnBilling.caf
        this.amount = nnnBilling.amount
        this.useDateTerm = nnnBilling.useDateTerm
    }


    static convertTargetOnlyFrom(nnnBillings: NnnBilling[]): BbbTvConstructionBilling[] {
        return nnnBillings
            .filter(BbbTvConstructionBilling.isConvertTarget)
            .map(nttBilling => new BbbTvConstructionBilling(nttBilling))
    }

    private static isConvertTarget(nnnBilling: NnnBilling): boolean {
        return this.nnnCodes.includes(nnnBilling.code)
    }

    fix(member: Member): BbbBillingFixed | null {
        return new BbbBillingMemberCondition(member, this).valid() ? new BbbBillingFixed(member, this) : null;
    }


}