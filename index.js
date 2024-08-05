document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.menu-wrapper');
    const modals = document.querySelectorAll('.modal');
    const select = document.getElementById('options');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.querySelectorAll('#close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) {
                console.log(`Closing modal: ${modalId}`);
                modal.style.display = 'none';
            } else {
                console.error(`No modal found with ID: ${modalId}`);
            }
        });
    });

    select.addEventListener('change', function(event) {
        modals.forEach(modal => modal.style.display = 'none');

        const selectedValue = event.target.value;
        let modalToShow;

        if (selectedValue === 'item1') {
            modalToShow = document.getElementById('modal1');
        } else if (selectedValue === 'item2') {
            modalToShow = document.getElementById('modal2');
        } else if (selectedValue === 'item3') {
            modalToShow = document.getElementById('modal3');
        } else {
            console.error(`Unexpected value: ${selectedValue}`);
        }

        if (modalToShow) {
            console.log(`Showing modal: ${modalToShow.id}`);
            modalToShow.style.display = 'flex';
        } else {
            console.error(`No modal found for selected value: ${selectedValue}`);
        }
    });
});


