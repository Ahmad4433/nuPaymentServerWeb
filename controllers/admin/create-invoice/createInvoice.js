const Invoice = require("../../../models/Invoice");
const User = require("../../../models/User");
const createInvoice = async (req, res, next) => {

  const {
    // billing_address,
    // company_details,
    // order_summary,
    // payment_details,
    // products,
    // shipping_address,
    // customer,
    // date,
    // email,
    // invoice_amount,
    // invoice_no,
    // notes,
    // status,
    // userId
    data,
    userId
  } = req.body;

  console.log(data)

  try {
    const findedUser = await User.findById(userId);

    const newInvoice = new Invoice({
      // billing_address,
      // company_details,
      // order_summary,
      // payment_details,
      // products,
      // shipping_address,
      // customer,
      // date,
      // email,
      // invoice_amount,
      // invoice_no,
      // notes,
      // status,
      detail:data,
      user: userId,
      logo:req.file.path
    });

    const savedInvoice = await newInvoice.save();
    findedUser.invoice.push(savedInvoice._id);
    await findedUser.save();
    res
      .status(200)
      .json({ status: true, message: "invoice added successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = createInvoice;
