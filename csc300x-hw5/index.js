// State
let currUsername = "astraikis";
let repos;

// HTML Elements
const repoDiv = document.getElementById("repos");
const searchForm = document.getElementById("search-form");
const currUserHeader = document.getElementById("curr-user");

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer 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');

function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`, { method: "GET", headers: myHeaders })
        .then(res => res.json())
        .then(data => {
            repos = data;
            showRepos();  
        })
        .catch(err => console.log(err));
}

function getLanguages(url, repoName) {
    fetch(url, { method: "GET", headers: myHeaders })
        .then(res => res.json())
        .then(data => {
            const languagesArr = Object.keys(data);
            const languages = document.getElementById(repoName + "-languages");
            for (let i = 0; i < languagesArr.length; i++) {
                const languageLi = document.createElement("li");
                languageLi.textContent = languagesArr[i];
                languages.appendChild(languageLi);
            }
        })
        .catch(err => console.log(err));
}

function showRepos() {
    for (let i = 0; i < repos.length; i++) {
        console.log(repos[i]);
        const repo = document.createElement("div");
        repo.className = "repo";

        // Icon
        const titleDiv = document.createElement("div");
        titleDiv.className = "repo-title";
        titleDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>'
        repo.appendChild(titleDiv);

        // Name/link
        const name = document.createElement("a");
        name.href = repos[i].html_url;
        name.target = "_blank";
        name.rel = "noopener noreferrer";
        name.innerText = repos[i].name;
        titleDiv.appendChild(name);

        // Description
        const description = document.createElement("p");
        description.className = "description";
        description.innerText = repos[i].description;
        repo.appendChild(description);

        // Watchers
        const watchers = document.createElement("p");
        watchers.innerText = "Watchers: ";
        const watcherCount = document.createElement("span");
        watcherCount.className = "bold";
        watcherCount.innerText = repos[i].watchers_count;
        watchers.appendChild(watcherCount);
        repo.appendChild(watchers);

        // Updated
        const updated = document.createElement("p");
        updated.innerText = "Updated: ";
        const updatedAt = document.createElement("span");
        updatedAt.className = "bold";
        const updatedDate = new Date(repos[i].updated_at);
        updatedAt.innerText = updatedDate.toUTCString().slice(0, 16);
        updated.appendChild(updatedAt);
        repo.appendChild(updated);

        // Created
        const created = document.createElement("p");
        created.innerText = "Created: ";
        const createdAt = document.createElement("span");
        createdAt.className = "bold";
        const createdDate = new Date(repos[i].created_at);
        createdAt.innerText = createdDate.toUTCString().slice(0, 16);
        created.appendChild(createdAt);
        repo.appendChild(created);

        // Languages
        const languageLabel = document.createElement("p");
        languageLabel.innerText = "Languages:";
        const languages = document.createElement("ul");
        languages.id = repos[i].name + "-languages";
        repo.appendChild(languageLabel);
        repo.appendChild(languages);

        getLanguages(repos[i].languages_url, repos[i].name);

        repoDiv.appendChild(repo);
    }
    
}

getRepos(currUsername);

// Event listeners
searchForm.onsubmit = e => {
    e.preventDefault();
    currUsername = document.getElementById("search-bar").value;
    document.getElementById("search-bar").value = "";
    currUserHeader.innerText = "Current user: " + currUsername;
    repoDiv.innerText = "";
    getRepos(currUsername);
}