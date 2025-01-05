import { useState, useEffect } from "react";
import { BoardContainer, HorizontalLines, VerticalLines, Line, BoardFields, Wrapper } from "./styles";
import { PlayField } from "../PlayField";
import { api } from "../../services/api";
import { IBoard } from "./types";

const Board: React.FC<IBoard> = ({ player }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(true);
    const [winningFields, setWinningFields] = useState<number[] | null>(null);
    const [hintText, setHintText] = useState(player ? "Your Turn" : "AI Turn")

    useEffect(() => {
        const controller = new AbortController();

        const requestPlay = async () => {
            try {
                const response = await api.post(
                    '/play',
                    { board },
                    { signal: controller.signal},
                );

                const { play, victory, playFields } = response.data;

                if (victory == 1 || victory == -1 || playFields === true) {
                    if (playFields === true) {
                        setHintText("Nobody Won");
                    } else {
                        setHintText(victory === 1 && player ? "You Won" : "AI Won")
                        setWinningFields(playFields);
                    }
                    return;
                } else {
                    setHintText((currentPlayer === player) ? "Your Turn" : "AI Turn");
                }

                if (player !== currentPlayer) {
                    const timeoutId = setTimeout(() => handlePlay(play), 500);

                    return () => clearTimeout(timeoutId);
                } else {
                    return;
                }
            } catch (error: any) {
                if (error.name === "CanceledError") {
                    // console.log("Requisição cancelada");
                }
                else {
                    console.log("Houve um erro. Tente novamente", error);
                }
            }
        };

        requestPlay();

        return () => controller.abort();
    }, [currentPlayer]);


    const handlePlay = (index: number) => {
        const newBoard = [...board];
        newBoard[index] = currentPlayer ? 'X' : 'O';
        setBoard(newBoard);
        setCurrentPlayer(!currentPlayer);
    };

    const handleClick = (index: number) => {
        if (board[index] || player !== currentPlayer || winningFields) return;

        handlePlay(index);
    };


    return (
        <Wrapper>
            <span>{hintText}</span>
            <BoardContainer>
                <VerticalLines>
                    <Line></Line>
                    <Line></Line>
                </VerticalLines>
                <HorizontalLines>
                    <Line></Line>
                    <Line></Line>
                </HorizontalLines>

                <BoardFields>
                    {board.map((value, index) => (
                        <PlayField
                        key={index}
                        value={value}
                        isWinningField={winningFields?.includes(index)}
                        currentPlayer={currentPlayer ? 'X' : 'O'}
                        onClick={() => handleClick(index)}
                        />
                    ))}
                </BoardFields>
            </BoardContainer>
        </Wrapper>
    );
};

export { Board };
