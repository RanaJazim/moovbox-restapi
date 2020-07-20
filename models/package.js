const mongoose = require("mongoose");

const Package = mongoose.model("Package", {
    starting_date: Date,
    price: Number,
    detail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PackagePricingDetail",
    }
});

module.exports = Package;