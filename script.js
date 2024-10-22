 //  // Add event listeners to hero section button
   document.querySelector('.hero button').addEventListener('click', function() {
    // Scroll to contact section
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
  });   

  function dialNumber(number) {
    // This will work in most browsers, but may not be supported everywhere
    // It uses the tel: protocol to open the dialer
    window.location.href = `tel:${number}`;
}

   
   
   
   // JavaScript to handle the button click and show SweetAlert
    document.getElementById('contact-btn').addEventListener('click', function() {
        Swal.fire({
          title: "HelpLine No: 7080203522, 7388311110",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
    })
    document.getElementById('privacy-link').addEventListener('click', function(event) {
        event.preventDefault();
        Swal.fire({
          title: `This Privacy Policy outlines how Dr. Divya Agrawal ("we," "our," or "us") collects, uses, discloses, and protects your personal information when you visit our website or use our services. We are committed to safeguarding your privacy and ensuring that your personal information is protected.`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
    });

    document.getElementById('terms-link').addEventListener('click', function(event) {
      event.preventDefault();
      Swal.fire({
        title: `This Privacy Policy outlines how Dr. Divya Agrawal ("we," "our," or "us") collects, uses, discloses, and protects your personal information when you visit our website or use our services. We are committed to safeguarding your privacy and ensuring that your personal information is protected.`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
  });
  