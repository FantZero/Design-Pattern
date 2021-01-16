import { ApprovalRequest } from "./ApprovalRequest";
import { CollegeApproval } from "./CollegeApproval";
import { DepartmentApproval } from "./DepartmentApproval";
import { SchoolManagerApproval } from "./SchoolManagerApproval";
import { ViceSchoolManagerApproval } from "./ViceSchoolManagerApproval";

/**
 * 责任链模式，单向循环链式结构，用类代替 if-else
 */
class Client {

    static main():void{
        const approvalRequest = new ApprovalRequest(11000);

        // 创建相关审批对象
        const departmentApproval = new DepartmentApproval('张主任');
        const collegeApproval = new CollegeApproval('李院长');
        const viceSchoolManagerApproval = new ViceSchoolManagerApproval('王副校长');
        const schoolManagerApproval = new SchoolManagerApproval('赵校长');

        // 加链子，环起来。这样不论从哪个类开始处理 最终都能找到负责人
        departmentApproval.setApproval(collegeApproval);
        collegeApproval.setApproval(viceSchoolManagerApproval);
        viceSchoolManagerApproval.setApproval(schoolManagerApproval);
        schoolManagerApproval.setApproval(departmentApproval);

        viceSchoolManagerApproval.reduceRequest(approvalRequest);
    }
}

Client.main();