document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const reviewData = {};
    
    formData.forEach((value, key) => {
        reviewData[key] = value;
    });
    
    const email = 'sidrablackwelder@gmail.com';
    const subject = 'New Internship Review Submission';
    const body = JSON.stringify(reviewData, null, 2);
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    alert('Thank you for your review! It will be reviewed and posted shortly.');
    event.target.reset();
});

