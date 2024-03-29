import FrameComponent from "../molecules/FrameComponent";

import "../atoms/LoginPage.css";
import "../atoms/FrameComponent.css";
import "../atoms/global1.css";
const LoginPage = () => {
  return (
    <div className="login-page">
      <section className="images">
        <h1 className="login">Login</h1>
        <div className="empty-space-parent">
          <img className="empty-space-icon" alt="" src="/empty-space@2x.png" />
          <div className="crm-2-1-parent">
            <img className="crm-2-1" alt="" src="/crm-2-1@2x.png" />
            <img
              className="crm-3-1-icon"
              loading="lazy"
              alt=""
              src="/crm3-1@2x.png"
            />
            <img className="crm-4-1-icon" alt="" src="/crm4-1@2x.png" />
            <img className="crm-5-1-icon" alt="" src="/crm5-1@2x.png" />
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default LoginPage;