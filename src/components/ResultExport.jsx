import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const makePdf = () => {
  const converToImg = async () => {
    // html to imageFile
    /* const paper = document.querySelector('.div_container > .div_paper'); */
    const paper = document.querySelector('.wholeCard');

    const canvas = await html2canvas(paper);
    const imageFile = canvas.toDataURL('image/png', 5.0);

    return imageFile;
  };

  const converToPdf = (imageFile) => {
    // imageFile to pdf

    const doc = new jsPDF('p', 'mm', 'a4');

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.addImage(imageFile, 'JPEG', 0, 0, pageWidth, pageHeight);

    doc.save('test.pdf');

    window.open(doc.output('bloburl'));

    const pdf = new File([doc.output('blob')], 'test.pdf', {
      type: 'application/pdf',
    });

    return pdf;
  };
  // _sendToServer: async (pdf) => {
  //     const formData = new FormData();
  //     formData.append("file", pdf);
  //     formData.append("type", "pdf");
  //     formData.append("name", "test");

  //     const res = await axios.post("/pdf/upload_file", formData, {
  //         headers: {
  //             "Content-Type": "multipart/form-data",
  //         },
  //     });

  //     if (res.data.code === 1) {
  //         window.open(`${util.mode()}${res.data.link}`);
  //     }
  //     console.log({ res });

  //     setTimeout(() => {
  //         makePdf._isLoading = false;
  //     }, 2000);
  // }
  return {
    viewWithPdf: async () => {
      // html to imageFile
      const imageFile = await converToImg();

      // imageFile to Pdf
      const pdf = converToPdf(imageFile);

      // makePdf.sendToServer(pdf)
    },
  };
};
export default makePdf;
