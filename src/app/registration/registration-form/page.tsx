"use client";

import { useEffect, useState } from "react";
import FacultyForm from "@/app/component/FacultyRegistrationForm";
import Form from "@/app/component/RegistrationForm";

const RegistrationPage = () => {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const type = localStorage.getItem("userType");
    setUserType(type);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center z-10">
      <div className="flex flex-col justify-items-start z-10 m-4 w-fit md:w-xl">
        <h1 className="self-start text-4xl font-mono font-bold text-gold mb-2 z-10 md:ml-8">
          Create Account
        </h1>

        {userType === "STUDENT" && <Form />}
        {userType === "FACULTY" && <FacultyForm />}
        {/* {!userType && <p className="ml-8 mt-4 text-red-500">User type not selected.</p>} */}
      </div>
    </div>
  );
};

export default RegistrationPage;
