export interface IPlayField {
    value: string;
    isWinningField?: boolean;
    currentPlayer: string;
    onClick: () => void;
}