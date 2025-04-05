import Image from "next/image";

function NotFound() {
  return (
    <div>
      <Image
        src={"/empty.png"}
        alt="empty"
        width={400}
        height={400}
        className={"mx-auto"}
      />
    </div>
  );
}

export default NotFound;
