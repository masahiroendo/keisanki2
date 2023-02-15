import { CiLight, CiDark } from "react-icons/ci";
import { useTheme } from "../context/ThemeContext";

type ThemeSwitchButtonProps = {
  className?: string;
};

const ThemeSwitchButton = ({ className, ...props }: ThemeSwitchButtonProps) => {
  const { theme, switchTheme } = useTheme();
  return (
    <div className="absolute top-2 right-2 bg-[#333] w-8 h-8 rounded-lg flex justify-center items-center shadow-switchThemeButtonDark dark:bg-[#e1e0e0] dark:shadow-switchThemeButtonLight ease-in-out duration-300">
      <button className="text-white text-xl hover:cursor-pointer dark:text-gray-500">
        {theme === "dark" ? (
          <CiLight onClick={switchTheme} />
        ) : (
          <CiDark onClick={switchTheme} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitchButton;
