function SectionRigth({ data }) {
  const style = {
    info: {
      width: "100%",
      textAlign: "center",
      paddingLeft: "15%",
    },
  };
  return (
    <div className="info" style={style.info}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
export default SectionRigth;
