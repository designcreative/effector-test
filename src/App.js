import React, { useEffect } from "react";
import { useList, useStore } from "effector-react";
import styled from "styled-components";
import "./App.css";

// Models
import {
    $pokemons,
    $pokemon,
    $input,
    $page,
    getPokemonsFx,
    getSinglePokemonFx,
} from "./model";

// Assets
import logo from "./assets/logo.png";

// Components
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Card from "./components/Card";

// Styled components
import { Container, RowCenter, Grid } from "./styled/Components";

const App = () => {
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
        <Container>
            <RowCenter>
                <img src={logo} alt="logo" />
            </RowCenter>
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
        </Container>
    );
};

export default App;
