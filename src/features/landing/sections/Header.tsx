import { NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <section className="header__section bg-neutral-1000">
        <div className="py-7.5">
          <div className="brand_container flex justify-between items-center">
            <NavLink to={""}>
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10">
                  <img src="src/assets/icons/Fav-32px.png" className="w-full h-full" alt="" />
                </div>
                <span className="font-bold text-2xl">FindTrendClone</span>
              </div>
            </NavLink>

            <nav>
              <ul className="flex gap-10">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">How it work</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Solution</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-10 items-center">
              <NavLink to={""}>Login</NavLink>
              <NavLink to={""} className={"bg-neutral-0 text-neutral-1000 px-8 py-3 rounded-full"}>Register</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
