const TitleCategory = ({ hidenCategory, title, color }) => {
  return (
    <span
      className={`${hidenCategory} px-3 py-2 fs-5 text-light fw-bold rounded-2`}
      style={{
        top: "-40px",
        backgroundColor: `${color}`,
        textShadow: "1.3px 1.3px black",
      }}
    >
      {title}
    </span>
  );
};

export default TitleCategory;
