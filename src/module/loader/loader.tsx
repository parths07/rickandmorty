import { GooeyCircleLoader } from "react-loaders-kit";

export default function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["green", "blue", "green"],
  };
  return (
    <>
      <div
        className="popup-overlay d-flex-overlay flex-row-overlay justify-content-center-overlay"
        style={{
          position: "fixed",
          inset: "0px",
          display: "flex",
          zIndex: "999",
          pointerEvents: "auto",
          width: "100%",
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div
            className="d-flex flex-column justify-content-center"
            style={{ height: "100%" }}
          >
            <GooeyCircleLoader {...loaderProps} />
          </div>
        </div>
      </div>
    </>
  );
}
