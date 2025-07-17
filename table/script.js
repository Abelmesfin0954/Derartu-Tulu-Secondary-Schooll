document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.getElementById('subscriptionBody');

    function addRecord(email, dateSubscribed) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + email + '</td>' +
                            '<td>' + dateSubscribed + '</td>';
        tableBody.appendChild(newRow);
    }

    function subscribe() {
        var emailInput = document.getElementById('emailInput');
        var email = emailInput.value.trim();

        if (email !== '') {
            // Simulate getting the current date
            var currentDate = new Date().toISOString().split('T')[0];
            addRecord(email, currentDate);

            // Clear input field after subscription
            emailInput.value = '';

            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email address.');
        }
    }
});
