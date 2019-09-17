const saveAs = require("file-saver");
module.exports.downloadPdf = () => {
  fetch("/download/resume", {
    headers: {
      "Content-Type": "application/pdf"
    },
    responseType: "blob"
  })
    .then(response => response.blob())
    .then(blob => saveAs(blob, "Resume.pdf"));
};
