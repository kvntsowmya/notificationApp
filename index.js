function Notification(props) {
  const { className, message, icon } = props;
  const classContainer = `container ${className}`;
  return (
    <div className={classContainer}>
      <img src={icon} className="icon" />
      <p class="message">{message}</p>
    </div>
  );
}

const element = (
  <div>
    <h1>Notifications</h1>
    <div className="notification-container">
      <Notification
        className="info-msg"
        message="Information Message"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-msg"
        message="Success Message"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-msg"
        message="Warning Message"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error-msg"
        message="Error Message"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
