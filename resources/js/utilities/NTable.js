export let global_vars = {
    CURRENT_SELECTED_ITEM: ""
}

export default class NTable {

    constructor() {
        this.table = null;
        this.opts = {};
        this.table_id = "";
    }

    getGv() {
        return global_vars.CURRENT_SELECTED_ITEM;
    }

    getTable() {
        return this.table;
    }

    init(table, withButtons = false) {
        this.opts = {
            select: true,
            responsive: true,
            "deferRender": true,
            "aaSorting": [],
            columns: [],
            pageLength: 10
        };

        if (withButtons) {
            this.opts['dom'] = 'lBfrtip';
            this.opts['buttons'] = [
                'copy',
                'csv',
                'excel',
                'pdf',
                'print'
            ];
        }


        this.table_id = table;
    }

    init_group(table, groupColumn, withButtons = false) {

        this.opts = {
            select: true,
            columnDefs: [{
                visible: false,
                targets: groupColumn
            }],
            order: [
                [groupColumn, 'asc']
            ],
            displayLength: 25,
            drawCallback: function(settings) {
                var api = this.api();
                var rows = api.rows({
                    page: 'current'
                }).nodes();
                var last = null;

                api.column(groupColumn, {
                    page: 'current'
                }).data().each(function(group, i) {
                    if (last !== group) {
                        $(rows).eq(i).before(
                            '<tr class="group"><td colspan="5"><b>' + group + '</b></td></tr>'
                        );

                        last = group;
                    }
                });
            }
        };

        if (withButtons) {
            this.opts['dom'] = 'lBfrtip';
            this.opts['buttons'] = [
                'copy',
                'csv',
                'excel',
                'pdf',
                'print'
            ];
        }


        this.table_id = table;
    }

    init2(table, withButtons = false) {
        this.opts = {
            serverSide: true,
            responsive: true,
            select: true,
            "deferRender": true,
            "aaSorting": [],
            columns: [],
            pageLength: 10
        };

        if (withButtons) {
            this.opts['dom'] = 'Bfrtip';
            this.opts['buttons'] = [
                'copy',
                'csv',
                'excel',
                'pdf',
                'print'
            ];
        }


        this.table_id = table;
    }

    OnClickRow(fx) {
        $(this.table_id + ' tbody').on('click', 'tr', function() {
            fx();
        });
    }

    mount() {
        this.table = $(this.table_id).DataTable(this.opts);
    }

    load(input = '', callback = function(success) {}) {
        console.log('loading table');
        this.table = $(this.table_id).DataTable(this.opts);
        var target_table = this.getTable();
        if (this.opts.select) {
            $(this.table_id + ' tbody').on('click', 'tr', function() {
                global_vars.CURRENT_SELECTED_ITEM = target_table.row(this).data();
                if ($(this).hasClass('bg-primary')) {
                    $(this).removeClass('bg-primary');
                    $(this).removeClass('text-white');
                } else {
                    target_table.$('tr.bg-primary').removeClass('text-white');
                    target_table.$('tr.bg-primary').removeClass('bg-primary');
                    $(this).addClass('bg-primary');
                    $(this).addClass('text-white');
                    if (input !== '') {
                        $(input).val(global_vars.CURRENT_SELECTED_ITEM.code);
                    }
                }
            });
        }
        callback(global_vars.CURRENT_SELECTED_ITEM !== "");
    }

    reload_change(url, callback) {
        this.table.ajax.url(url).load(() => {
            callback(true);
        });
    }
    reload(callback = function(success) {}) {
        this.table.ajax.reload(null, false);
        callback(true);
    }
}