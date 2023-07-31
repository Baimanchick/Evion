import React, { useEffect, useState } from "react";
import { useBlogContext } from "../contexts/BlogsContext";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import "../css/details.css";

function BlockDetailsPage() {
  const { oneBlog, getOneBlog } = useBlogContext();
  const { id } = useParams();
  const [scrollUp, setScrollUp] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getOneBlog(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function parseAndSanitizeHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.innerHTML;
  }

  return (
    <>
      {oneBlog ? (
        <div className="main-div">
          <div className="example-navbar">
            {scrollUp ? (
              <div className="scrollUpBTN" onClick={scrollToTop}>
                <ion-icon name="arrow-up-outline"></ion-icon>
              </div>
            ) : null}
            <div className="navick">
              <ion-icon
                name="arrow-back-outline"
                onClick={() => navigate("/blogs")}
              ></ion-icon>
              <div>blogs</div>
            </div>
            <div className="target_line-span-evionchick">
              <span className="target-line_span-evioxchick"></span>
            </div>
          </div>
          <div className="detailss">
            <div className="title-db">{oneBlog.title}</div>
            <img src={`${oneBlog.img}`} alt="" />
            <div className={`text-details`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: parseAndSanitizeHTML(oneBlog.text),
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default BlockDetailsPage;
