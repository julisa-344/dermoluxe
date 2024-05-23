import './../theme.scss';
import Input from './../components/input';
function RegisterPage() {
    return (
        <>
            <section>
                <h2 className="title">Log in</h2>
                <Input placeholder="usuario@gmail.com" />

                <md-outlined-text-field label="Password" type="password">
                    <md-icon-button toggle slot="trailing-icon">
                        <md-icon>visibility</md-icon>
                        <md-icon slot="selected">visibility_off</md-icon>
                    </md-icon-button>
                </md-outlined-text-field>

                <md-checkbox touch-target="wrapper" checked></md-checkbox>
            </section>
            <section>
                
            </section>
        </>
    )
}
export default RegisterPage;