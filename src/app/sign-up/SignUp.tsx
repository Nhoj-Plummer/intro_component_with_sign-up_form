import "@/app/sign-up/SignUp.css";
import React, { useState } from "react";
import InputField from "@/components/input-field/input-field";
import Button from "@/components/button/button";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <div className="sign_up_container">
      <div className="sign_up_text_container">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watcing
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
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
              placeholder="First Name"
              type="text"
              errorMessage="First Name "
              onChange={(value) => setFirstName(value)}
              errorPlaceholder="email@example/com"
            />
            <InputField
              placeholder="First Name"
              type="text"
              errorMessage="First Name "
              onChange={(value) => setFirstName(value)}
              errorPlaceholder="email@example/com"
            />
            <InputField
              placeholder="First Name"
              type="text"
              errorMessage="First Name "
              onChange={(value) => setFirstName(value)}
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
