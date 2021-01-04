$(function (){
    var link = $('a[data-toggle="modal"');
    link.on('click',function(event) {
        var work = $(this).attr('data-work');
        var modal = $('.modal');
        modal.find('.modal-body').load(work+'.html');
    });
});