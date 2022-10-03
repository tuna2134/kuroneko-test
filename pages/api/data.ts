import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({
        name: 'mc_fdc',
        id: 884692310166761504,
    })
}