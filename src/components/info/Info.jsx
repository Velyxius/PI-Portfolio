import "./info.css";

const Info = ({ name, biography }) => {
  return (
    <>
      <div className="container">
        <div className="info">
          <h2 className="name">{name}</h2>
          <span className="biography">{biography}</span>
        </div>
      </div>
    </>
  );
};

export default Info;
