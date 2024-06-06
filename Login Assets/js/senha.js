document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    document.getElementById('successModal').style.display = 'flex';

    
    document.getElementById('closeModalButton').addEventListener('click', function() {
        document.getElementById('successModal').style.display = 'none';
        window.location.href = '/index.html';
    });
});
