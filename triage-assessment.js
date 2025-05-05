document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle visibility of assessment sections based on selection
    function togglePainSections() {
        const painArea = document.getElementById("painArea").value;
        const cervicalPainSection = document.getElementById("cervicalPainSection");
        const legBackPainSection = document.getElementById("legBackPainSection");
        const medicalHistorySection = document.getElementById("medicalHistorySection");

        // Hide all sections by default
        cervicalPainSection.style.display = "none";
        legBackPainSection.style.display = "none";
        medicalHistorySection.style.display = "none";

        // Show the appropriate section based on selection
        if (painArea === "cervical") {
            cervicalPainSection.style.display = "block";
            cervicalPainSection.classList.add("fade-in");
            medicalHistorySection.style.display = "block";
            medicalHistorySection.classList.add("fade-in");
        } else if (painArea === "thoracic" || painArea === "lumbar") {
            legBackPainSection.style.display = "block";
            legBackPainSection.classList.add("fade-in");
            medicalHistorySection.style.display = "block";
            medicalHistorySection.classList.add("fade-in");
        }
    }

    // Attach event listener to the dropdown
    document.getElementById("painArea").addEventListener("change", togglePainSections);

    // Function to validate date input format (MM/DD/YYYY)
    document.getElementById("dateOfBirth").addEventListener("input", function () {
        const dob = this.value;
        const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        if (!pattern.test(dob)) {
            this.setCustomValidity("Please enter a valid date in MM/DD/YYYY format.");
        } else {
            this.setCustomValidity("");
        }
    });

    // Form submission logic with loading spinner
    document.getElementById("triageForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const submitButton = document.getElementById("submitButton");
        const loadingSpinner = document.getElementById("loadingSpinner");

        // Show spinner only when submitting, then hide it after processing
        submitButton.disabled = true;
        loadingSpinner.style.display = "block";

        setTimeout(() => {
            loadingSpinner.style.display = "none";
            submitButton.disabled = false;
            alert("Form submitted successfully!");
        }, 2000);
    });
});
