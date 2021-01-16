export class ApprovalRequest {
    private cost: number;
    public getCost(): number {
        return this.cost;
    }

    constructor(cost: number) {
        this.cost = cost;
    }
}