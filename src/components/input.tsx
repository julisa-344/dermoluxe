import'./componentStyles/input.scss';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';

type InputProps = {
    label?: string;
    placeholder: string;
};
function Input({label, placeholder}: InputProps) {
  return (
    <>
        <div className='input-content'>
            <label htmlFor="">{label}</label>
            <md-outlined-text-field label={placeholder}>
            </md-outlined-text-field>
        </div>
    </>
  );
}
export default Input;