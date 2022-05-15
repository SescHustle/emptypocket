$(document).ready(function(){
    $('button.btn-expenses__add').click(function () {
        console.log(this);
        this.textContent = (this.textContent === 'Cancel') ? 'Add New' : 'Cancel';
        $('form.expenses__add').toggleClass('hidden');
    });

    $('form.expenses__add').submit(function (e) { 
        e.preventDefault();
    });
});