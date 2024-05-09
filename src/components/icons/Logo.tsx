import { SvgIcon, SvgIconProps } from "@mui/material";
import { logos } from "../../constants/logos";
import styles from './Logo.module.scss';

interface LogoProps extends SvgIconProps {
	logoType: keyof typeof logos;
}

export const Logo = ({ logoType, ...props }: LogoProps) => {
	const svgContent = logos[logoType];
	console.log(svgContent);
	
	if (!svgContent) {
		console.error(`Unknown logo type: ${logoType}`);
		return null;
	}

	return (
		<SvgIcon 
			{...props}
			className={styles.logoWrapper}
			sx={{
				width: '3rem',
				height: '3rem'
			}}
		>
			{svgContent}
		</SvgIcon>
	)
};
