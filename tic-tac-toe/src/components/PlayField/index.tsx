import { PlayFieldContainer } from "./style";
import { IPlayField } from "./types";

const renderSymbol = (value: string, isHint: boolean, isWinningField?: boolean) => {
    const isX = value === "X" || (isHint && value === "X");
    let className = isHint ? "hint" : isX ? "X active" : "O active";

    if (isWinningField) className += " winning";

    return isX ? (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke="white">
            <line x1="30" y1="30" x2="70" y2="70" stroke-width="11" stroke-linecap="round" />
            <line x1="30" y1="70" x2="70" y2="30" stroke-width="11" stroke-linecap="round" />
        </svg>
    ) : (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke="white">
            <circle cx="50" cy="50" r="23" stroke-width="10" fill="none"/>
        </svg>
    );
};

const PlayField: React.FC<IPlayField> = ({ value, isWinningField, currentPlayer, onClick }) => {
    const isHint = !value;
    const symbol = value || currentPlayer;

    return (
        <PlayFieldContainer onClick={onClick}>
            {renderSymbol(symbol, isHint, isWinningField)}
        </PlayFieldContainer>
    );
};

export { PlayField };
