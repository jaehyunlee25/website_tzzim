doc.gcn("inquiry_ok")[0].onclick = function () {
  const name = doc.gcn("name")[0].value.rp();
  const subject = doc.gcn("subject")[0].value.rp();
  const type = doc.gbn("inquiryType")[0].value.rp();
  const email = doc.gcn("email")[0].value.rp();
  const content = doc.gbn("inquiryArea")[0].value.rp();
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
  const param = {
    name,
    subject,
    content,
    email,
    type,
  };
  post(
    "https://dev.mnemosyne.co.kr/api/crawler/question",
    param,
    { "Content-Type": "application/json" },
    (data) => {
      const json = JSON.parse(data);
      if (json.type == "okay") {
        alert(json.message);
        doc.gcn("name")[0].value = "";
        doc.gcn("subject")[0].value = "";
        doc.gcn("email")[0].value = "";
        doc.gbn("inquiryArea")[0].value = "";
      } else if (json.type == "error") {
        alert(json.message);
      }
    }
  );
};
