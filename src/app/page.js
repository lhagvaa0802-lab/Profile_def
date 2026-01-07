import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Profile />
    </div>
  );
}

const Profile = () => {
  return <div className="my-auto mt-3 h-24 w-1 bg-green-500 "></div>;
};
