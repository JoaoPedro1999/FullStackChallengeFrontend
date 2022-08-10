import React, { ReactNode } from "react";
import { Container } from "./styles";

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode | ReactNode[];
}

const Tooltip: React.FC<TooltipProps> = ({ className, title, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
