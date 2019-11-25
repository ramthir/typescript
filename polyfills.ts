import "./style.css";
export const console = {
  log: s =>
    (document.getElementById("app").innerHTML += JSON.stringify(s) + "<br/>")
};
