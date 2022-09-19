
$(document).ready(function () {
    $('#jsTable').DataTable({
        order: [[3, 'desc']],
        ajax: '/comments',
        columns: [
            {data: 'name'},
            {data: 'website'},
            {data: 'comment'},
            {data: 'created_at'},
        ],

    });
});
