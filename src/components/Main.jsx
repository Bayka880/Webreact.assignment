function Main() {
  const style = {
    outerLay: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      marginTop: "350px",
      textAlign: "center",
      alignItems: "center",
    },
    innerLay: { fontSize: 25 },
  };
  return (
    <div style={style.outerLay}>
      <span style={style.innerLay}> Web development basic knowledge</span>
    </div>
  );
}
export default Main;
