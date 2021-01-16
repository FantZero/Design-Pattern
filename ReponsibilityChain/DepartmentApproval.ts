import { Approval } from "./Approval";
import { ApprovalRequest } from "./ApprovalRequest";

export class DepartmentApproval extends Approval{

    constructor(name: string){
        super(name);
    }

    reduceRequest(approvalRequest: ApprovalRequest) {
        if(approvalRequest.getCost() < 3000){
            console.log(`请求金额${approvalRequest.getCost()} 被 ${this.name} 处理了`);
        }else{
            this.approval.reduceRequest(approvalRequest);
        }
    }

}