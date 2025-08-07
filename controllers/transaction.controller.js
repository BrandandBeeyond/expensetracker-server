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
  } catch (error) {}
};
