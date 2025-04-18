import "@/app/sign-up/SignUp.css";

const SignUp = () => {
  return (
    <div className="sign_up_container">
      <div className="sign_up_text_container">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watcing scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className="sign_up_inputs_container">
        <div className="sign_up_inputs_reminder">Try it free 7 days then $20/mo. thereafter</div>
        <div className="sign_up_inputs_fields"></div>
      </div>
    </div>
  );
};

export default SignUp;
