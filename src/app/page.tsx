"use client";
import React, { useState } from "react";
import SignUp from "@/app/sign-up/SignUp";
import InputField from "@/components/input-field/input-field";

export default function Home() {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <SignUp />
      <InputField
        placeholder="First Name"
        type="text"
        errorMessage="First Name cannot be empty"
        onChange={(value) => setFirstName(value)}
        errorPlaceholder="TESTING FOR ERROR PLACEHOLDER USAGE"
      />
    </>
  );
}
