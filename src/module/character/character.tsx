import { useEffect, useState } from "react";
import { firstFeatured, getLocationData, testApi } from "./character-service";
import "../character/character.scss";
import ResponsivePagination from "react-responsive-pagination";
import Loader from "../loader/loader";

export default function Character() {
  // State variables
  let [containerData, setcontainerData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let [loader, setloader] = useState(false);
  let [totalPages, setTotalPages] = useState(1);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    setloader(true);
    getData(currentPage);
  }, []);

  // Function to fetch character data and related information
  let getData = (params: number) => {
    setCurrentPage(params);
    testApi(params).then((res: any) => {
      if (res !== 500) {
        res?.results.map((data: any) => {
          // Fetch location data
          if (data?.location?.url && data?.location?.url?.length > 0) {
            getLocationData(data?.location?.url).then((response: any) => {
              if (response !== 500) {
                data.location.dimension = response?.dimension;
                data.location.noOfRes = response?.residents?.length;
              }
            });
          }
          // Fetch origin data
          if (data?.origin?.url && data?.location?.url?.length > 0) {
            getLocationData(data?.origin?.url).then((response: any) => {
              if (response !== 500) {
                data.origin.dimension = response?.dimension;
                data.origin.noOfRes = response?.residents?.length;
              }
            });
          }
          // Fetch first featured episode data
          firstFeatured(data?.episode[0]).then((response: any) => {
            if (response !== 500) {
              data.firstFeatured = response?.name;
            }
          });
        });
        setcontainerData(res?.results);
        setTotalPages(res?.info?.pages);
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        setTimeout(() => {
          setloader(false);
        }, 1000);
      } else {
        alert("Something went wrong!");
      }
    });
  };

  return (
    <>
      {loader && <Loader />}
      <div
        id="testmargin"
        style={{
          paddingBottom: "2rem",
          minHeight: "100dvh",
        }}
        className="d-flex flex-row justify-content-center"
      >
        <div
          style={{ width: "90%" }}
          className="d-flex flex-wrap justify-content-center p-2 mt-2"
        >
          {containerData.map((data: any, index: any) => {
            return (
              <div
                className="card p-2 m-2"
                style={{ width: "300px" }}
                key={index}
              >
                {/* Render character information */}
                <img style={{ borderRadius: "5px" }} src={data?.image} alt="" />
                <div className="pt-2 d-flex flex-column">
                  {/* Character name */}
                  <span className="fl-20-30 R-700 np-120">
                    Name: <span className="np-150 R-600">{data?.name}</span>
                  </span>
                  {/* Character status */}
                  <span className="fl-20-30 R-700 np-120">
                    Status:{" "}
                    <span
                      className={`${
                        data?.status === "Alive"
                          ? "pst-50"
                          : data?.status === "unknown"
                          ? "np-150"
                          : "ngt-50"
                      } fl-20-30 R-600`}
                    >
                      {data?.status}
                    </span>
                  </span>
                  {/* Character species */}
                  <span className="fl-20-30 R-700 np-120">
                    Species:{" "}
                    <span className="np-150 R-600">{data?.species}</span>
                  </span>
                  {/* Character gender */}
                  <span className="fl-20-30 R-700 np-120">
                    Gender: <span className="R-600 np-150">{data?.gender}</span>
                  </span>
                  {/* Location information */}
                  <span
                    style={{ width: "250px" }}
                    className="fl-20-30 R-700 np-120 d-flex flex-column"
                  >
                    Location:
                    <span className="ps-2 R-700 np-110">
                      Name:{" "}
                      <span className="R-600 np-150">
                        {data?.location?.name}
                      </span>
                    </span>
                    {data?.location?.noOfRes && (
                      <span className="ps-2 R-700 np-110">
                        Total residents:{" "}
                        <span className="R-600 np-150">
                          {data?.location?.noOfRes}
                        </span>
                      </span>
                    )}
                    {data?.location?.dimension && (
                      <span className="ps-2 R-700 np-110">
                        Dimension:{" "}
                        <span className="R-600 np-150">
                          {data?.location?.dimension}
                        </span>
                      </span>
                    )}
                  </span>
                  {/* Origin information */}
                  <span
                    style={{ width: "250px" }}
                    className="fl-20-30 R-700 np-120 d-flex flex-column"
                  >
                    Origin:
                    <span className="ps-2 R-700 np-110">
                      Name:{" "}
                      <span className="R-600 np-150">{data?.origin?.name}</span>
                    </span>
                    {data?.origin?.noOfRes && (
                      <span className="ps-2 R-700 np-110">
                        Total residents:{" "}
                        <span className="R-600 np-150">
                          {data?.origin?.noOfRes}
                        </span>
                      </span>
                    )}
                    {data?.origin?.dimension && (
                      <span className="ps-2 R-700 np-110">
                        Dimension:{" "}
                        <span className="R-600 np-150">
                          {data?.origin?.dimension}
                        </span>
                      </span>
                    )}
                  </span>
                  {/* First featured episode */}
                  <span
                    style={{ width: "250px" }}
                    className="fl-20-30 R-700 np-120 d-flex flex-column"
                  >
                    Last featured:{" "}
                    <span className="np-150 R-600 ps-2">
                      {data?.firstFeatured}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div className="d-flex flex-row justify-content-center">
        <div style={{ width: "50vw" }}>
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={(event: any) => {
              setloader(true);
              getData(event);
            }}
          />
        </div>
      </div>
    </>
  );
}
``
