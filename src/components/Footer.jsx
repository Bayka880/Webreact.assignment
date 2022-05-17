function Footer() {
  const style = {
    outer: {
      marginTop: "auto",
      color: "grey",
      height: "150px",
      textAlign: "center",
    },
    in: {
      fontSize: 30,
    },
  };
  return (
    <div style={style.outer} className="footer bg-dark">
      <p style={style.in} className="footer">
        Footer
      </p>
    </div>
  );
}
export default Footer;
