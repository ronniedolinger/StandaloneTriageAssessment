document.addEventListener("DOMContentLoaded", function () {
    function togglePainSections() {
        const painArea = document.getElementById("painArea").value;
        const cervicalPainSection = document.getElementById("cervicalPainSection");
        const legBackPainSection = document.getElementById("legBackPainSection");

        // Hide all sections initially
        cervicalPainSection.classList.add("hidden");
        legBackPainSection.classList.add("hidden");

        // Show the correct section based on selection
        if (painArea === "cervical") {
            cervicalPainSection.classList.remove("hidden");
            cervicalPainSection.classList.add("fade-in");
        } else if (painArea === "lumbar" || painArea === "thoracic") {
            legBackPainSection.classList.remove("hidden");
            legBackPainSection.classList.add("fade-in");
        }
    }

    document.getElementById("painArea").addEventListener("change", togglePainSections);
});


    document.getElementById("dateOfBirth").addEventListener("input", function () {
        const dob = this.value;
        const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
        if (!pattern.test(dob)) {
            this.setCustomValidity("Please enter a valid date in MM/DD/YYYY format.");
        } else {
            this.setCustomValidity("");
        }
    });
});
