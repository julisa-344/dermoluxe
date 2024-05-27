import "./componentStyles/button.scss"

type ButtonProps = {
    onClick: () => void;
    text: string;
    type?: "primary" | "outline";
    className?: string;
};

function Button({className, onClick, text, type = "primary" }: ButtonProps) {
    const buttonClassName = type === "outline" ? "btn-outline" : "btn-primary";

    return (
        <div>
            <button className={String(buttonClassName) + " btn-common " + String(className)} onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;