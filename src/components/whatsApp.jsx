import "./whatsApp.css";

import { useEffect, useState } from "react";

function getCurrentCourseName() {
  return window.currentCourseName || "Course";
}

export default function WhatsAppDirectButton() {
  const [courseName, setCourseName] = useState(getCurrentCourseName());

  useEffect(() => {
    function handleCourseNameChange() {
      setCourseName(getCurrentCourseName());
    }
    window.addEventListener("courseNameChanged", handleCourseNameChange);
    setCourseName(getCurrentCourseName());
    return () => {
      window.removeEventListener("courseNameChanged", handleCourseNameChange);
    };
  }, []);

  const defaultMessage = encodeURIComponent(
    `Hi SkipperX Team, I came across your ${courseName}\nI am really interested in this program and would like to know more details about it.\nPlease let me know if enrollment is currently open.\nThank you!`
  );
  const whatsappUrl = `https://wa.me/916366953507?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        borderRadius: "50%",
        background: "#25d366",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: 36, height: 36 }}
      />
    </a>
  );
}
