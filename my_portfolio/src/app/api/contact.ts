import type { NextApiRequest, NextApiResponse } from 'next';
import { saveContactMessage } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const data = await saveContactMessage(req.body);
    res.status(200).json({ message: 'Message saved!', data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
