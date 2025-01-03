import { useState } from "react";
import { Board } from "../../components/Board";
import { Button } from "../../components/Button";
import { ControlsContainer, HomeContainer } from "./styles"

const Home = () => {
    const [player, setPlayer] = useState(true);
    const [boardKey, setBoardKey] = useState(0);

    const handlePlayerChange = () => {
        setPlayer(prev => !prev);
        setBoardKey(prevKey => prevKey + 1);
    }

    const handleRestart = () => {
        setBoardKey(prevKey => prevKey + 1);
    }

    return (
        <HomeContainer>
            <div id="title">
                <h1>Tic-Tac-Toe AI</h1>
            </div>
        
            <Board key={boardKey} starterPlayer={player}/>
            
            <ControlsContainer>
                <Button text={`Play as ${player ? 'X' : 'O'}`} variant={player} onClick={handlePlayerChange}/>
                <Button text="Restart" onClick={handleRestart}/>
            </ControlsContainer>
        </HomeContainer>
    )
}

export { Home };
