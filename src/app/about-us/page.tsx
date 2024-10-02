import Image from "next/image";
import Header from "@/components/header";
import styles from './page.module.css'; 
import profileImage from "../image/image.png"

export default function About() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <div className={styles.about}>  
        <div className={styles.name}>
          <h1 className="font-bold text-4xl md:text-6xl">Hey There</h1>
          <br />
          <br />
    <div className={styles.description}>
    <h2 className={`{styles.custonH2}text-2xl md:text-2xl`}>
            I am passionate about Flutter development, with hands-on experience building responsive and visually appealing mobile apps. 
            I also have studied HTML, CSS, and TypeScript. Currently, I am learning Next.js from GIAIC to expand my web development skill set.
            I am excited to leverage my skills in a Flutter development internship to contribute to innovative projects and further develop my technical expertise.
          </h2>
    </div>
        </div>
        <div className={styles.profile}>
          <Image 
            src={profileImage}
            alt="profile"
            className="rounded-full"
            width={250} 
            height={450} 
            sizes="(max-width: 768px) 50vw, 33vw" 
          />
        </div>
      </div>
    </div>
  );
}
