/**
 * @jest-environment jsdom
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { theme } from "../../helpers/themes";
import Footer from ".";

describe("<Footer/>", () => {
    it("should render footer and all elements inside it", async () => {
        await act(async () => {
            // cy.mount(<Footer />)
            render(
                <ThemeProvider theme={theme}>
                    <Footer />
                </ThemeProvider>
            );
        });

        expect(screen.getByTestId("footer")).toBeInTheDocument();
        expect(
            screen.getByTestId("support-contact-container")
        ).toBeInTheDocument();
        expect(screen.getByTestId("other-pages-button")).toBeInTheDocument();
        expect(screen.getByTestId("other-pages-accordion")).toBeInTheDocument();
        expect(screen.getByTestId("util-info-container")).toBeInTheDocument();
        expect(screen.getByTestId("fc-texts-container")).toBeInTheDocument();
    });

    it("Should open an close the other pages accordion", async () => {
        await act(async () => {
            // cy.mount(<Footer />)
            render(
                <ThemeProvider theme={theme}>
                    <Footer />
                </ThemeProvider>
            );
        });

        const button = screen.getByTestId("other-pages-button");
        const accordion = screen.getByTestId("other-pages-accordion");

        expect(button).toHaveTextContent("Outras páginas");

        expect(accordion).not.toBeVisible();
        fireEvent.click(button);
        expect(accordion).toBeVisible();
        fireEvent.click(button);
        expect(accordion).not.toBeVisible();
    });
});

export {};
