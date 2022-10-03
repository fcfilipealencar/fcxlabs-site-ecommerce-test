import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { supportContactHandlers } from "./SupportContact";
import { utilInfoHandlers } from "./UtilInfo";
import { weddingGiftListHandlers } from "./WeddingGiftList";

const runMockServiceWorker = () => {
    if (typeof window === "undefined") {
        const server = setupServer(
            ...supportContactHandlers,
            ...utilInfoHandlers,
            ...weddingGiftListHandlers
        );
        server.listen({
            onUnhandledRequest: "bypass",
        });
    } else {
        const worker = setupWorker(
            ...supportContactHandlers,
            ...utilInfoHandlers,
            ...weddingGiftListHandlers
        );
        worker.start({
            onUnhandledRequest: "bypass",
        });
    }
};

export default runMockServiceWorker;
