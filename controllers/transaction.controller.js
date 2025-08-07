const cloudinary = require("cloudinary");


const addTransaction = async (req, res) => {
  try {
    const {
      transactionType,
      date,
      time,
      amount,
      category,
      paymode,
      description,
      from,
      to,
    } = req.body;

    if (!date || !time || !amount || !category || !paymode || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!["expense", "income", "transfer"].includes(transactionType)) {
      return res.status(400).json({ message: "Invalid transaction type" });
    }

    let invoiceData = {public_id: null, url: null};

    if(req.files && req.files.invoice) {
        const result = await cloudinary.v2.uploader.upload(req.files.invoice[0].path, {
          folder: "transactions/invoices",
        });
        invoiceData = {
          public_id: result.public_id,    
          url: result.secure_url,
        };
    }

    
  } catch (error) {}
};
