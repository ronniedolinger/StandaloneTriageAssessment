document.getElementById("triageForm").addEventListener("submit", function(event) {
    event.preventDefault();

        const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        painArea: document.getElementById("painArea").value,
        imaging: document.querySelector('input[name="imaging"]:checked')?.value,
        painManagement: document.querySelector('input[name="painManagement"]:checked')?.value,
        oral: document.getElementById("oral").checked ? "Yes" : "No",
        injections: document.getElementById("injections").checked ? "Yes" : "No"
    };

    

     console.log("Submitting Data:", formData);

    const submitButton = document.getElementById("submitButton");
    const loadingSpinner = document.getElementById("loadingSpinner");

    submitButton.disabled = true;
    loadingSpinner.style.display = "block";

function togglePainSections() {
    const painArea = document.getElementById("painArea").value;
    const cervicalPainSection = document.getElementById("cervicalPainSection");
    const legBackPainSection = document.getElementById("legBackPainSection");
    const medicalHistorySection = document.getElementById("medicalHistorySection");

    cervicalPainSection.style.display = painArea === "cervical" ? "block" : "none";
    legBackPainSection.style.display = (painArea === "thoracic" || painArea === "lumbar") ? "block" : "none";
    medicalHistorySection.style.display = painArea ? "block" : "none";
}

// Date Validation for MM/DD/YYYY format
document.getElementById("dateOfBirth").addEventListener("input", function() {
    const dob = this.value;
    const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    if (!pattern.test(dob)) {
        this.setCustomValidity("Please enter a valid date in MM/DD/YYYY format.");
    } else {
        this.setCustomValidity("");
    }
});


    setTimeout(() => {
        loadingSpinner.style.display = "none";
        submitButton.disabled = false;
        alert("Form submitted successfully!");
    }, 2000); // Simulate processing delay
});
