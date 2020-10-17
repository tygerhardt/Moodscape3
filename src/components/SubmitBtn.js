import React from "react";

export function SubmitBtn({values, click} ) {
    return (
        <button className="submit-btn" onClick={() => {click(values)}}>
            Submit
        </button>
    )
}

export default SubmitBtn;