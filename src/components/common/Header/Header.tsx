import { _Header } from "./_Header";
import HeaderProps from "./HeaderTypes";

export const Header = ({ title }: HeaderProps) => {
  return <_Header>{title}</_Header>;
};
