import { Approval } from "./Approval";
import { ApprovalRequest } from "./ApprovalRequest";

export class ViceSchoolManagerApproval extends Approval{

    constructor(name: string){
        super(name);
    }

    reduceRequest(approvalRequest: ApprovalRequest) {
        if(5000<=approvalRequest.getCost() && approvalRequest.getCost()< 10000){
            console.log(`请求金额${approvalRequest.getCost()} 被 ${this.name} 处理了`);
        }else{
            this.approval.reduceRequest(approvalRequest);
        }
    }

}