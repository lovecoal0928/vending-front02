import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch( method ) {
        case "GET":
            const response = await fetch(new URL(`${process.env.NEXT_PUBLIC_DRINKS_URL}`))
            const drinks = await response.json()

            res.status(200).json({ drinks })

            break

        default:
            res.setHeader("Allow", ["GET", "PUT"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

export default handler