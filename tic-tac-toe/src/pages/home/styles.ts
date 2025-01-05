import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 380px 100px;
    grid-template-areas: "title"
                         "board"
                         "options";
    gap: 30px;
    justify-items: center;
    align-items: center;
`

export const ControlsContainer = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const PlayerSelectorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    h3 {
        font-weight: 300;
    }
`
