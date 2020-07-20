const service = require("../services/package_pricing_detail_service");

const fetchingPackageDetail = async function (req, res) {
    const package_details = await service.fetchingAll();
    res.send(package_details);
}

const createPackageDetail = async function (req, res) {
    const detail = await service.create(req.body);
    res.send(detail);
}

module.exports = {
    fetchingPackageDetail,
    createPackageDetail,
}