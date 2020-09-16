import React from "react";
import { PokemonCard } from "../styled/Components";

const Card = ({ name, image }) => {
    return (
        <PokemonCard>
            <img src={image} alt={name} />
            <p>{name}</p>
        </PokemonCard>
    );
};

export default Card;
