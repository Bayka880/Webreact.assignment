import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const style = {
  body: {
    display: "flex",
    width: "100%",
    paddingTop: "50px",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: 25,
  },
};
function SectionLeft({ data }) {
  return (
    <div style={style.body}>
      {data.map((e, i) => {
        return (
          <Link className="pt-4 px-4" style={style.link} key={i} to={`${e}`}>
            {e}
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
}
export default SectionLeft;
