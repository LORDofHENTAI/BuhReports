export class ProceedReportModel {
    constructor(
        public name: string,
        public realizCash: number,
        public cashCamo: number,
        public vozvrat: number,
        public realiBeznal: number,
        public vozvratBeznal: number,
        public realiIshop: number,
        public vozvratIshop: number,
        public itogo: number,
        public percent: number
    ) { }
}