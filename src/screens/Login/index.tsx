import Label from "../../components/Form/Label";
import Link from "../../components/Link";
import {
    AppleOAuthIcon,
    AuthenticationContent,
    AuthenticationWrapper,
    ButtonAuthenticationOAuth,
    FormContainer,
    GoogleOAuthIcon,
} from "../../patterns/Header/components/ModalAuthentication/styles";
import { Divider } from "../../patterns/Header/styles";

const Login = () => {
    return (
        <AuthenticationContent>
            <AuthenticationWrapper>
                <section>
                    <ButtonAuthenticationOAuth typeAuthentication="Apple">
                        <AppleOAuthIcon />
                        <span>
                            Entrar com o <br />
                            Apple
                        </span>
                    </ButtonAuthenticationOAuth>
                    <ButtonAuthenticationOAuth typeAuthentication="Google">
                        <GoogleOAuthIcon />

                        <span>
                            Entrar com o <br />
                            Google
                        </span>
                    </ButtonAuthenticationOAuth>
                </section>
            </AuthenticationWrapper>
            <aside>
                <Divider />
                <p>ou</p>
                <Divider />
            </aside>
            <FormContainer>
                <div>
                    <Label htmlFor="login" text="E-mail ou CPF" />
                    <input id="login" type="text" placeholder="E-mail ou CPF" />
                </div>
                <div>
                    <Label htmlFor="password" text="Senha" />
                    <input id="password" placeholder="Senha" type="password" />
                </div>
                <div>
                    <Link href="/">Esqueci minha senha</Link>
                    <button type="submit">Entrar</button>
                </div>

                <aside>
                    <span>Usuário novo?</span>
                    <Link href="/cadastro" target="_self">
                        Cadastre-se
                    </Link>
                </aside>
            </FormContainer>
        </AuthenticationContent>
    );
};

export { Login };
