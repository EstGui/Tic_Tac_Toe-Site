import { useState, useEffect } from "react";
import { BoardContainer, HorizontalLines, VerticalLines, Line, BoardFields } from "./styles"
import { PlayField } from "../PlayField";
import { api } from "../../services/api";

interface BoardProps {
    starterPlayer: boolean;
}

const Board: React.FC<BoardProps>= ({ starterPlayer }) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState(true);

    useEffect(() => {
        if (currentPlayer !== starterPlayer) {
            console.log("AI joga");
            const requestBody = {
                board: board
            }
            console.log(requestBody)
            try {
                const {} = api.post('/play', requestBody).then(response => console.log(response.data))
                                            .catch(error => console.error(error));
            } catch {
                alert("Houve um erro. Tente novamente.");
            }
        } else {
            console.log("Você joga");
        }
    }, [currentPlayer]);

    const handleClick = (index: number) => {
        if (board[index]) return;

        if (starterPlayer === currentPlayer) {
            const newBoard = [...board];
            
            newBoard[index] = currentPlayer ? 'X' : 'O';
            setBoard(newBoard);
            
            setCurrentPlayer(!currentPlayer);
        } else {
            window.alert('AI Turn')
        }
        console.log(board)

    };

    return (
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
                        currentPlayer={currentPlayer ? 'X' : 'O'}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </BoardFields>
        </BoardContainer>
    )
}

export { Board };