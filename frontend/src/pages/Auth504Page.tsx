import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const AuthNeed: React.FC = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/"); // Navigate to the home page
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default AuthNeed;
