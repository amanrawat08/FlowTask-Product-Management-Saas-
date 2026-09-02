import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="    relative" >
      <div className="flex min-h-screen w-full absolute right-0 top-0   ">
        <img
          src="teamwork.svg"
          alt=""
          className="  absolute left-0 bottom-0 w-[34%] "
        />
        <img
          src="teamwork3.svg"
          alt=""
          className="  absolute right-0 bottom-0 w-[40%] "
        />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
