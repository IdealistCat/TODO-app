let DOC_BODY = document.body; // Abstract document body into variable for easy calling

function createParagraph() {
    var para = document.createElement('p');
    para.innerHTML = "New Paragraph!!!";

    DOC_BODY.append(para);
}