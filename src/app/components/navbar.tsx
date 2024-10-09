import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <h1><Link href="/Home" target='_blank'>Home</Link></h1>
      <h1><Link href="/About" target='_blank'>About </Link></h1>
      <h1><Link href="/Contact" target='_blank'>Contact</Link></h1>
      <h1><Link href="/Service" target='_blank'>Service</Link></h1>

    </div>
  );
}
