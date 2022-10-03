import { ReactElement } from "react";
import { NextPageWithLayout } from "../../../pages/_app";
import RegisterComponent from "../../components/Register";
import Head from "../../infra/components/next/Head";
import Main from "../../patterns/Main";

const Register: NextPageWithLayout = () => {
    return <RegisterComponent />;
};

Register.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head />
            <Main>{page}</Main>
        </>
    );
};

export default Register;
