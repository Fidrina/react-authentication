import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export default function() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const firstNameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  }

  const lastNameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  }

  const emailHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setemail(event.target.value);
  }

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setpassword(event.target.value);
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/sign-up`, {
        name: `${firstName} ${lastName}`,
        email,
        password,
      })
      .then((res) => {
        alert("User created!");
        setTimeout(() => {
          window.location.href = 'login';
        }, 1000);
      })
      .catch((err) => {
        if (err.response.status = 422) {
          alert(err.response.data.message);
        } else {
          alert("User email already exists!");
        }
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="rounded-lg shadow-lg bg-white p-6" onSubmit={submitHandler}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={firstName} onChange={firstNameHandler} aria-describedby="emailHelp123" placeholder="First name"></input>
          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={lastName} onChange={lastNameHandler}  aria-describedby="emailHelp124" placeholder="Last name"></input>
          </div>
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={email} onChange={emailHandler} placeholder="Email address"></input>
        </div>
        <div className="form-group mb-6">
          <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={password} onChange={passwordHandler} placeholder="Password"></input>
        </div>
        <button type="submit" className="w-full px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Sign up
        </button>
        <a href="login" className="block w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center">
          Cancel
        </a>
      </form>
    </div>
  );
}
