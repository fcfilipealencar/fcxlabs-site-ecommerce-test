import { rest } from "msw";
import data from "./data";

const { paymentOptionsData, linkOptionsData } = data;

export const utilInfoHandlers = [
    rest.get("/util-info/payment-options", (req, res, ctx) => {
        return res(ctx.json(paymentOptionsData));
    }),
    rest.get("/util-info/link-options", (req, res, ctx) => {
        return res(ctx.json(linkOptionsData));
    }),
];
