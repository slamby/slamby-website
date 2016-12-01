export class Price {
    constructor(
        public name: string,
        public tier: string,
        public core: number,
        public memory: number,
        public storage: number,
        public wholesale: number,
        public technicalFee: number,
        public slambyLicenseFee: number,
        public retailPrice: number,
    ){}
}