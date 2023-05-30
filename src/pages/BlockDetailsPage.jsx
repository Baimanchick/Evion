import React, { useEffect } from "react";
import { useBlogContext } from "../contexts/BlogsContext";
import { useParams } from "react-router";

function BlockDetailsPage() {
  const { oneBlog, getOneBlog } = useBlogContext();
  const { id } = useParams();
  useEffect(() => {
    getOneBlog(id);
  }, []);

  //   if (!oneBlog) {
  //     return <div style={{ fontSize: "68px" }}>Loading...</div>;
  //   }

  return <>{oneBlog ? <div>{oneBlog.title}</div> : <div>Loading...</div>}</>;
}

export default BlockDetailsPage;
