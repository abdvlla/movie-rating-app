import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    try {
      const data = await mutateAsync();
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
            Enter as a guest using the button below
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The database is from 'themoviedb', and it requires you to create an
            account, but you can continue as a guest using a session key.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <form action="">
              <button
                type="button"
                onClick={handleLogin}
                className="rounded-md bg-indigo-600 px-20 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
};
