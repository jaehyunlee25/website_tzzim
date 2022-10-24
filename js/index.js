doc.gcn("inquiry_ok")[0].onclick = function () {
  const name = doc.gcn("name")[0].value;
  const subject = doc.gcn("subject")[0].value;
  const inquiryType = inquiryType.value;
  const email = doc.gcn("email")[0].value;
  const inquiryArea = inquiryArea.value;
  log({
    name,
    subject,
    inquiryArea,
    email,
    inquiryType,
  });
};
