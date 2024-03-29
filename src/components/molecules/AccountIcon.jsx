import { Button } from "@mui/material";
import "../atoms/AccountIcon.css";

const AccountIcon = () => {
  return (
    <div className="account-icon">
      <b className="welcome-back-login">
        Welcome Back! Login To Your Account Below
      </b>
      <div className="forget-password-link">
        <div className="login-input">
          <img
            className="apartment-icon"
            loading="lazy"
            alt=""
            src="/apartment.svg"
          />
          <img className="account-circle-icon6" loading="lazy" alt="" />
        </div>
      </div>
      <div className="c-r-m-logo">
        <div className="frame-parent2">
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

export default AccountIcon;
