import { PropsWithChildren, createContext } from 'react';

export interface StyledDataTableProps extends PropsWithChildren {
  darkTheme?: boolean;
  heading?: string;
  showBorder?: boolean;
  alignRight?: boolean;
}

const contextProps = {
  darkTheme: true,
  showBorder: true,
  alignRight: false,
};
export const ThemeContext = createContext(contextProps);

export default function StyledDataTable({
  showBorder = true,
  heading,
  darkTheme = true,
  children,
  alignRight = false,
}: StyledDataTableProps) {
  let headingClasses = 'text-lg font-bold mb-2.5';
  darkTheme ? (headingClasses += '') : (headingClasses += ' text-dfxBlue-800');
  showBorder ? (headingClasses += ' ml-3.5') : (headingClasses += ' ');
  return (
    <ThemeContext.Provider value={{ darkTheme, showBorder, alignRight }}>
      <div className="mb-2.5">
        <h3 className={headingClasses}>{heading}</h3>
        <div>{children}</div>
      </div>
    </ThemeContext.Provider>
  );
}
