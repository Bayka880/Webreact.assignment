import SectionLeft from "./SectionLeft";
import SectionRigth from "./SectionRigth";
function Main() {
  const style = {
    outerLay: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
    innerLay: { fontSize: 25 },
  };
  return (
    <div style={style.outerLay} className="d-flex">
      <p style={style.innerLay}>Web development basic knowledge </p>
    </div>
  );
}
export default Main;
