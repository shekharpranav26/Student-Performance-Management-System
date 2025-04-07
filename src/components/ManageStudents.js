// src/components/ManageStudents.js
import React, { useState } from 'react';
import StudentFormDialog from './StudentFormDialog';
import ResultsFormDialog from './ResultsFormDialog'; // New dialog for editing results
import './ManageStudents.css'; // Import CSS for styling

const ManageStudents = ({ students, setStudents }) => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
    const [isResultsDialogOpen, setIsResultsDialogOpen] = useState(false);

    const handleAddStudent = (student) => {
        const newStudent = { ...student, results: { Math: 0, Science: 0, English: 0 }, id: Date.now() }; // Initialize results
        setStudents([...students, newStudent]); // Update parent state
        setIsStudentDialogOpen(false);
    };

    const handleEditStudent = (student) => {
        const updatedStudents = students.map((s) => (s.id === student.id ? student : s));
        setStudents(updatedStudents); // Update parent state
        setIsStudentDialogOpen(false);
    };

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents); // Update parent state
    };

    const openDialogForEdit = (student) => {
        setSelectedStudent(student);
        setIsStudentDialogOpen(true);
    };

    const openResultsDialog = (student) => {
        setSelectedStudent(student);
        setIsResultsDialogOpen(true);
    };

    const handleEditResults = (results) => {
        const updatedStudents = students.map((s) => (s.id === selectedStudent.id ? { ...s, results } : s));
        setStudents(updatedStudents); // Update parent state
        setIsResultsDialogOpen(false);
    };

    return (
        <div className="manage-students-container">
            <h2>Manage Students</h2>
            <button onClick={() => { setSelectedStudent(null); setIsStudentDialogOpen(true); }}>Add Student</button>
            <div className="students-list">
                {students.length === 0 ? (
                    <p>No students added yet.</p>
                ) : (
                    students.map((student) => (
                        <div key={student.id} className="student-item">
                            <span>{student.name}</span>
                            <div className="student-actions">
                                <button onClick ={() => openDialogForEdit(student)}>Edit</button>
                                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                                <button onClick={() => openResultsDialog(student)}>Edit Results</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {isStudentDialogOpen && (
                <StudentFormDialog
                    student={selectedStudent}
                    onAdd={handleAddStudent}
                    onEdit={handleEditStudent}
                    onClose={() => setIsStudentDialogOpen(false)}
                />
            )}
            {isResultsDialogOpen && (
                <ResultsFormDialog
                    student={selectedStudent}
                    onEditResults={handleEditResults}
                    onClose={() => setIsResultsDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default ManageStudents;