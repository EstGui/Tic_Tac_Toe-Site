import { ButtonPrimary } from "./styles";

interface IButton {
    text: string;
    variant?: boolean;
    onClick: () => void; 
}

const Button: React.FC<IButton> = ({ text, onClick }) => {
    return (
        <ButtonPrimary onClick={onClick}>{text}</ButtonPrimary>
    )
}

export { Button };