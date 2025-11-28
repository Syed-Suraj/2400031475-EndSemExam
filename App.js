import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  
  const students = [
    { id: 1, name: "Rahul", dob: "2002-11-28" },
    { id: 2, name: "Aisha", dob: "2003-03-10" },
    { id: 3, name: "Karan", dob: "2004-11-28" }
  ];

  
  useEffect(() => {
    const today = new Date().toISOString().slice(5, 10); // "MM-DD"

    students.forEach((student) => {
      const dob = student.dob.slice(5, 10);
      if (dob === today) {
        toast.success(`🎉 Today is ${student.name}'s Birthday!`);
      }
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Birthday List</h2>

      {students.map((s) => (
        <p key={s.id}>
          {s.name} — {s.dob}
        </p>
      ))}

      <ToastContainer />
    </div>
  );
}
