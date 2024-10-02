import Image from "next/image";
import Header from "@/components/header";
import styles from './page.module.css'; 
import profileImage from "../image/image.png"

export default function Jobs() {
    return (
      <div className="body">
        <header>
          <Header />
        </header>
        <div className={styles.skills}>  
          <div className={styles.name}>
            <h1 className="font-bold text-4xl md:text-6xl">SKILLS</h1>
            <br />
            <br />
            <h2 className={`text-2xl md:text-2xl`}>
           <ul>
            <li>Flutter</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>Git & Github</li>
            <li>Firebase</li>
           </ul>
            </h2>
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
  