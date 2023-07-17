export class LogsModel {
    constructor(
        public action: string,
        public user: string,
        public dateTime: string,
        public comment: string
    ) { }
}