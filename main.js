((win, doc) => {
  const $ = (el) => doc.querySelector(el),
    evidences = $("#evidences"),
    proofH1 = evidences.querySelectorAll(".proof h1"),
    target = Math.trunc(evidences.getBoundingClientRect().top),
    btnAction = $("header nav.mobile i");
  let distance = (target - pageXOffset) / 1.3;

  function effectSum(end, target) {
    let start = 0;
    target.textContent = 0;

    setInterval(() => {
      if (start < end === true) {
        start++;

        target.textContent = start;
      }
    }, 100);
  }

  function effectSumConditions() {
    if (screen.availWidth > 1000) {
      if (scrollY > distance) {
        effectSum(34, proofH1[0]);
        effectSum(84, proofH1[1]);
        effectSum(17, proofH1[2]);
        effectSum(15, proofH1[3]);

        removeEventListener("scroll", effectSumConditions);
      }
    } else {
      proofH1[0].textContent = 34;
      proofH1[1].textContent = 84;
      proofH1[2].textContent = 17;
      proofH1[3].textContent = 15;
    }
  }

  function headerShadows() {
    const header = $("header");

    if (scrollY > 10) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }
  }

  function show() {
    const ulHeader = $("header nav.mobile ul");

    ulHeader.classList.contains("show")
      ? ulHeader.classList.remove("show")
      : ulHeader.classList.add("show");
  }

  addEventListener("scroll", effectSumConditions);
  addEventListener("scroll", headerShadows);
  btnAction.addEventListener("click", show);
})(window, document);
