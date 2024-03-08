const tabContainer = document.querySelector(".tabsContainer");
const contentContainer = document.querySelector(".contentContainer");
const tabs = [
  {
    id: 1,
    name: "History",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
  obcaecati repudiandae eveniet ipsa, soluta quam magnam veritatis
  nulla, est, officiis voluptates. Amet sunt debitis hic dolorem
  nemo ut eveniet animi, facere commodi. Placeat possimus vitae
  culpa amet, quod similique accusantium doloribus recusandae
  aliquam distinctio sit odio, incidunt tempore asperiores! Harum`,
  },
  {
    id: 2,
    name: "Visions",
    content: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
  aperiam mollitia quidem alias illum repellendus harum veritatis,
  neque placeat? Magni asperiores totam non ut cumque pariatur! In
  sapiente adipisci repudiandae? Dignissimos corporis veritatis
  veniam dolorem totam temporibus, deleniti doloribus quod
  mollitia unde architecto ut vitae dolore sequi provident ad
  eligendi animi iusto laboriosam, ea quisquam nesciunt illo`,
  },
  {
    id: 3,
    name: "Goals",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
  numquam similique corrupti praesentium fugit, voluptas odit
  impedit doloribus nulla minus cumque labore accusantium harum
  animi iste. Alias, quaerat, maiores ullam expedita voluptas,
  dolores modi at minima molestiae non nesciunt! Assumenda ipsam
  quisquam omnis enim dolor doloribus, iure amet. Harum repellat
  officia quam magni, impedit quo earum sapiente sed iure nesciunt
  maxime nostrum incidunt libero omnis adipisci eos dolores nemo
  atque debitis! Iure omnis ut est minus, tempore aspernatur
  nostrum. Facere quia recusandae ipsam nisi et, accusantium
  voluptate aperiam laborum incidunt! Dolore repudiandae repellat
  quis debitis nobis corporis dicta, nemo nostrum eligendi, quo`,
  },
];
let currentContentId = 1;

tabContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document
      .querySelector(".active-tab")
      .classList.remove("active-tab", "bg-white", "border-4", "border-sky-500");
    e.target.classList.add(
      "active-tab",
      "bg-white",
      "border-4",
      "border-sky-500"
    );
  }
});

tabs.forEach((tab) => {
  const button = document.createElement("BUTTON");
  button.id = tab.id;
  button.innerHTML = tab.name;
  button.classList.add(
    "tabs",
    "grow",
    "py-3",
    "outline-none",
    "focus-visible:ring-0",
    "transition-colors",
    "ease-in-out",
    "duration-300"
  );
  if (tab.id == 1)
    button.classList.add(
      "active-tab",
      "bg-white",
      "border-4",
      "border-sky-500"
    );
  tabContainer.appendChild(button);
  button.addEventListener("click", (e) => handleClick(e));

  const content = document.createElement("P");
  content.id = `content${tab.id}`;
  content.classList.add("content", "hidden");
  if (tab.id == 1) {
    content.classList.replace("hidden", "block");
    content.classList.add("active-content");
  }
  content.innerHTML = `<p>${tab.content}</p>`;
  contentContainer.appendChild(content);
});

function handleClick(e) {
  showContent(e.target.id);
  currentContentId = e.target.id;
}

function showContent(id) {
  document
    .querySelector(".active-content")
    .classList.replace("block", "hidden");
  document.querySelector(".active-content").classList.remove("active-content");
  document.querySelector(`#content${id}`).classList.add("active-content");
  document.querySelector(`#content${id}`).classList.replace("hidden", "block");
}

showContent(currentContentId);
