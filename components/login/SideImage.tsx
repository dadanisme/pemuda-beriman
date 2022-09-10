import Image from "next/image";

const SideImage: React.FC = () => {
  return (
    <div className="absolute right-0 h-screen w-1/2 bg-main-red top-0 hidden md:block">
      <Image
        src="/assets/images/side-image.jpg"
        alt="Login Image"
        layout="fill"
        className="object-cover"
        priority
      />
    </div>
  );
};

export default SideImage;
