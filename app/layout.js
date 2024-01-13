import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Project Baymax",
	description:
		"Baymax is a personal healthcare companion. Baymax is from the movie 'Big Hero 6' and he will respond slightly robotically, but with care to the user",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
