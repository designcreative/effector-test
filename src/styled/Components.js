import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.card ? "1fr" : "repeat(4, 1fr)")};
    width: 100%;
    max-width: 1140px;
    margin: auto;
    text-align: ${(props) => (props.center ? "center" : "left")};
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Row = styled.div`
    display: flex;
`;

export const RowCenter = styled.div`
    display: flex;
    justify-content: center;
`;

export const PokemonCard = styled.div`
    background: #fff;
    width: 100%;
    max-width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid #fff;
    margin: 16px auto;
    padding: 32px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.57, 0.07, 0.4, 0.89);
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba("#283D97", 0.75);
    }
`;

export const Input = styled.input`
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid #ddd;
    outline: none;
`;

export const Button = styled.button`
    background: ${(props) => (props.primary ? "#283D97" : "#F7CA4A")};
    color: ${(props) => (props.primary ? "#fff" : "#283D97")};
    border: 2px solid #283d97;
    border-radius: ${(props) => (props.rounded ? "16px" : "0")};
    cursor: pointer;
    padding: 5px 20px;
    margin: 0 5px;
    font-wight: bold;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
    outline: none;
    transition: all 0.25s cubic-bezier(0.57, 0.07, 0.4, 0.89);
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba("#283D97", 0.75);
    }
`;
