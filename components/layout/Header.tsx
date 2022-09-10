import { Navbar, Dropdown, Avatar, Modal } from "flowbite-react";
import toastr from "../../lib/toastr";
import { logout } from "../../lib/auth";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);

  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    const isLogout = await logout();
    if (isLogout) {
      toastr("Logout successfully", "success");
      setShowModal(false);
      router.push("/login");
    } else {
      toastr("Logout failed", "error");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        style={{
          position: "fixed",
          width: "100%",
          padding: "0",
        }}
      >
        <div className="bg-main-yellow w-full flex items-center justify-between py-3 px-5">
          <div>
            <Link href="/">
              <a className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Iman Technologies
              </a>
            </Link>
          </div>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                user.providerData[0].photoURL ? (
                  <Avatar
                    alt="User settings"
                    img={user.providerData[0].photoURL}
                    rounded={true}
                  />
                ) : (
                  <AvatarPlaceholder />
                )
              }
            >
              <Dropdown.Header>
                <span className="block text-sm font-semibold">
                  {user?.displayName || "John Doe"}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item onClick={() => router.push("/profile")}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={toggleModal}>
                <span className="text-main-red font-semibold">Logout</span>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <div className="flex gap-2">
            <Link href="#top">
              <a className="text-sm bg-main-yellow hover:bg-yellow-300 rounded-md px-4 py-2">
                Home
              </a>
            </Link>

            <Link href="#about">
              <a className="text-sm bg-main-yellow hover:bg-yellow-300 rounded-md px-4 py-2">
                About
              </a>
            </Link>

            <Link href="#services">
              <a className="text-sm bg-main-yellow hover:bg-yellow-300 rounded-md px-4 py-2">
                Services
              </a>
            </Link>
          </div>
        </div>
      </Navbar>
      <Modal show={showModal} size="md" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Really want to logout?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-main-gray hover:bg-gray-200 rounded-md border"
                onClick={handleLogout}
              >
                Yes, I&apos;m sure
              </button>
              <button
                className="px-4 py-2 bg-main-red hover:bg-red-700 rounded-md text-white border"
                onClick={closeModal}
              >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

function AvatarPlaceholder() {
  return (
    <div className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-700">
      <svg
        className="w-6 h-6 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
      </svg>
    </div>
  );
}

export default Header;
