export class MenuItem {
    constructor(
        public name: string,
        public link: string,
        public customClass: string,
        public externalLink: boolean = false,
    ){}
}