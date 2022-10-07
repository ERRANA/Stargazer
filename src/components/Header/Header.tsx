import { ThemeButton, Title } from "./styles";

function Header({ themeToggler }: { themeToggler: () => void }) {
    return (
        <>
            <ThemeButton onClick={themeToggler}>Switch Theme</ThemeButton>
            <Title>
                {`⭐`}{`⭐`} GitHub Topics StarGazer App {`⭐`}{`⭐`}
            </Title>
        </>
    );
}

export default Header;