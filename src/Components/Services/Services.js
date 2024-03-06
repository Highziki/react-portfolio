import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* Description */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            velit mi, tincidunt et eros eu, volutpat rhoncus sem. Aenean
            lobortis odio justo, et mattis ipsum finibus ut. Sed sed lacus
            aliquet lorem dapibus posuere nec sit amet libero. Integer in
            vulputate justo. Aliquam pharetra, ante quis porttitor vehicula,
            libero enim fermentum libero, at semper velit nunc in risus. Mauris
            auctor consectetur dui non porttitor. Quisque porttitor euismod
            urna.
          </p>
          <button>Hire Me</button>
        </div>

        {/* Item */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Curabitur laoreet quam nec elit tincidunt, a semper ex
                condimentum. Phasellus purus neque, accumsan eget libero ut,
                eleifend ornare ex. In vehicula ligula id convallis
                pellentesque. Nunc urna eros, ullamcorper id dictum ac
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                Curabitur laoreet quam nec elit tincidunt, a semper ex
                condimentum. Phasellus purus neque, accumsan eget libero ut,
                eleifend ornare ex. In vehicula ligula id convallis
                pellentesque. Nunc urna eros, ullamcorper id dictum ac
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Mobile Development</h3>
              <p>
                Curabitur laoreet quam nec elit tincidunt, a semper ex
                condimentum. Phasellus purus neque, accumsan eget libero ut,
                eleifend ornare ex. In vehicula ligula id convallis
                pellentesque. Nunc urna eros, ullamcorper id dictum ac
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
