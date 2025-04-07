import React, { useState } from 'react';
import ManageStudents from './ManageStudents';
import ShowResults from './ShowResults';
import ResultsFormDialog from './ResultsFormDialog'; // Import ResultsFormDialog
import './Dashboard.css';

const Dashboard = () => {
    const [students, setStudents] = useState([]); // State to hold students
    const [activeSection, setActiveSection] = useState('manageStudents'); // State for active section
    const [selectedStudent, setSelectedStudent] = useState(null); // State for selected student
    const [isResultsDialogOpen, setIsResultsDialogOpen] = useState(false); // State for results dialog

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <button onClick={() => setActiveSection('manageStudents')}>Manage Students</button>
                <button onClick={() => setActiveSection('showResults')}>Show Results</button>
            </div>
            <div className="content">
                {activeSection === 'manageStudents' && (
                    <ManageStudents students={students} setStudents={setStudents} />
                )}
                {activeSection === 'showResults' && (
                    <ShowResults 
                        students={students} 
                        setSelectedStudent={setSelectedStudent} 
                        setIsResultsDialogOpen={setIsResultsDialogOpen} 
                    />
                )}
            </div>
            {isResultsDialogOpen && (
                <ResultsFormDialog
                    student={selectedStudent}
                    onEditResults={(results) => {
                        const updatedStudents = students.map((s) => (s.id === selectedStudent.id ? { ...s, results } : s));
                        setStudents(updatedStudents);
                        setIsResultsDialogOpen(false);
                    }}
                    onClose={() => setIsResultsDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;