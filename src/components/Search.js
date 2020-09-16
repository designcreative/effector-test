import React from "react";
import { useStore } from "effector-react";
// Models
import { $input, getInputText, getPokemon } from "../model";

// Styled Components
import { Input } from "../styled/Components";

const Search = () => {
    const input = useStore($input);
    return (
        <div>
            <Input
                type="text"
                value={input}
                placeholder="Search pokemon"
                onChange={(e) => getInputText(e.target.value)}
            />
            {/* <button onClick={() => getPokemon()}>Search</button> */}
        </div>
    );
};

export default Search;
