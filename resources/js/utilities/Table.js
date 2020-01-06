export let global_vars = {
    CURRENT_SELECTED_ITEM: ""
}

export default class Table {

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
            responsive: true,
            select: true,
            ajax: {
                "url": "/",
                "dataSrc": ""
            },
            "deferRender": true,
            "aaSorting": [],
            columns: []
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
        $(this.table_id + ' tbody').on('click', 'tr', function () {
            fx();
        });
    }

    mount() {
        this.table = $(this.table_id).DataTable(this.opts);
    }

    load(input = '', callback = function (success) { }) {
        this.table = $(this.table_id).DataTable(this.opts);
        var target_table = this.getTable();
        if (this.opts.select) {
            $(this.table_id + ' tbody').on('click', 'tr', function () {
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
    reload(callback = function (success) { }) {
        this.table.ajax.reload(null, false);
        callback(true);
    }
}


