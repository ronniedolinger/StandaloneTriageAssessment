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

    fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert("Form submitted successfully!"))
    .catch(error => alert("Submission failed. Please try again."));
});