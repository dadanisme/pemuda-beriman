import ReactLoading from "react-loading";

const SplashLoading: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-main-yellow flex items-center justify-center">
      <ReactLoading
        type="bubbles"
        color="#000"
        height={100}
        width={100}
        // className="mx-auto mt-96"
      />
    </div>
  );
};

export default SplashLoading;
