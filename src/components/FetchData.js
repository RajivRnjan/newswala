import React, { useState,useEffect } from "react";
import axios from "axios";




const FetchData = ({cat}) => {
  const [Data, setData] = useState("");

  

  const fetchData = async () => {
    await axios
      .get(
        cat ?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=fa6b1964d3eb4ed591a14282ee2ca077`:
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fa6b1964d3eb4ed591a14282ee2ca077"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h2>
        <u>TOP HEADLINES</u>
      </h2>
      <div className="container d-flex flex-column justify-content-center align-item-center my-3 mx-3" style={{minHeight:"100vh"}}>
        {Data
          ? Data.map((item, index) => (
              <>
                <div  className="container my-3 p-3" style={{width:"50vw", boxShadow:"2px 2px 10px silver", borderRadius:"5px"}}>
                  <h5 className="my-2">{item.title}</h5>
                  <div className="container d-flex flex-column justify-content-center align-item-center my-3" >
                  <img
                    src={item.urlToImage}
                    alt="img"
                    className="img-fluid"
                    style={{
                      width: "auto",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  </div>
                  

                  <p className="my-1">{item.content}</p>
                  <a href={item.url} target="blank">Read More..</a>
                </div>
              </>
            ))
          : "Loading...."}
      </div>
    </div>
  );
};

export default FetchData;
