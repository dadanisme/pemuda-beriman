import Toastr from "../helper/Toastr";
import styles from "../../styles/custom.module.css";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.global}>
      <Toastr />
      {children}
    </div>
  );
};

export default Layout;
