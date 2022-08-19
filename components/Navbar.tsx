import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="bg-gray-900 px-5 border-b-2 border-gray-700 sticky top-0 z-50">
			<div className="flex justify-between">
				<div className="block my-auto">
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</div>
				{/* Desktop menu */}
				<div className="hidden sm:block sm:ml-6">
					<div className="flex flex-1 items-center space-x-4">
						<NavbarItem active={true} href="" title="Home" />
						<NavbarItem active={false} href="about" title="About" />
						<NavbarItem active={false} href="boards" title="Boards" />
						<NavbarItem active={false} href="profile" title="Profile" />
					</div>
				</div>
				<div className="block">
					<NavbarItem active={false} href="login" title="Login/Logout" />
				</div>
			</div>
		</nav>
	);
}

function NavbarItem(props: { active: boolean; href: string; title: string }) {
	const active: boolean = props.active;
	const href: string = props.href;
	const title: string = props.title;
	return (
		<>
			{active && (
				<div
					className="bg-gray-900 hover:text-gray-300 text-white px-3 py-2 text-lg font-bold rounded-md m-2 cursor-pointer"
					aria-current="page"
				>
					<Link href={`/${href}`}>{title}</Link>
				</div>
			)}
			{!active && (
				<div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg rounded-md m-2 cursor-pointer">
					<Link href={`/${href}`}>{title}</Link>
				</div>
			)}
		</>
	);
}
