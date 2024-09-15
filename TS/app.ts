const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const imageInput = document.getElementById('image') as HTMLInputElement;
    const imageFile = imageInput.files?.[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageURL = event.target?.result as string;
            const resumeHTML = `
                <img src="${imageURL}" alt="${name}'s Profile Picture">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>Experience:</strong> ${experience}</p>
            `;
            resumeOutput.innerHTML = resumeHTML;
            resumeOutput.style.display = 'block';
            form.style.display = 'none';
        };
        reader.readAsDataURL(imageFile);
    }
});
