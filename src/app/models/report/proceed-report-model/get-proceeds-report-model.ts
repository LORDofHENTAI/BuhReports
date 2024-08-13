export class GetProceedsReportModel {
    constructor(
        public Token: string,
        public Month: number,
        public Year: number,
        public startDate?: string,
        public endDate?: string
    ) { }
}