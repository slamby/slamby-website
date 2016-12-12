var MenuItem = (function () {
    function MenuItem(name, link, customClass, externalLink) {
        if (externalLink === void 0) { externalLink = false; }
        this.name = name;
        this.link = link;
        this.customClass = customClass;
        this.externalLink = externalLink;
    }
    return MenuItem;
}());
export { MenuItem };
//# sourceMappingURL=menu.model.js.map