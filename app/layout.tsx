import Footer from "@/components/common/Footer";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="light">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
