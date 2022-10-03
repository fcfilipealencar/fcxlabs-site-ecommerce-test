import { rest } from "msw";
import data from "./data";

export const supportContactHandlers = [
    rest.get("/support-contact/options", (req, res, ctx) => {
        return res(ctx.json(data));
    }),
];
