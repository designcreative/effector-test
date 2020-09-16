import React from "react";
import { incrementPage, decrementPage } from "../model";
import { Button } from "../styled/Components";

const Pagination = ({ show }) => {
    if (show) return <div></div>;

    return (
        <div>
            <Button primary rounded onClick={() => decrementPage()}>
                Prev
            </Button>
            <Button primary rounded onClick={() => incrementPage()}>
                Next
            </Button>
        </div>
    );
};

export default Pagination;
