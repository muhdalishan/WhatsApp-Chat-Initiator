function startChat() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = encodeURIComponent("Hello!"); // URL encode the message
    var url = 'https://wa.me/' + phoneNumber + '?text=' + message;
    window.open(url, '_blank');
}