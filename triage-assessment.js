document.addEventListener("DOMContentLoaded", function () {
    function togglePainSections() {
        const painArea = document.getElementById("painArea").value;
        const cervicalPainSection = document.getElementById("cervicalPainSection");
        const legBackPainSection = document.getElementById("legBackPainSection");

        // Hide both sections initially
        cervicalPainSection.classList.add("hidden");
        legBackPainSection.classList.add("hidden");

        // Show the appropriate section based on selection
        if (painArea === "cervical") {
            cervicalPainSection.classList.remove("hidden");
            cervicalPainSection.classList.add("fade-in");
        } else if (painArea === "lumbar" || painArea === "thoracic") {
            legBackPainSection.classList.remove("hidden");
            legBackPainSection.classList.add("fade-in");
        }
    }

    document.getElementById("painArea").addEventListener("change", togglePainSections);

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
