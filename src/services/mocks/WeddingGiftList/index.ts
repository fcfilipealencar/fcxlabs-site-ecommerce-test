import { rest } from "msw";
import data from "./data";

export const weddingGiftListHandlers = [
    rest.get("/wedding-gift-list/couples", (req, res, ctx) => {
        return res(ctx.json(data));
    }),
];
