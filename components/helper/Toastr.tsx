import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Toastr: React.FC = () => {
  const router = useRouter();
  const { snackType, snackMessage, snackOpen } = useSelector((state: any) => state.app); // prettier-ignore
  const text_colors =
    snackType === "info"
      ? "text-blue-500"
      : snackType === "success"
      ? "text-green-500"
      : snackType === "warning"
      ? "text-yellow-500"
      : "text-red-500";

  const bg_colors =
    snackType === "info"
      ? "bg-blue-100"
      : snackType === "success"
      ? "bg-green-100"
      : snackType === "warning"
      ? "bg-yellow-100"
      : "bg-red-100";

  return (
    <div
      className={
        "fixed top-3 z-20 max-w-96 " +
        (["login", "register"].includes(router.pathname)
          ? "left-1/2 md:left-1/4 -translate-x-1/2"
          : "md:right-3 right-1/2 translate-x-1/2 md:translate-x-0")
      }
      style={{
        display: snackOpen ? "block" : "none",
      }}
    >
      <div
        className={
          "flex py-2 px-4 mb-4 text-sm " +
          text_colors +
          " " +
          bg_colors +
          " rounded-lg"
        }
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">
          {snackType === "info"
            ? "Info"
            : snackType === "success"
            ? "Success"
            : snackType === "warning"
            ? "Warning"
            : "Error"}
        </span>
        <div>
          <p className="text-sm">{snackMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Toastr;
