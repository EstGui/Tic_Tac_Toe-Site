import styled from "styled-components";

export const PlayFieldContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 85%;
    height: 85%;
    z-index: 0;
    color: var(--hights);

    .active {
        transition: stroke .5 ease fowards;
    }
    
    .hint {
        opacity: .0;
        transition: .5s;
    }

    .winning {
        stroke: red;
        animation: strokeColorChange .5s ease-in;
    }

    @media (min-width: 500px) {
        &:hover > .hint {
            opacity: .15;
        }
    }
`