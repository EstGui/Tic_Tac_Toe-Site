import { PlayFieldContainer } from "./style";
import xImage from '/x.svg';
import oImage from '/o.svg';

interface IPlayField {
    value: string;
    currentPlayer: string;
    onClick: () => void;
}

const PlayField: React.FC<IPlayField> = ({ value, currentPlayer, onClick }) => {
    return (
        <PlayFieldContainer onClick={onClick}>
            {value ? (
                <img
                    src={value === "X" ? xImage : oImage}
                    alt={value}
                    draggable={false}
                    className="active"
                />
            ) : (
                <img
                    src={currentPlayer === "X" ? xImage : oImage}
                    alt={value}
                    draggable={false}
                    className="hint"
                />
            )}
        </PlayFieldContainer>
    )
}

export { PlayField };