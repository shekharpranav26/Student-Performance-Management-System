// src/components/ResultsFormDialog.js
import React, { useState, useEffect } from 'react';

const ResultsFormDialog = ({ student, onEditResults, onClose }) => {
    const [results, setResults] = useState({ Math: 0, Science: 0, English: 0 });

    useEffect(() => {
        if (student) {
            setResults(student.results);
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditResults(results);
    };

    return (
        <div className="dialog">
            <h2>Edit Results for {student.name}</h2>
            <form onSubmit={handleSubmit}>
 <label>
                    Math:
                    <input
                        type="number"
                        value={results.Math}
                        onChange={(e) => setResults({ ...results, Math: e.target.value })}
                    />
                </label>
                <label>
                    Science:
                    <input
                        type="number"
                        value={results.Science}
                        onChange={(e) => setResults({ ...results, Science: e.target.value })}
                    />
                </label>
                <label>
                    English:
                    <input
                        type="number"
                        value={results.English}
                        onChange={(e) => setResults({ ...results, English: e.target.value })}
                    />
                </label>
                <button type="submit">Save Results</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ResultsFormDialog;