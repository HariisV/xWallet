import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };
  return (
    <>
      <Link href="/">Home</Link> |<Link href="/profile">Profile</Link> |
      <div className="">BACKEND: {process.env.URL_BACKEND}</div>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </>
  );
}
