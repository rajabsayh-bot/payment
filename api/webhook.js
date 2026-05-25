export default async function handler(req, res) {
  console.log('Webhook masuk:', req.body); // buat debug
  res.status(200).json({ received: true });
}
