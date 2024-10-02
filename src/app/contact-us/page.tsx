import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import profileImage from '../image/image.png';
import styles from './page.module.css'; 
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      <header>
        <Header/>
      </header>
      <div className={styles.info}>
        <div className={styles.contact}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
          <br />
          <h2 className="text-2xl md:text-3xl lg:text-4xl">codewithsuleman@gmail.com</h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">033137921067</h2>
          <br />
          <h3 className="text-2xl md:text-3xl lg:text-4xl">Connect With Me</h3>
          <br />
      
          <div className={styles.social}>
            <Link href="https://www.npmjs.com/~codewithsuleman">
              <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=ffffff" target="blank"/>
            </Link>
            <br />
            <Link href="https://www.instagram.com/sheikh_muhammad_suleman__/" target="blank">
              <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
            </Link>
            <br />
            <Link href="mailto:your.email@example.com" target="blank">
              <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=ffffff" alt="Gmail" />
            </Link>
            <br />
            <Link href="https://linkedin.com/in/muhammad-suleman-06769a259" target="blank">
            <img src="https://img.shields.io/badge/Linkedin-0077B5?style=for-the-badge&logo=Linkedin&logoColor=ffffff" />
          </Link>
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
