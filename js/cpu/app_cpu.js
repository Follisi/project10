cpuDatalength = cpuData.length - 1;
let count;

// Filter function
function filterProducts() {
    // Get all checked checkboxes
    const checkedBoxes = document.querySelectorAll('input[type="radio"]:checked');

    // Get selected categories and values
    const categories = [...checkedBoxes].map(box => box.name);
    const values = [...checkedBoxes].map(box => box.value);

    // Filter products
    const filteredProducts = cpuData.filter(product => {
        return categories.every((category, index) => {
            if (category === "type") {
                return product.graphics.type === values[index];
            } else {
                return product[category] === values[index];
            }
        });
    });

    // Display filtered products
    const productsDiv = document.getElementById("items-grid");
    productsDiv.innerHTML = "";

    cpuDataTmp = filteredProducts;
    console.log(cpuDataTmp);

    //cpuDataTmp[0] = prompt("New member name?");


    if (filteredProducts.length > 0) {

        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "col my-4 item";
            productDiv.innerHTML = `
                            <div class="card item-child mx-auto" style="width: 18rem">
                               <img class="rounded-top-2" src="../../assets/img/amd-img-product.jpg" alt="">
                               <div class="card-body item-body">
                                  <h5 class="card-title item-title">${product.name}</h5>
                                  <ul class="item-ul p-0">
                                    <li class="list-group-item item-li">${product.core} Core - ${product.threads} Threads</li>
                                    <li class="list-group-item item-li">Socket ${product.socket}</li>
                                    <li class="list-group-item item-li">Max. frequency ${product.turbofrequency} GHz</li>
                                    <li class="list-group-item item-li">Graphics: ${product.graphics.type}</li>
                                  </ul>
                                  <div class="d-flex justify-content-start align-items-center item-button-container btn-group w-50">
                                  </div>
                               </div>                              
                            </div>`;
            productsDiv.appendChild(productDiv);
        });
        for (let i = 0; i <= cpuDataTmp.length; i++) {
            let item = document.createElement("a");
            item.className = "btn btn-sm btn-outline-secondary item-button text-decoration-none text-dark productItem";
            item.id = "" + i;
            item.innerHTML = "View";
            item.href = "./product_cpu.html";
            item.target = "";
            item.addEventListener("click", function () {
                localStorage.setItem("index", "" + i + "");
                localStorage.setItem("cpuDataTmp", JSON.stringify(cpuDataTmp[i]));
            });
            document.getElementsByClassName("item-button-container")[i].appendChild(item);
        }
    } else {
        productsDiv.innerHTML = "<p class='text-white text-center p-2'>No products found.</p>";
    }
}


// Add event listener to form
const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    filterProducts();
});