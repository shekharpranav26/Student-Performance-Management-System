// src/components/StudentFormDialog.js
import React, { useState, useEffect } from 'react';

const StudentFormDialog = ({ student, onAdd, onEdit, onClose }) => {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [enrollmentId, setEnrollmentId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [gender, setGender] = useState('');

    // Effect to populate the form if editing an existing student
    useEffect(() => {
        if (student) {
            setName(student.name);
            setFatherName(student.fatherName || '');
            setEnrollmentId(student.enrollmentId || '');
            setStartDate(student.startDate || '');
            setEndDate(student.endDate || '');
            setGender(student.gender || '');
        } else {
            setName('');
            setFatherName('');
            setEnrollmentId('');
            setStartDate('');
            setEndDate('');
            setGender('');
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {
            id: student?.id || Date.now(),
            name,
            fatherName,
            enrollmentId,
            startDate,
            endDate,
            gender,
        };

        if (student) {
            onEdit(studentData); // Call the edit function if editing
        } else {
            onAdd(studentData); // Call the add function if adding
        }
    };

    return (
        <div className="dialog">
            <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Father Name:</label>
                    <input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Enrollment ID:</label>
                    <input
                        type="text"
                        value={enrollmentId}
                        onChange={(e) => setEnrollmentId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Starts On:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ends On:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <div>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="male">Male</label>

                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            checked={gender === 'Female'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="female">Female</label>

                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="Other"
                            checked={gender === 'Other'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <button type="submit">{student ? 'Update' : 'Add'}</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default StudentFormDialog;
