import { useEffect } from 'react';

const useTheme = () => {
  useEffect(() => {
    const setTheme = () => {
      const hour = new Date().getHours();
      let themeClass = '';

      if (hour >= 6 && hour < 11) {
        themeClass = 'theme-morning';
      } else if (hour >= 17 && hour < 20) {
        themeClass = 'theme-evening';
      } else {
        themeClass = 'theme-night';
      }

      document.body.classList.remove('theme-morning', 'theme-evening', 'theme-night');
      document.body.classList.add(themeClass);
    };

    setTheme();

    // Optionally, you can set an interval to update the theme every hour
    const intervalId = setInterval(setTheme, 3600000);

    return () => clearInterval(intervalId);
  }, []);
};

export default useTheme;
