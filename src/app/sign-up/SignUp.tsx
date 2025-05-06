import "@/app/sign-up/SignUp.css";
import React, { useState } from "react";
import InputField from "@/components/input-field/input-field";
import Button from "@/components/button/button";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign_up_container">
      <div className="sign_up_text_container">
        <div className="sign_up_text_container_text_1">
          <h1>Learn to code by watching others</h1>
        </div>
        <div className="sign_up_text_container_text_2">
          <p>
            See how experienced developers solve problems in real-time. Watcing
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
      </div>
      <div className="sign_up_inputs_container">
        <div className="sign_up_inputs_reminder">
          <p>
            <span>Try it free 7 days </span> then $20/mo. thereafter
          </p>
        </div>
        <div className="sign_up_inputs_container_two">
          <div className="sign_up_inputs_fields">
            <InputField
              placeholder="First Name"
              type="text"
              errorMessage="First Name "
              onChange={(value) => setFirstName(value)}
              errorPlaceholder="email@example/com"
            />
            <InputField
              placeholder="Last Name"
              type="text"
              errorMessage="Last Name "
              onChange={(value) => setLastName(value)}
              errorPlaceholder="email@example/com"
            />
            <InputField
              placeholder="Email Address"
              type="text"
              errorMessage="Email Address "
              onChange={(value) => setEmail(value)}
              errorPlaceholder="email@example/com"
            />
            <InputField
              placeholder="Password"
              type="text"
              errorMessage="Password "
              onChange={(value) => setPassword(value)}
              errorPlaceholder="email@example/com"
            />
          </div>
          <Button text="CLAIM YOUR FREE TRIAL" />
          <div className="sign_up_inputs_reminder_two">
            <p>
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
