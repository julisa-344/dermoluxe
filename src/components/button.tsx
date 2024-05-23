import "./componentStyles/button.scss"
type ButtonProps = {
    onClick: () => void;
    text: string;
};

function Button({ onClick, text }: ButtonProps) {
    return (
        <div>
            <button className="btn-primary" onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;