import Image from "next/image";
import Header from "../components/header";
import profileImage from './image/image.png';

export default function Home() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <div className="my-intro">  
        <div className="name">
          <h1 className="text-4xl md:text-6xl"> Hey There</h1>
          <br />
          <br />
        <h1 className="text-4xl md:text-6xl">Muhammad Suleman</h1>
        <h2 className="text-2xl md:text-4xl">Frontend Developer</h2>
        </div>
        <div className="profile">
          <Image src={profileImage} alt="profile"
          className="rounded-full"
            width={250} 
            height={450} 
            sizes="(max-width: 768px) 50vw, 33vw" />
        </div>
      </div>
    </div>
  );
}
