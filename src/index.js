import "./index.scss";
import "../node_modules/bootstrap/js/dist/carousel";
import Offcanvas from "../node_modules/bootstrap/js/dist/offcanvas";
import Collapse from "bootstrap/js/dist/collapse";
import Modal from "bootstrap/js/dist/modal";

function modalHandler() {}

function renderItems() {
  const list = document.getElementById("list");

  for (let i = 0; i < 20; i++) {
    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
        <div class="col">
              <div class="mt-4">
                <div class="card">
                  <img src="https://placem.at/things" class="card-img-top" alt="...">
                  <div class="card-body p-2">
                    <h5 class="card-title text-primary">$2000</h5>
                    <p class="card-text fs-7">Some quick example text to build on the card title.</p>
                    <p class="card-text text-end fs-8">已售出 1000</p>
                  </div>
                  <span class="badge bg-primary position-absolute top-0 end-0">雙11優惠</span>
                </div>
              </div>
            </div>
        `;

    list.appendChild(col);
  }
}

function collapseMobileHandler() {
  const collapseMobile = document.getElementById("filter-mobile-collapse");
  const collapseBtnMobile = document.getElementById(
    "filter-mobile-collapse-btn"
  );
  const collapseBtnTextMobile = document.getElementById(
    "filter-mobile-btn-text"
  );
  const fileterIconMobile = document.getElementById("filter-mobile-icon");

  //初始化下拉選單
  //const bsCollapseMobile = new Collapse(collapseMobile, {toggle:false});
  const bsCollapseMobile = new Collapse(collapseMobile, {
    toggle: false,
  });

  collapseBtnMobile.addEventListener("click", () => {
    bsCollapseMobile.toggle();
    console.log("123456");
  });

  collapseMobile.addEventListener("show.bs.collapse", () => {
    collapseBtnTextMobile.innerText = "收起";
    fileterIconMobile.classList.add("transform-rotate-180");
  });

  collapseMobile.addEventListener("hide.bs.collapse", () => {
    collapseBtnTextMobile.innerText = "顯示更多";
    fileterIconMobile.classList.remove("transform-rotate-180");
  });
}

function collapsePCHandler() {
  // get elements
  const collapse = document.getElementById("filter-collapse");
  const collapseBtn = document.getElementById("filter-collapse-btn");
  const collapseBtnText = document.getElementById("filter-btn-text");
  const filterIcon = document.getElementById("filter-icon");

  const bsCollapse = new Collapse(collapse, {
    toggle: false,
  });

  collapseBtn.addEventListener("click", function () {
    bsCollapse.toggle();
  });

  collapse.addEventListener("show.bs.collapse", function () {
    collapseBtnText.innerText = "收起";
    filterIcon.classList.add("transform-rotate-180");
  });
  collapse.addEventListener("hide.bs.collapse", function () {
    collapseBtnText.innerText = "顯示更多";
    filterIcon.classList.remove("transform-rotate-180");
  });
}

function searchHamdler() {
  const searchBtn = document.getElementById("search-btn");
  const itemsWrapper = document.getElementById("items-wrapper");
  const spinnerWrapper = document.getElementById("spinner-wrapper");

  searchBtn.addEventListener("click", () => {
    itemsWrapper.classList.add("d-none");
    spinnerWrapper.classList.remove("d-none");

    setTimeout(() => {
      itemsWrapper.classList.remove("d-none");
      spinnerWrapper.classList.add("d-none");
    }, 1500);
  });
}

collapseMobileHandler();
collapsePCHandler();
renderItems();
searchHamdler();
modalHandler();
