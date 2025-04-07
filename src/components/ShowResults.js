// src/components/ShowResults.js
import React from 'react';
import './ShowResults.css';

const ShowResults = ({ students = [], setSelectedStudent, setIsResultsDialogOpen }) => { // Default to an empty array
    return (
        <div className="show-results-container">
            <h2>Student Results</h2>
            <div className="results-list">
                {students.length === 0 ? (
                    <p>No results available.</p>
                ) : (
                    students.map((student) => (
                        <div key={student.id} className="result-item">
                            <h3>{student.name}</h3>
                            <ul>
                                {Object.entries(student.results).map(([subject, score]) => (
                                    <li key={subject}>
                                        {subject}: {score}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => {
                                setSelectedStudent(student); // Set the selected student
                                setIsResultsDialogOpen(true); // Open the results dialog
                            }}>
                                Edit Results
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ShowResults;