import { Button } from "@mui/material";
import "../atoms/FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="welcome-back-login-to-your-ac-parent">
      <b className="welcome-back-login">
        Welcome Back! Login To Your Account Below
      </b>
      <div className="frame-parent2">
        <div className="rectangle-parent2">
          <div className="frame-child20" />
          <img
            className="apartment-icon"
            loading="lazy"
            alt=""
            src="/apartment.svg"
          />
        </div>
        <div className="frame-parent3">
          <div className="rectangle-parent3">
            <div className="frame-child21" />
            <img
              className="account-circle-icon6"
              loading="lazy"
              alt=""
              src="/account-circle.svg"
            />
          </div>
          <div className="rectangle-parent4">
            <div className="frame-child22" />
            <img
              className="encrypted-icon"
              loading="lazy"
              alt=""
              src="/encrypted.svg"
            />
          </div>
        </div>
      </div>
      <div className="c-r-m-logo">
        <div className="frame-parent4">
          <div className="forget-password-wrapper">
            <b className="forget-password">Forget Password</b>
          </div>
          <Button
            className="login1"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "25",
              borderColor: "#000",
              borderRadius: "20px",
              "&:hover": { borderColor: "#000" },
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
