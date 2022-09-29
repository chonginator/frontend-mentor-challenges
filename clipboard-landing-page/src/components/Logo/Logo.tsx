import LogoImage from '../../assets/images/logo.svg'

interface LogoProps {
    size?: "small" | "large"
}

const Logo = ({ size="large" }: LogoProps) => {
    const radius = size === "large" ? 125 : 55

    return (
        <img
            src={LogoImage}
            alt="Clipboard Logo"
            role="img"
            width={radius}
            height={radius}
        />
    );
}

export default Logo