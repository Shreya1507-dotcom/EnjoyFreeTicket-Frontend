import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import OtpInput from "react-otp-input";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api";
import FrameImage from '../assests/images/Frame-2.png';
import Logo from '../assests/images/loginLogo.png';

const ForgotPassword = () => {
  const [inputBox, setInputBox] = useState(false); // false = mobile, true = email
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
  const [passwordScreen, setPasswordScreen] = useState(false);
  const [otpCountDown, setOtpCountDown] = useState(0);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  /** -------------------------
   * Validate email or phone input
   -------------------------- */
  const validateUserField = () => {
    if (inputBox) {
      if (!userEmail.trim()) {
        toastr.error("Email is required");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        toastr.error("Enter valid email");
        return false;
      }
    } else {
      const digitsOnly = userPhone.replace(/\D/g, "");
      if (!digitsOnly) {
        toastr.error("Mobile number is required");
        return false;
      }
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        toastr.error("Enter valid mobile number");
        return false;
      }
    }
    return true;
  };

  /** -------------------------
   * Request OTP
   -------------------------- */
  const requestOtp = async () => {
    if (!validateUserField()) return;

    try {
      const formData = new FormData();
      formData.append("role", "studio");
      formData.append("email", userEmail);
      formData.append("step", 1);
      formData.append("mobile", userPhone);
      formData.append("otp", "");

      const response = await forgotPassword(formData);

      if (response?.data?.status) {
        toastr.success("OTP sent successfully");
        setOtpScreen(true);
        setOtpCountDown(120);
        setCanResendOtp(false);
      } else {
        toastr.error(response?.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      toastr.error(error?.response?.data?.message || "Something went wrong");
      console.error(error);
    }
  };

  /** -------------------------
   * Verify OTP
   -------------------------- */
  const verifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      toastr.error("Enter a valid 6-digit OTP");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("role", "studio");
      formData.append("step", 2);
      formData.append("email", userEmail);
      formData.append("mobile", userPhone);
      formData.append("otp", otp);

      const response = await forgotPassword(formData);
      if (response?.data?.status) {
        toastr.success("OTP Verified");
        setPasswordScreen(true);
        setOtpScreen(false);
      } else {
        toastr.error(response?.data?.message || "Invalid OTP");
      }
    } catch (error) {
      toastr.error(error?.response?.data?.message || "Something went wrong");
      console.error(error);
    }
  };

  /** -------------------------
   * Validate Password
   -------------------------- */
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  /** -------------------------
   * Submit new password
   -------------------------- */
  const submitNewPassword = async () => {
    if (!newPassword || !confirmPassword) {
      toastr.error("Both password fields are required");
      return;
    }

    if (!validatePassword(newPassword)) {
      toastr.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      toastr.error("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("role", "studio");
      formData.append("email", userEmail);
      formData.append("step", 3);
      formData.append("mobile", userPhone);
      formData.append("otp", otp);
      formData.append("newPassword", newPassword);
      formData.append("confirmPassword", confirmPassword);

      const response = await forgotPassword(formData);
      if (response?.data?.status) {
        toastr.success("Password Reset Successful");
        navigate("/photo/login");
      } else {
        toastr.error(response?.data?.message || "Password reset failed");
      }
    } catch (error) {
      toastr.error(error?.response?.data?.message || "Something went wrong");
      console.error(error);
    }
  };

  /** -------------------------
   * Handle resend OTP
   -------------------------- */
  const handleResendOtp = async () => {
    await requestOtp();
  };

  /** -------------------------
   * OTP countdown timer
   -------------------------- */
  useEffect(() => {
    if (otpCountDown <= 0) {
      setCanResendOtp(true);
      return;
    }

    const interval = setInterval(() => {
      setOtpCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [otpCountDown]);

  return (
    <div className="">
      <div className="row m-0 p-0">
        <div className="col-md-5">
          <div className="loginPadding">
            <div className="logo">
              <img className="img-fluid" src={Logo} alt="Logo" />
            </div>

            <div className="loginCotent">
              <h3>Change your Password</h3>
            </div>
            <label className="loginLabel">
              {inputBox ? 'Email' : 'Mobile'}
            </label>

            {/* Step 1: Choose Mobile or Email */}
            {!otpScreen && !passwordScreen && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  requestOtp();
                }}
              >
                {inputBox ? (
                  <input
                    type="email"
                    className="form-control createInput"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                ) : (
                  <PhoneInput
                    country={"in"}
                    value={userPhone}
                    onChange={setUserPhone}
                    inputClass="form-control inputLogin createInput mb-3"
                    placeholder="Enter Mobile Number"
                    countryCodeEditable={false}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        requestOtp(); 
                      }
                    }}
                  />
                )}

                <p
                  className="text-center userMail createMail"
                  style={{ cursor: "pointer" }}
                  onClick={() => setInputBox(!inputBox)}
                >
                  {inputBox ? "Use Mobile" : "Use Email"}
                </p>

                <button type="submit" className="w-100 loginBtn mt-3">
                  Send OTP
                </button>
              </form>
            )}

            {/* Step 2: Enter OTP */}
            {otpScreen && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  verifyOtp();
                }}
                className="text-center"
              >
                <h5>Enter OTP</h5>
                <OtpInput
                  value={otp}
                  onChange={(value) => setOtp(value.replace(/[^0-9]/g, ""))}
                  numInputs={6}
                  renderInput={(props, i) => (
                    <input
                      {...props}
                      key={i}
                      className="form-control mx-1"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "20px",
                        textAlign: "center",
                      }}
                    />
                  )}
                />
                <button type="submit" className="w-100 loginBtn mt-3">
                  Verify OTP
                </button>

                {canResendOtp ? (
                  <p
                    className="text-primary mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </p>
                ) : (
                  <p className="mt-2">
                    Resend OTP in {Math.floor(otpCountDown / 60)}:
                    {String(otpCountDown % 60).padStart(2, "0")}s
                  </p>
                )}
              </form>
            )}

            {/* Step 3: Reset Password */}
            {passwordScreen && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitNewPassword();
                }}
              >
                <h5 className="text-center">Create New Password</h5>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="w-100 loginBtn mt-3">
                  Reset Password
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right side background */}
        <div className="col-md-7 d-none d-md-block p-0 position-relative">
          <img
            className="img-fluid w-100 loginBgImg vh-100"
            src={FrameImage}
            alt="Background"
          />
          <div className="loginBookStudio position-absolute text-white p-4">
            <h3>Welcome to Bookstudio</h3>
            <p className="mb-0">Your Studio, Their Vision - A creative Connection.</p>
            <p>List your space and connect with passionate artists and creators who bring it to life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
