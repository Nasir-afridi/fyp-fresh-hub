import "../components/Otp/style-sheets/otp.css";

const otp = () => {
  return (
    <div className="otp-main-container">
      <div className="otp-heading text-center mt-5">
        <h1 className="otp">OTP</h1>
      </div>

      <div className="inputs text-center">
        <input type="text" placeholder="8" className="input-1" />
        <input type="text" placeholder="8" className="input-2" />
        <input type="text" placeholder="8" className="input-3" />
        <input type="text" placeholder="8" className="input-4" />
      </div>

      <div className="buttons d-grid text-center">
        <button className="nexts">Next</button>
      </div>
      <div className="last-text">
        <p className="last-texts mt-4">
          By creating an account, you are agreeing to our
          <a href="#"> User Agreement</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default otp;
