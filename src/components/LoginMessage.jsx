const LoginMessage = (props) => {
  const { isValid, message } = props;

  return <p classname={isValid ? "success" : "error"}>{message}</p>;
};

export default LoginMessage;
