const express = require("express");
const Payment = require("../models/PaymentModel");

const router = express.Router();

router.post("/payment", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send({ payment });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get('/paymentt', (req, res) => {
  Payment.find((err, payment) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(payment);
    }
  });
});


module.exports = router; 