import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DRINKS_URL}`)
    const drinks = await response.json()
    res.status(200).json({ drinks })
}

export default handler