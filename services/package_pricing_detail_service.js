const PackagePricingDetail = require("../models/package_pricing_detail");

const fetchingAll = async function () {
    return await PackagePricingDetail.find();
}

const create = async function (data) {
    const package_detail = new PackagePricingDetail({
        name: data.name,
        price: data.price,
    });
    await package_detail.save();
    return package_detail;
}

module.exports = {
    create,
    fetchingAll,
}