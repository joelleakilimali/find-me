import toast, { ToastPosition } from "react-hot-toast";
import { NotificationType } from "../types";

const Notifications = (
  type: NotificationType,
  message: string,
  duration: number,
  position?: ToastPosition
) => {
  switch (type) {
    case "success":
      return toast.success(message, {
        duration: duration,
        position: position ? position : "top-center",
      });

    case "warning":
      return toast(message, {
        duration: duration,
        position: position ? position : "top-center",
        icon: "⚠",
      });
    case "error":
      return toast.error(message, {
        duration: duration,
        position: position ? position : "top-center",
      });
    default:
      return toast(message, {
        duration: duration,
        position: position ? position : "top-center",
      });
  }
};

export default Notifications;
