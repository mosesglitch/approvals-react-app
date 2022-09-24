import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="sam" timeAgo="07:54" />
      <CommentDetail author="mosee" timeAgo="05:43" />
      <CommentDetail author="lofez" timeAgo="10:44" />
    </div>
  );
};
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
