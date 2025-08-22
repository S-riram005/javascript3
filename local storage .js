document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("dataForm");
    const dataInput = document.getElementById("dataInput");
    const dataList = document.getElementById("dataList");

    loadStoredData();

    // Add Data
    dataForm.addEventListener("submit", function(e){
        e.preventDefault();
        const data = dataInput.value.trim();
        if(data !== ""){
            const storedData = JSON.parse(localStorage.getItem("myData")) || [];
            storedData.push(data);
            localStorage.setItem("myData", JSON.stringify(storedData));
            dataInput.value = "";
            loadStoredData();
        } else {
            alert("Please enter the data");
            dataInput.focus();
        }
    });

    // Load Stored Data
    function loadStoredData() {
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        dataList.innerHTML = "";

        storedData.forEach((data, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${data}
                <div>
                    <button class='btnEdit' data-index='${index}'>Edit</button>
                    <button class='btnDelete' data-index='${index}'>Delete</button>
                </div>
            `;
            dataList.appendChild(li);
        });

        // Attach events for Edit and Delete buttons
        const editButtons = document.querySelectorAll(".btnEdit");
        const deleteButtons = document.querySelectorAll(".btnDelete");

        editButtons.forEach(btn => btn.addEventListener("click", editData));
        deleteButtons.forEach(btn => btn.addEventListener("click", deleteData));
    }

    // Edit Data
    function editData(e){
        const index = e.target.dataset.index;
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        const newValue = prompt("Edit your data:", storedData[index]);
        if(newValue !== null && newValue.trim() !== ""){
            storedData[index] = newValue.trim();
            localStorage.setItem("myData", JSON.stringify(storedData));
            loadStoredData();
        }
    }

    // Delete Data
    function deleteData(e){
        const index = e.target.dataset.index;
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        storedData.splice(index, 1);
        localStorage.setItem("myData", JSON.stringify(storedData));
        loadStoredData();
    }
});
