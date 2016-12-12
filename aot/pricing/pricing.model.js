var Price = (function () {
    function Price(name, tier, core, memory, storage, wholesale, technicalFee, slambyLicenseFee, retailPrice) {
        this.name = name;
        this.tier = tier;
        this.core = core;
        this.memory = memory;
        this.storage = storage;
        this.wholesale = wholesale;
        this.technicalFee = technicalFee;
        this.slambyLicenseFee = slambyLicenseFee;
        this.retailPrice = retailPrice;
    }
    return Price;
}());
export { Price };
//# sourceMappingURL=pricing.model.js.map