// Tab switching logic
document.querySelectorAll('.tablink').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons and tabs
    document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tabcontent').forEach(tab => tab.classList.remove('active'));
    // Activate this button and corresponding tab
    this.classList.add('active');
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});

// Feedback form handling
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let txt = document.getElementById('userFeedback').value.trim();
  let msg = document.getElementById('feedbackMessage');
  if(txt.length > 1){
    msg.textContent = "Thank you for your feedback! 🚀";
    this.reset();
    // Optionally store feedback or send to server here
  } else {
    msg.textContent = "Please write something before submitting!";
  }
});