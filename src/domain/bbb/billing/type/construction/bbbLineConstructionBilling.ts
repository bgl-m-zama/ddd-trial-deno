import {BbbConstructionBilling, PayType} from "./bbbConstructionBilling.ts";
import {NnnBilling, NnnBillingCode, UseDateTerm} from "../../../../nnn/billing/nnnBilling.ts";
import {Caf} from "../../../../nnn/contract/caf.ts";
import {Member} from "../../../member/member.ts";
import {BbbBillingFixed} from "../../bbbBilling.ts";
import {BbbBillingMemberCondition} from "../../condition/memberCondition.ts";

export class BbbLineConstructionBilling implements BbbConstructionBilling {
    static readonly nnnCodes: NnnBillingCode[] = [NnnBillingCode.回線工事費, NnnBillingCode.端末設置費]
    readonly caf: Caf
    readonly amount: number
    readonly useDateTerm: UseDateTerm

    constructor(nnnBilling: NnnBilling) {
        this.caf = nnnBilling.caf
        this.amount = nnnBilling.amount
        this.useDateTerm = nnnBilling.useDateTerm
    }

    static convertTargetOnlyFrom(nnnBillings: NnnBilling[]): BbbLineConstructionBilling[] {
        return nnnBillings
            .filter(BbbLineConstructionBilling.isConvertTarget)
            .map(nttBilling => new BbbLineConstructionBilling(nttBilling))
    }

    private static isConvertTarget(nnnBilling: NnnBilling): boolean {
        return this.nnnCodes.includes(nnnBilling.code)
    }

    fix(member: Member): BbbBillingFixed | null {
        return new BbbBillingMemberCondition(member, this).valid() ? new BbbBillingFixed(member, this) : null;
    }


}


