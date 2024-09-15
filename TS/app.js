var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');

form.addEventListener('submit', function (e) {
    
    var _a;
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var imageInput = document.getElementById('image');
    var imageFile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            var resumeHTML = "\n                <img src=\"".concat(imageURL, "\" alt=\"").concat(name, "'s Profile Picture\">\n                <h2>").concat(name, "</h2>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Address:</strong> ").concat(address, "</p>\n                <p><strong>Skills:</strong> ").concat(skills, "</p>\n                <p><strong>Experience:</strong> ").concat(experience, "</p>\n            ");
            resumeOutput.innerHTML = resumeHTML;
            resumeOutput.style.display = 'block';
            form.style.display = 'none';
        };
        reader.readAsDataURL(imageFile);
    }
});
