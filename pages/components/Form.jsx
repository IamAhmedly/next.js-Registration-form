// ./pages/components/Form.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors, watch } = useForm();
  const [data, setData] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirm_password");

  async function onSubmit(formData) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const usernameAvailable = await checkUsernameAvailability(
      formData.username
    );

    async function checkUsernameAvailability(username) {
      if (username.toLowerCase() === "recoded") {
        return false;
      } else {
        return true;
      }
    }
    if (!usernameAvailable) {
      setUsernameExists(true);
      return;
    }
    // debugger;
    console.log("Form submitted:", formData);
    // setData(JSON.stringify(formData));
    handleGreen(true)
    setTimeout(() => {
      handleGreen(false)
    }, 3000);
  }

  function handleUsernameChange() {
    setUsernameExists(false);
  }

  function handleGreen(val) {
    setSubmitted(val);
  }
  errors ? console.log(errors) : "";
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <header>Registration form</header>
      <fieldset>
        <section>
          <label className="input">
            <i className="icon-append icon-user"></i>
            <input
              {...register("username", { required: true, maxLength: 80 })}
              placeholder="Username"
              onChange={handleUsernameChange}
            />
            {usernameExists && (
              <span className="warning">
                Exist! Please choose another username.
              </span>
            )}
            <b className="tooltip tooltip-bottom-right">
              at least 8 English characters and numbers
            </b>
          </label>
        </section>
        <section>
          <label className="input">
            <i className="icon-append icon-envelope-alt"></i>
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S{2,4}$/i,
              })}
              placeholder="Email address"
            />
            {/*  pattern: /^\S+@\S+\.\S{2,4}$/i */}
            {/*  pattern: /^\S+@\S+\.(com|net|org|edu|gov|mil|info|biz|co|io)$/i */}
            <b className="tooltip tooltip-bottom-right">
              Valid email Needed to verify your account
            </b>
          </label>
        </section>
        <section>
          <label className="input">
            <i className="icon-append icon-lock"></i>
            <input
              {...register("password", {
                required: true,
                min: 8,
                maxLength: 40,
              })}
              type="password"
              placeholder="Password"
            />
            <b className="tooltip tooltip-bottom-right">
              at least 8 characters and numbers and symbols
            </b>
          </label>
        </section>
        <section>
          <label className="input">
            <i className="icon-append icon-lock"></i>
            <input
              {...register("confirm_password", {
                required: true,
                validate: (value) => value === password,
              })}
              type="password"
              placeholder="Confirm password"
            />
            {password != confirmPassword && password.length > 7 && (
              <span className="warning">Passwords do not match</span>
            )}
            <b className="tooltip tooltip-bottom-right">
              Repate and Match the Password
            </b>
          </label>
        </section>
      </fieldset>

      <fieldset>
        <div className="row">
          <section className="col col-6">
            <label className="input">
              <input
                {...register("firstName", { required: true, maxLength: 80 })}
                placeholder="First name"
              />
              <b className="tooltip tooltip-bottom-right">
                Please type your First Name
              </b>
            </label>
          </section>
          <section className="col col-6">
            <label className="input">
              <input
                {...register("lastName", { required: true, maxLength: 80 })}
                placeholder="Last name"
              />
              <b className="tooltip tooltip-bottom-right">
                Please type your Last Name
              </b>
            </label>
          </section>
        </div>
        <section>
          <label className="checkbox">
            <input
              {...register("terms", { required: true })}
              type="checkbox"
              placeholder="terms"
            />
            <i className="relative"></i> I agree to the Terms of Service
          </label>
        </section>
      </fieldset>
      <footer>
        <button type="submit" className="button">
          Sign Up
        </button>
        {submitted && (
              <span className="warning !text-green-600 bottom-0 !text-[15px] font-bold ">
                Submitted!  
              </span>
            )}
      </footer>
      
    </form>
  );
}
