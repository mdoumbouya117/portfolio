import { ReactNode } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetbrainsMono',
})

export const metadata = {
	title: 'Mohamed Doumbouya - Full-Stack Developer Portfolio',
	description:
		"Welcome to Mohamed Doumbouya's portfolio ! Explore a showcase of innovative web development projects and cutting-edge applications. Discover my skills in JavaScript, React, Next.js, Node.js, and more. Let's connect and bring your ideas to life.",
}

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang='en'>
		<body className={jetbrainsMono.variable}>
			<Header />
			<StairTransition />
			<PageTransition>{children}</PageTransition>
		</body>
	</html>
)

export default RootLayout
