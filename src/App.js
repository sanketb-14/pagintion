import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Followers from "./Followers";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollower(data[page]);
  }, [loading, page]);
  const handleClick = (item) => {
    setPage(item);
  };
  const prev=()=> {
    setPage((oldpage)=> {
      let prevPage=oldpage -1  
      if (prevPage < 0 ){
        prevPage = data.length - 1
      }
      return prevPage
    })

  }
 
   const next = () => {
     setPage((oldpage) => {
       let prevPage = oldpage + 1;
       if (prevPage > data.length - 1) {
         prevPage = 0;
       }
       return prevPage;
     });
   };
  return (
    <main>
      <div className="section-content">
        <h1>{loading ? "Loading...." : "Pagintion"}</h1>
        <div className="line"></div>
      </div>
      <section className="container">
        <div className="follower">
          {follower.map((follower) => {
            return <Followers key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev" onClick={() => prev()}>
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next" onClick={() => next()}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
export default App;
