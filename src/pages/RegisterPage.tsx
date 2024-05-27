import './../theme.scss';
import Input from './../components/input';
import { Checkbox, Icon, IconButton, TextField } from '@mui/material';
function RegisterPage() {
    return (
        <>
            <section>
                <h2 className="title">Log in</h2>
                <Input placeholder="usuario@gmail.com" />

                <TextField label="Password" type="password">
                    <IconButton slot="trailing-icon">
                        {/* se le quito el toggle btw */}
                        <Icon>visibility</Icon>
                        <Icon slot="selected">visibility_off</Icon>
                    </IconButton>
                </TextField>

                <Checkbox touch-target="wrapper" checked></Checkbox>
            </section>
            <section>
                
            </section>
        </>
    )
}
export default RegisterPage;