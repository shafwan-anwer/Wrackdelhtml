// Free Audit Modal JavaScript

(function() {
    'use strict';

    // Function to open the modal
    function openAuditModal() {
        var modal = document.getElementById('auditModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    // Function to close the modal
    function closeAuditModal() {
        var modal = document.getElementById('auditModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {

        // Get modal elements
        var modal = document.getElementById('auditModal');
        var closeBtn = document.querySelector('.audit-modal-close');

        // Close modal when clicking the X button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeAuditModal);
        }

        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeAuditModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeAuditModal();
            }
        });

        // Find all "Free Audit" buttons and add click handlers
        var auditButtons = document.querySelectorAll('a[href="contact.html"]');
        auditButtons.forEach(function(button) {
            // Check if this is actually a Free Audit button by checking its text content
            var buttonText = button.textContent.toLowerCase();
            if (buttonText.includes('free audit') || buttonText.includes('get a free audit')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    openAuditModal();
                });
            }
        });

        // Handle form submission
        var auditForm = document.getElementById('auditForm');
        if (auditForm) {
            auditForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Get form data
                var formData = {
                    name: document.getElementById('auditName').value,
                    email: document.getElementById('auditEmail').value,
                    phone: document.getElementById('auditPhone').value,
                    company: document.getElementById('auditCompany').value,
                    website: document.getElementById('auditWebsite').value,
                    service: document.getElementById('auditService').value,
                    message: document.getElementById('auditMessage').value
                };

                // Show success message
                var successMessage = document.querySelector('.audit-success-message');
                if (successMessage) {
                    successMessage.style.display = 'block';
                }

                // Hide form
                auditForm.style.display = 'none';

                // Log form data (you can replace this with actual form submission to a server)
                console.log('Audit Form Submitted:', formData);

                // Here you would typically send the data to your server
                // Example:
                // fetch('/submit-audit', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // })
                // .then(response => response.json())
                // .then(data => {
                //     console.log('Success:', data);
                // });

                // Close modal after 2 seconds
                setTimeout(function() {
                    closeAuditModal();
                    // Reset form and hide success message
                    auditForm.style.display = 'block';
                    auditForm.reset();
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                }, 2000);
            });
        }
    });

    // Make functions available globally if needed
    window.openAuditModal = openAuditModal;
    window.closeAuditModal = closeAuditModal;

})();
