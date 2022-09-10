import Toastr from "../helper/Toastr";
import styles from "../../styles/custom.module.css";
import Header from "./Header";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={styles.global}>
      <Header />
      <Toastr />
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default Layout;
