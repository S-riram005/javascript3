import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } 
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const appSetting = {
    databaseURL: "https://js-crud-2abf8-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const usersListInDB = ref(database, "users");

// Form elements
const idEl = document.querySelector("#id");
const nameEl = document.querySelector("#name");
const ageEl = document.querySelector("#age");
const cityEl = document.querySelector("#city");
const frm = document.querySelector("#frm");
const tblBodyEl = document.querySelector("#tblBody");

// Form submit (Insert / Update)
frm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!nameEl.value.trim() || !ageEl.value.trim() || !cityEl.value.trim()) {
        alert("Please fill all details");
        return;
    }

    //  Update existing record if id is present
    if (idEl.value) {
        set(ref(database, "users/" + idEl.value), {
            name: nameEl.value.trim(),
            age: ageEl.value.trim(),
            city: cityEl.value.trim(),
        });
        clearElements();
        return;
    }

    // ✅ Insert new record
    const User = {
        name: nameEl.value.trim(),
        age: ageEl.value.trim(),
        city: cityEl.value.trim(),
    };

    push(usersListInDB, User);
    clearElements();
});

// Clear input fields
function clearElements() {
    idEl.value = "";
    nameEl.value = "";
    ageEl.value = "";
    cityEl.value = "";
}

// Fetch users and display table
onValue(usersListInDB, function (snapshot) {
    if (snapshot.exists()) {
        let userArray = Object.entries(snapshot.val());
        tblBodyEl.innerHTML = "";

        for (let i = 0; i < userArray.length; i++) {
            let currentUserID = userArray[i][0];
            let currentUserValue = userArray[i][1];

            tblBodyEl.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${currentUserValue.name}</td>
                    <td>${currentUserValue.age}</td>
                    <td>${currentUserValue.city}</td>
                    <td>
                        <button class="btn-edit" data-id="${currentUserID}">
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                    </td>
                    <td>
                        <button class="btn-delete" data-id="${currentUserID}">
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </td>
                </tr>
            `;
        }
    } else {
        tblBodyEl.innerHTML = "<tr><td colspan='6'>No Record Found</td></tr>";
    }
});

//  Event Delegation for Edit & Delete
document.addEventListener("click", function (e) {
    const btn = e.target.closest("button"); // always get button even if icon clicked
    if (!btn) return; // if not clicked on button, exit

    if (btn.classList.contains("btn-edit")) {
        const id = btn.dataset.id;
        const tdElements = btn.closest("tr").children;

        idEl.value = id; // ✅ important for update
        nameEl.value = tdElements[1].textContent;
        ageEl.value = tdElements[2].textContent;
        cityEl.value = tdElements[3].textContent;

    } else if (btn.classList.contains("btn-delete")) {
        if (confirm("Are you sure to delete?")) {
            const id = btn.dataset.id;
            let data = ref(database, `users/${id}`);
            remove(data);
        }
    }
});
