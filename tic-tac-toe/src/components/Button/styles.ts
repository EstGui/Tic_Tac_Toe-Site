import styled from "styled-components";

export const ButtonPrimary = styled.button`
    padding: 7px 22px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid var(--hights-blue);
    
    font-size: 20px;
    color: white;

    transition: .5s ease;

    @media (min-width: 500px) {
        &:hover {
            box-shadow: var(--shadow-blue);
        }
    }
` 