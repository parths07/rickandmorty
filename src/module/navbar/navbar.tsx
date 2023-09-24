import "./navbar.scss";
import Rick from "../../assets/images/ba1292fa3f64961d6c3d323a3eb73d13.jpg";
export default function Navbar() {
  return (
    <>
      <div
        id="test"
        className={"header-sticky"}
        style={{ background: "white" }}
      >
        <div
          style={{ borderBottom: "1px solid #DFE1E6", cursor: "pointer" }}
          className="d-flex flex-row justify-content-between w-100 p-3 px-2 pr-2"
        >
          <div
            style={{ height: "8vh" }}
            className="d-flex flex-row justify-content-start"
          >
            <div
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              style={{ alignItems: "center" }}
              className="ms-1 pb-1 d-flex"
            >
              <span
                className="R-600 fl-20-30"
                style={{
                  color: "rgba(4, 4, 4, 1)",

                  display: "inline-block",
                }}
              >
                Rick and Morty Characters
                <img
                  className="ms-2"
                  style={{ width: "8vh" }}
                  src={Rick}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
