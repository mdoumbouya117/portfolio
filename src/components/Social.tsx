import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
	{ icon: <FaGithub />, path: '' },
	{
		icon: <FaLinkedinIn />,
		path: 'https://www.linkedin.com/in/mohamed-doumbouya-703811106/',
	},
	{
		icon: <FaYoutube />,
		path: 'https://www.youtube.com/@mohameddoumbouya2001',
	},
	{ icon: <FaTwitter />, path: '' },
]

const Social = ({
	containerStyles,
	iconStyles,
}: {
	containerStyles: string
	iconStyles: string
}) => (
	<div className={containerStyles}>
		{socials.map((item, index) => {
			return (
				<Link key={index} href={item.path} className={iconStyles}>
					{item.icon}
				</Link>
			)
		})}
	</div>
)

export default Social
