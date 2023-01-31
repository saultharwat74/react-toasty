interface ToastyProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  isOpen: boolean;
  onClose: () => void;
  position?:
    | "top-center"
    | "bottom-center"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
  className?: string;
  backgroundColor?: string;
  color?: string;
  autoClose?: number;
}
