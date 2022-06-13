import {FC} from "react";
import {Logo} from "../Logo/Logo";
import "./Footer.scss"

export const Footer:FC = () => {
  return (
  <footer className="footer">
    <div className="footer__container">
      <Logo/>
      <div className="footer__copyright">Amir Arina Vladislav Ekaterina Ruslan Sergey</div>
    </div>
  </footer>
  );
}
