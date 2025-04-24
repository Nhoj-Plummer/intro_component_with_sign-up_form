"use client";
import React from "react";
import SignUp from "@/app/sign-up/SignUp";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <>
      <SignUp />
      <Button text="Testing Field!" />
    </>
  );
}
