const contributorList = document.querySelector(".contributor-list");

fetch("contributors.json").then((data) =>
  data.json().then((d) => {
    d.data.map((contributor) => updateMarkup(contributor));
  })
);

function updateMarkup(contributor) {
  const markup = createCardMarkup(contributor);
  contributorList.innerHTML += markup;
}

function createCardMarkup(contributor) {
  return `
        <div
          class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
        >
          <div class="rounded-t-lg h-32 overflow-hidden bg-blue-50">
            <img
              class="object-cover object-top w-full"
              src="${
                contributor.cover
                  ? contributor.cover
                  : "https://user-images.githubusercontent.com/69139607/193289950-8809d68e-fda8-4de0-af2b-99265e572a52.svg"
              }"
              alt="Mountain"
            />
          </div>
          <div
            class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
          >
            <img
              class="object-cover object-center h-32"
              src="${contributor.img}"
              alt="Woman looking front"
            />
          </div>
          <div class="text-center mt-2">
            <h2 class="font-semibold text-xl">${contributor.name}</h2>
            <p class="text-gray-400 text-sm">${contributor.heading}</p>
          </div>
          <div class="text-center text-xl mx-5 my-5">
            <p class="text-gray-500">${contributor.quote}</p>
          </div>
          <div class="p-4 border-t mx-8 mt-2">
          <a href="${contributor.social}">
            <button
              class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 transition-all"
            >
              Follow
            </button>
            </a>
          </div>
        </div>
  `;
}
