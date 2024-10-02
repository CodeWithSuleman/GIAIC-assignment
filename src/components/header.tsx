import Link from "next/link";
export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <Link href="/">
                <li>Home</li>
                </Link>

                <Link href="/about-us">
                <li>About Me</li>
                </Link>

                <Link href="/contact-us">
                <li>Contact Me</li>
                </Link>

                <Link href="/jobs">
                <li>Skills</li>
                </Link>    
                
            </ul>
    </div>
        )
}