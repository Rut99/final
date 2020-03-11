import React from 'react';
import html2canvas from 'html2canvas';
import './PrintButton.css';
//it does not actually take a screenshot of the page,
// but builds a representation of it based on the properties it reads from the DOM.
import jsPDF from 'jspdf-yworks';
const PrintButton = ({id, label}) => (<div>
  <div id="myMm" style={{height: "1mm"}} />
  <div
    className="printButton"
    onClick={() => {
      const input = document.getElementById(id);
      alert("Downloading...")
      html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('BebrasChallenge-Certificate.pdf');
      });
    }}
  >
    {label}
  </div>
</div>);
export default PrintButton;