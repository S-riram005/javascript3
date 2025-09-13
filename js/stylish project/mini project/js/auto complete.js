const suggestBox = document.querySelector(".suggest-box");
const inputbox = document.querySelector("#searchText");

inputbox.addEventListener("keyup", filterSuggestions);
inputbox.addEventListener("click", () => {
    inputbox.select();
});

async function filterSuggestions() {
    const response = await fetch("./data/data.json");
    const KeywordsList = await response.json();
    let suggest = [];
    let input = this.value.trim().toLowerCase();

    if (input.length) {
        suggest = KeywordsList.filter((keyword) => {
            return keyword.search.toLowerCase().includes(input); 
        });
    }

    display(suggest);

    if (!suggest.length) {
        suggestBox.innerHTML = "";
    }
}

function display(suggest) {
    const content = suggest.map((list) => {
        const data = list.search;
        return `<li onclick="selectInput('${data}')">${Highlight(data)}</li>`;
    });
    suggestBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(data) {
    inputbox.value = data;
    suggestBox.innerHTML = "";
}

function Highlight(textToSearch) {
    const searchString = inputbox.value.toLowerCase();
    const startIndex = textToSearch.toLowerCase().indexOf(searchString);

    if (startIndex === -1) return textToSearch; // If search string not found

    // Fix: close <mark> tag correctly
    const HighlightText =
        textToSearch.substring(0, startIndex) +
        "<mark>" +
        textToSearch.substring(startIndex, startIndex + searchString.length) +
        "</mark>" +
        textToSearch.substring(startIndex + searchString.length);

    return HighlightText;
}
