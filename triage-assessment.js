document.addEventListener("DOMContentLoaded", function () {
    function togglePainSections() {
        const painArea = document.getElementById("painArea").value;
        const cervicalPainSection = document.getElementById("cervicalPainSection");
        const legBackPainSection = document.getElementById("legBackPainSection");
        const medicalHistorySection = document.getElementById("medicalHistorySection");

        cervicalPainSection.classList.add("hidden");
        legBackPainSection.classList.add("hidden");
        medicalHistorySection.classList.add("hidden");

        if (painArea === "cervical") {
            cervicalPainSection.classList.remove("hidden");
            medicalHistorySection.classList.remove("hidden");
        } else if (painArea === "thoracic" || painArea === "lumbar") {
            legBackPainSection.classList.remove("hidden");
            medicalHistorySection.classList.remove("hidden");
        }
    }

    document.getElementById("painArea").addEventListener("change", togglePainSections);

    document.getElementById("dateOfBirth").addEventListener("input", function () {
        const dob = this.value;
        const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        if (!pattern.test(dob)) {
            this.setCustomValidity("Please enter a valid date in MM/DD/YYYY format.");
        } else {
            this.setCustomValidity("");
        }
    });

    document.getElementById("triageForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const submitButton = document.getElementById("submitButton");
        const loadingSpinner = document.getElementById("loadingSpinner");

        submitButton.disabled = true;
        loadingSpinner.classList.remove("hidden");

        setTimeout(() => {
            loadingSpinner.classList.add("hidden");
            submitButton.disabled = false;
            alert("Form submitted successfully!");
        }, 2000);
    });
});
