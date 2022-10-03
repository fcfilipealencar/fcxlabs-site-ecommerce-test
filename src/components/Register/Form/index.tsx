// import { theme } from "../../../helpers/themes";
import { SpaceWrapper } from "../../../ui/SpaceWrapper";
import FormBody from "./Body";
import FormFooter from "./Footer";
import FormHeader from "./Header";
import { FormContainer, FormBox } from "./style";

const Form = () => {
    return (
        <FormContainer>
            <FormBox>
                <SpaceWrapper>
                    <FormHeader />
                    <FormBody />
                    <FormFooter />
                </SpaceWrapper>
            </FormBox>
        </FormContainer>
    );
};

export default Form;
