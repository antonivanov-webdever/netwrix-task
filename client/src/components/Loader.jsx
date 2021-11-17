import React from 'react';

const Loader = () => {
    return (
        <div className="loader">
            <svg>
                <circle cx="50" cy="50" r="40" stroke="#0973ba" strokeDasharray="78.5 235.5" strokeWidth="3" fill="none"></circle>
                <circle cx="50" cy="50" r="30" stroke="dodgerblue" strokeDasharray="62.8 188.8" strokeWidth="3" fill="none"></circle>
            </svg>
        </div>
    );
};

export default Loader;