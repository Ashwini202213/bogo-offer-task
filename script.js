
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const totalElement = document.querySelector(".total p:last-child"); // Selecting total price text

    // Hide all selection sections initially
    options.forEach(option => {
        option.querySelector(".selection").style.display = "none";
    });

    // Add event listener to each radio button
    options.forEach(option => {
        const radio = option.querySelector("input[type='radio']");
        const priceElement = option.querySelector(".price"); // Get price element

        radio.addEventListener("change", function () {
            // Hide all selection sections
            options.forEach(opt => {
                opt.querySelector(".selection").style.display = "none";
            });

            // Show the selection section of the selected option
            option.querySelector(".selection").style.display = "flex";

            // Update the total price
            totalElement.textContent = `Total: ${priceElement.textContent.trim()}`;
        });
    });
});
