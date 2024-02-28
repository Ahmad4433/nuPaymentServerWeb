const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    // billing_address: { type: Object },
    // company_details: { type: Object },
    // order_summary: { type: Object },
    // payment_details: { type: Object },
    // products: [{ type: Object }], 
    // shipping_address: { type: Object },
    // customer: { type: String },
    // date: { type: String },
    // email: { type: String },
    // invoice_amount: { type: String },
    // invoice_no: { type: String },
    // notes: { type: String },
    // status: { type: String },
    detail:{type:Object},
    logo:{type:String},
    user: { type: mongoose.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
