import {
  setSnackMessage,
  setSnackOpen,
  setSnackType,
} from "../store/slices/app";
import store from "../store";

export default function toast(
  message: string | undefined = "Something went wrong",
  type: "success" | "error" | "warning" | "info" | undefined
) {
  store.dispatch(setSnackMessage(message));
  store.dispatch(setSnackType(type));
  store.dispatch(setSnackOpen(true));
  let timeout = setTimeout(() => {
    store.dispatch(setSnackOpen(false));
    return () => clearTimeout(timeout);
  }, 2000);
}
