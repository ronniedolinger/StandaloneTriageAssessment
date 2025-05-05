document.addEventListener("DOMContentLoaded", function () {
    const painArea = document.getElementById("painArea");
    const cervicalPainSection = document.getElementById("cervicalPainSection");
    const legBackPainSection = document.getElementById("legBackPainSection");

    // Ensure elements exist before modifying
    if (!painArea || !cervicalPainSection || !legBackPainSection) {
        console.error("Error: One or more required elements are missing.");
        return;
    }

    function togglePainSections() {
        const selectedPainArea = painArea.value;

        // Hide all sections initially
        cervicalPainSection.style.display = "none";
        legBackPainSection.style.display = "none";

        // Show the correct section based on selection
        if (selectedPainArea === "cervical") {
            cervicalPainSection.style.display = "block";
            cervicalPainSection.classList.add("fade-in");
        } else if (selectedPainArea === "lumbar" || selectedPainArea === "thoracic") {
            legBackPainSection.style.display = "block";
            legBackPainSection.classList.add("fade-in");
        }
    }

    painArea.addEventListener("change", togglePainSections);

    // Validate Date of Birth format (MM/DD/YYYY)
    document.getElementById("dateOfBirth").addEventListener("input", function () {
        const dob = this.value;
        const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        if (!pattern.test(dob)) {
            this.setCustomValidity("Please enter a valid date in MM/DD/YYYY format.");
        } else {
            this.setCustomValidity("");
        }
    });

    // Show loading spinner during form submission
    document.getElementById("triageForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const submitButton = document.getElementById("submitButton");
        const loadingSpinner = document.getElementById("loadingSpinner");

        submitButton.disabled = true;
        loadingSpinner.classList.remove("hidden");

        // Simulate form submission delay
        setTimeout(() => {
            loadingSpinner.classList.add("hidden");
            submitButton.disabled = false;
            alert("Form submitted successfully!");
        }, 2000);
    });
});
