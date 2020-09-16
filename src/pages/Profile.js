import React, { useEffect } from "react";
import { useList } from "effector-react";
import { useParams } from "react-router-dom";

import { $pokemon, getSinglePokemonFx } from "../model";
import { Grid, SingleCard, Label, Badge } from "../styled/Components";

const Profile = () => {
    const { id } = useParams();

    useEffect(() => {
        getSinglePokemonFx(id);
    }, [id]);

    const search = useList($pokemon, ({ name, image, idx, res }) => (
        <SingleCard key={idx}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <div>
                <Label>Types:</Label>
                {res.data.types.map((type, i) => (
                    <Badge key={i}>{type.type.name}</Badge>
                ))}
            </div>
            <div>
                <Label>Stats:</Label>
                {res.data.stats.map((stat, i) => (
                    <Badge key={i}>{stat.stat.name}</Badge>
                ))}
            </div>
        </SingleCard>
    ));

    return (
        <React.Fragment>
            <Grid center card>
                {search}
            </Grid>
        </React.Fragment>
    );
};

export default Profile;
