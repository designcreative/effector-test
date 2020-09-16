import React, { useEffect } from "react";
import { useList, useStore } from "effector-react";

// Models
import {
    $pokemons,
    $pokemon,
    $input,
    $page,
    getPokemonsFx,
    getSinglePokemonFx,
} from "../model";

import { RowCenter, Grid } from "../styled/Components";

import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Card from "../components/Card";

const Dashboard = () => {
    const input = useStore($input);
    const page = useStore($page);

    useEffect(() => {
        if (input) {
            getSinglePokemonFx(input);
        } else {
            getPokemonsFx(page);
        }
    }, [page, input]);

    const dashboard = useList($pokemons, (props) => (
        <div key={props.idx}>
            <Card {...props} />
        </div>
    ));

    const search = useList($pokemon, (props) => (
        <div key={props.idx}>
            <Card {...props} />
        </div>
    ));

    return (
        <React.Fragment>
            <RowCenter>
                <Search />
            </RowCenter>
            {input ? (
                <Grid center card>
                    {search}
                </Grid>
            ) : (
                <Grid center>{dashboard}</Grid>
            )}
            <RowCenter>
                <Pagination show={input} />
            </RowCenter>
        </React.Fragment>
    );
};

export default Dashboard;
