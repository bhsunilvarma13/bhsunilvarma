import Image from "next/image";

function ProfilePic() {
  return (
    <div className="w-full flex justify-center my-4">
      <Image
        src="/Profile.jpeg"
        width={200}
        height={200}
        alt="Sunil Varma"
        priority={true}
      />
    </div>
  );
}

export default ProfilePic;
