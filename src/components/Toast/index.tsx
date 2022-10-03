import { TitleToast, ToastContainer } from "./styles";

interface ToastMessage {
    title: string;
    type?: "success" | "error" | "info";
}

const Toast = ({ title, type }: ToastMessage) => {
    return (
        <ToastContainer type={type}>
            <TitleToast>{title}</TitleToast>
        </ToastContainer>
    );
};

export { Toast };
