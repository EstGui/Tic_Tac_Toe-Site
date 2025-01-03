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
    
    .hint {
        opacity: .15;
        transition: .5s;
    }
    
    &:hover > .hint {
        opacity: 1;
    }
`