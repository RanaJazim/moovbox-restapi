const mongoose = require("mongoose");

const PackagePricingDetail = mongoose.model("PackagePricingDetail", {
    name: String,
    price: Number,
});

module.exports = PackagePricingDetail;