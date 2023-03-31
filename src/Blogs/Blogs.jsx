import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Blogs.css";

import Tile from "./Tile";


function Blogs(props) {
    const bundleArray= props.bundleArray
  const [page, setPage] = React.useState(1);
  const [paginatedArray, setPaginatedArray] = React.useState(
    bundleArray.slice(0, 5)
  );
  

  useEffect(()=>{
    const from = (page - 1) * 5;
    const to = (page - 1) * 5 + 5;
    setPaginatedArray(bundleArray.slice(from, to));
  },[page])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
        <Navbar/>
      <div className="blogs__main_container">
        <div className="blogs__container">
          <h1>Important JS Interview coding questions</h1>
          <p>
            There are some important interview conding question in Javascript
            which can be asked to 3+ years of experienced professional.
          </p>
          {paginatedArray &&
            paginatedArray.map((item, index) => {
              return <Tile item={item} index={index}></Tile>;
            })}
          <div className="paginate_index">
            <Pagination
              count={bundleArray.length / 5}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="circular"
              //color="secondary"
              showNextButton
              showPrevButton
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blogs;
