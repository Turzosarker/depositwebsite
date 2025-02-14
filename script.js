document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let amount = document.getElementById('amount').value;
    let paymentMethod = document.getElementById('paymentMethod').value;
    let transactionId = document.getElementById('transactionId').value;

    // Data validation check
    if (!name || !mobile || !amount || !paymentMethod) {
        alert("⚠️ সব তথ্য ঠিকভাবে পূরণ করুন!");
        return;
    }

    // Save to local storage (Optional)
    localStorage.setItem('name', name);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('amount', amount);
    localStorage.setItem('paymentMethod', paymentMethod);
    localStorage.setItem('transactionId', transactionId);

    // Redirect to success page
    window.location.href = "success.html";
});