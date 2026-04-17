import { STYLES } from '@config/constants';

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export const Label = ({ children, className = '' }: LabelProps) => (
  <span className={`${STYLES.LABEL} ${className}`}>
    {children}
  </span>
);
