import { ButtonPrimary } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ text, onClick }) => {
    return (
        <ButtonPrimary onClick={onClick}>{text}</ButtonPrimary>
    )
}

export { Button };