import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function ChangePassword() {
  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });

  const [conPass, setConPass] = useState();
  const [customerData, setCustomerData] = useState();
  // const [data, setData] = useState({
  //   userData,
  //   customerData,
  // });

  const [formErrors, setFormErrors] = useState({
    UserName: "",
    Password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    let response;
    if (typeof window !== "undefined") {
      response = JSON.parse(localStorage.getItem("loggedUser"));
    }
    setCustomerData(response);
    console.log("JSON: ", response);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("submit: ", userData);
      const isValid = ValidateForm();
      // console.log(isValid);
      //   debugger;
      if (isValid) {
        const data = {
          user: userData,
          customer: customerData,
        };

        console.log("Post Data", data);
        const response = await fetch("http://localhost:3000/api/user/insert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const myString = "Registraition Succesful! Please log in.";
          window.location.href = `/customers/login?myString=${myString}`;
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ValidateForm = () => {
    let errors = {};
    let isValid = true;

    // name validation
    if (!userData.UserName.trim()) {
      errors.UserName = "Username is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]{4,20}$/.test(userData.UserName)) {
      errors.UserName = "Username Invalid";
      isValid = false;
    }

    // password validation
    if (!userData.Password.trim()) {
      errors.Password = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        userData.Password
      )
    ) {
      errors.Password = "Invalid Password";
      isValid = false;
    }

    // confirm password validation
    if (!conPass) {
      errors.confirmPassword = "Password is required";
      isValid = false;
    } else if (!(userData.Password === conPass)) {
      errors.confirmPassword = "Password does not match";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  return (
    <>
      {/* <Layout title = 'Registration'/> */}
      <Layout title={"Change Password"} />
      <fieldset>
        <legend>Change Password</legend>
        <form onSubmit={handleSubmit}>
          <label>
            Current Password:
            <input
              type="password"
              name="CurrentPassword"
              //   value={userData.UserName}
              onChange={handleChange}
            />
            {formErrors.UserName && (
              <span className="error">{formErrors.UserName}</span>
            )}
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="newPassword"
              //   value={userData.Password}
              onChange={handleChange}
            />
            {formErrors.Password && (
              <span className="error">{formErrors.Password}</span>
            )}
          </label>
          <br />

          <label>
            Confirm Password:
            <input
              type="password"
              name="newConfirmPassword"
              onChange={(e) => {
                setConPass(e.target.value);
              }}
            />
            {formErrors.confirmPassword && (
              <span className="error">{formErrors.confirmPassword}</span>
            )}
          </label>
          <br />
          {/* Post data to user table then route to profile pic upload */}
          <button>Next</button>
        </form>
      </fieldset>
      {formErrors.Password && (
        <span className="error">
          The password must contain the following:
          <ul>
            <li>At least 8 characters long</li>
            <li>Have at least one lowercase letter</li>
            <li>Have at least one uppercase letter</li>
            <li>Have at least one digit</li>
            <li>Have at least one special character {"(@$!%*?&)"}</li>
          </ul>
        </span>
      )}

      {formErrors.UserName && (
        <span className="error">
          The Username must contain the following:
          <ul>
            <li>At least 3 characters long</li>
            <li>At most 16 characters long</li>
            <li>
              {`Only contain alphanumeric characters (letters A-Z, both lowercase
              and uppercase, and numbers 0-9), underscores (_), or hyphens (-)`}
            </li>
          </ul>
        </span>
      )}
    </>
  );
}
