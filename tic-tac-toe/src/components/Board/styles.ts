import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const BoardContainer = styled.div`
    position: relative;
    width: 340px;
    height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-area: "board";
`

export const VerticalLines = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: calc((100% - 4px) / 3);
`

export const HorizontalLines = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: calc((100% - 4px) / 3);
    transform: rotate(90deg);
`

export const Line = styled.div`
    width: 2px;
    height: 100%;
    background: #FFF;
`

export const BoardFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-items: center;
`