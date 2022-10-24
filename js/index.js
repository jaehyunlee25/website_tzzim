doc.gcn("inquiry_ok")[0].onclick = function () {
  const name = doc.gcn("name")[0].value;
  const subject = doc.gcn("subject")[0].value;
  const type = doc.gbn("inquiryType")[0].value;
  const email = doc.gcn("email")[0].value;
  const content = doc.gbn("inquiryArea")[0].value;
  if (name.trim() == "") {
    alert("이름을 입력해 주세요.");
    doc.gcn("name")[0].focus();
    return;
  }
  if (subject.trim() == "") {
    alert("제목을 입력해 주세요.");
    doc.gcn("subject")[0].focus();
    return;
  }
  if (email.trim() == "") {
    alert("이메일을 입력해 주세요.");
    doc.gcn("email")[0].focus();
    return;
  }
  if (content.trim() == "") {
    alert("내용을 입력해 주세요.");
    doc.gbn("inquiryArea")[0].focus();
    return;
  }
  post({
    name,
    subject,
    content,
    email,
    type,
  });
};
