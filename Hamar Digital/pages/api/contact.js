import dbConnect from '../../utils/dbConnect';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      return res.status(201).json({ success: true, data: contact });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
  res.status(405).json({ success: false, error: 'Method not allowed' });
}
