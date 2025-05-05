document.addEventListener("DOMContentLoaded", function () {
    // function togglePainSections() {
    //     const painArea = document.getElementById("painArea").value;
    //     const cervicalPainSection = document.getElementById("cervicalPainSection");
    //     const legBackPainSection = document.getElementById("legBackPainSection");

    //     cervicalPainSection.classList.add("hidden");
    //     legBackPainSection.classList.add("hidden");

    //     if (painArea === "cervical") {
    //         cervicalPainSection.classList.remove("hidden");
    //     } else if (painArea === "thoracic" || painArea === "lumbar") {
    //         legBackPainSection.classList.remove("hidden");
    //     }
    // }

        function togglePainSections() {
        const painArea = document.getElementById("painArea").value;
        document.getElementById("cervicalPainSection").classList.toggle("hidden", painArea !== "cervical");
    }

    document.getElementById("painArea").addEventListener("change", togglePainSections);
});


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
});
