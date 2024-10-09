import Link from "next/link";
const About = () => {
    return (
        <div className="about">
           This a About page
           <h1><Link href="/About/Myself" target='_blank'>Myself</Link></h1>

        </div>

    )
}

export default About