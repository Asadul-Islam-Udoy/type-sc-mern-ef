import { useState, type FC } from "react";
import ApiUrl from "../../host/ApiUrl";
import { toast } from "react-toastify";

interface RegisterProps {}
interface userData {
  username: string;
  email: string;
  password: string;
}
const Register: FC<RegisterProps> = ({}) => {
  const [userData, setUserData] = useState<userData>({
    username: "",
    email: "",
    password: "",
  });

  const submitHanler = async(e: React.FormEvent) => {
    e.preventDefault();
    const config ={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(userData)}
    try{
        const response = await fetch(ApiUrl+'/api/users/register',config);
        if(response.ok){
            const result = await response.json();
            toast.success('user create successfully')
        }
        else{
            const error = await response.json();
            toast.error(error.message)
        }
    }
    catch(error:any){
        toast.error(error.message)
    }
  };
  return (
    <>
      <form onSubmit={submitHanler}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Username
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <input
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, username: e.target.value }))
            }
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </span>
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, email: e.target.value }))
            }
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="user@gmail.com"
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, password: e.target.value }))
            }
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="elonmusk"
          />
        </div>
        <button className="bg-blue-500 py-3 px-10 mt-3 ml-1">Submit</button>
      </form>
    </>
  );
};
export default Register;
