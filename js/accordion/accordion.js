

  function closeOtherAccordions(currentAccordionId) {
    const accordions = document.querySelectorAll('.accordion-collapse');

    accordions.forEach(function(accordion) {
      if (accordion.id !== currentAccordionId) {
        const bsCollapse = new bootstrap.Collapse(accordion, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  }


  document.querySelectorAll('.accordion-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const targetAccordion = this.getAttribute('data-bs-target').substring(1); 
      closeOtherAccordions(targetAccordion);
    });
  });

