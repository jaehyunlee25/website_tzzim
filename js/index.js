doc.gcn("inquiry_ok")[0].onclick = function () {
  const name = doc.gcn("name")[0].value;
  const subject = doc.gcn("subject")[0].value;
  const type = doc.gcn("inquiryType")[0].value;
  const email = doc.gcn("email")[0].value;
  const content = doc.gcn("inquiryArea")[0].value;
  log({
    name,
    subject,
    content,
    email,
    type,
  });
};
