// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(process.env.NODE_ENV === 'production'){
        return res.status(401).json({message: 'No autorizado'})
    }

    await db.connectDB();

    await db.disconnectDB();
  res.status(200).json({ message: 'Proceso realizado correctamente' })
}
