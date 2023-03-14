import "./Menu.css";
import Button from "./buttons/Button";
import {ListButtons} from "../../utils/botoes"

const Menu = () => {

  return (
    <section className="menu--container">

      <div className="menu--background">
        <nav className="menu">
          {ListButtons.map((btn, i) => {
            return (
              <Button
                key={`${btn.nome}-${i}`}
                title={btn.nome}
                path={btn.path}
                image={btn.image}
                index={i}                
              />
            );
          })}
          <div className="indicator"></div>
          <div className="light"></div>
        </nav>
      </div>
    </section>
  );
};

export default Menu;