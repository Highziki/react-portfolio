import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg.png";

const Header = () => {
  return (
    <div className="header-container">
      {/* Header Content */}
      <div className="header-content">
        <h1>Hi! I'm</h1>
        <h2 className="fullName">Isaac Akinropo</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Node js Developer 💪",
              1000,
              "Express js Developer 🚀",
              1000,
              "Backend Developer ✅",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo
          ligula justo, ut rutrum lectus lacinia non. Suspendisse vel pulvinar
          lorem.
        </p>
        {/* payment-links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image Container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
