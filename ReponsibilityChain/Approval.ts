import { ApprovalRequest } from "./ApprovalRequest";

export abstract class Approval {
    protected name: string;
    protected approval: Approval;

    constructor(name: string) {
        this.name = name;    
    }

    setApproval(approval: Approval): void{
        this.approval = approval;
    }

    abstract reduceRequest(approvalRequest: ApprovalRequest): void;
}