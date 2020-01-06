var global_vars = {
    CURRENT_SELECTED_ITEM: ""
}
/* 
 ====================
 DataTable Setup
 ===================
*/

function table() {
    this.table = null;
    this.opts = {};
    this.table_id = "";
}

table.prototype.getTable = function () {
    return this.table;
}

table.prototype.init = function (table, withButtons = false) {
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

table.prototype.load = function (input = '', callback = function (success) { }) {
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

table.prototype.reload = function (callback = function (success) { }) {
    this.table.ajax.reload(null, false);
    callback(true);
}

/* 
=================
 Item Table -> DataTable.js Dependent
==================
*/

function itemTable() { }

itemTable.prototype = Object.create(table.prototype);

var alias_base_table = table.prototype.init;
itemTable.prototype.init = function (table, withButtons = false, withActions = true) {
    alias_base_table.call(this, table, withButtons);
    this.opts.columns = [{
        title: "Actions",
        data: "id",
        defaultContent: '',
        render: function (data) {
            return '<a href="/item/' + data + '" class="btn btn-info btn-sm text-white">View</a>'
        }
    },
    {
        title: "Item Name",
        data: "item_name"
    },
    {
        title: "Item Category",
        data: "category_name"
    },
    {
        title: "Item Value",
        data: "value",
        defaultContent: "",
        render: function (data) {
            return "₱ " + data;
        }
    },
    {
        title: "Unit Cost",
        data: "unit_cost",
        defaultContent: "",
        render: function (data) {
            return "₱ " + data;
        }
    },
    {
        title: "Scrap Value",
        data: "scrap_value",
        defaultContent: "",
        render: function (data) {
            return "₱ " + data;
        }
    },
    {
        title: "Est. Life",
        data: "estimated_life",
        defaultContent: "",
        render: function (data) {
            return data + " " + (data > 1 ? 'years' : 'year');
        }
    },
    {
        title: "Depreciation Value",
        data: "depvalue",
        defaultContent: "",
        render: function (data) {
            return "₱ " + Math.floor(data);
        }
    },
    {
        title: "Critical Quantity",
        data: "critical_stock"
    },
    {
        title: "Item Code",
        data: "code"
    },
    ]

    this.opts.ajax.url = "/item";


    if (!withActions) {
        this.opts['columns'].shift();
    }

}





/*
==============
Export Table
==============
*/

function exportTable() {
    itemTable.call(this);
}

exportTable.prototype = Object.create(itemTable.prototype);

exportTable.prototype.generateDateRPT = function (sd = '', ed = '', callback = '') {
    this.table.ajax.url('/isys_util/export/item/export/' + sd + '/' + ed).load((e) => {
        callback(e);
    }, true);
}


/*
=================
 Category Table 
=================
*/

function categoryTable() { }

categoryTable.prototype = Object.create(table.prototype);

categoryTable.prototype.init = function (table, withButtons = false, withActions = true) {
    alias_base_table.call(this, table, withButtons);
    this.opts.columns = [{
        title: "Category Name",
        data: "category_name"
    }]

    this.opts.ajax.url = "/category";

    if (!withActions) {
        this.opts['columns'].shift();
    }

}

/*
============
Add item Table
==============
*/

function addItemTable() { }

addItemTable.prototype = Object.create(table.prototype);

addItemTable.prototype.init = function (table) {
    alias_base_table.call(this, table);
    this.opts.columns = [
        {
            title: "Item id",
            data: "id"
        },
        {
            title: "Item Code",
            data: "code"
        },
        {
            title: "Item Name",
            data: "item_name"
        },
        {
            title: "Item Category",
            data: "category_name"
        },
    ];

    this.opts.ajax.url = "/source/items";

}

/*
============
Transaction Table
==============
*/

function transactionTable() { }

transactionTable.prototype = Object.create(table.prototype);

transactionTable.prototype.init = function (table, withButton = false, withActions = false) {
    alias_base_table.call(this, table, withButton);
    this.opts.columns = [{
        title: "Code",
        data: "transaction_code",
        defaultContent: '',
        render: function (data) {
            var arr = data.split('_');
            return Date.parse(arr[0]) + '_' + arr[1];
        }
    },
    {
        title: "Transaction",
        data: "move_type"
    },
    {
        title: "Source",
        data: "source"
    },
    {
        title: "Destination",
        data: "destination"
    },
    {
        title: "Date",
        data: "created_at"
    },
    {
        title: "Actions",
        data: "transaction_code",
        defaultContent: '',
        render: function (data) {
            var arr = data.split('_');
            var construct = "\'" + (Date.parse(arr[0]) + '_' + arr[1]) + "\'";
            return '<button onclick="viewItems(' + construct + ')" class="btn-sm btn btn-success"> View Items </button>'
        }
    }

    ]

    this.opts.ajax.url = "/transaction";


    if (!withActions) {
        this.opts['columns'].pop();
    }
}

/**
 * =========
 * User Table
 * =========
 */

function userTable() { }

userTable.prototype = Object.create(table.prototype);

var base_tbl = table.prototype.init;

userTable.prototype.init = function (table, withButton = false, withActions = false) {
    base_tbl.call(this, table, withButton);

    this.opts.columns = [{
        title: "Email",
        data: "email"
    },
    {
        title: "Name",
        data: "name"
    },
    {
        title: "Role",
        data: "role",
        defaultContent: '',
        render: function (data) {
            return data === 0 ? 'Admin' : 'User'
        }
    },
    {
        title: "Creation Date",
        data: "created_at"
    },
    {
        title: "Actions",
        data: "id",
        defaultContent: '',
        render: function (data) {
            return '<a href="/users/edit/' + data + '" class="btn-sm btn btn-success"> Edit User </a>'
        }
    }

    ]

    this.opts.ajax.url = "/users/getUsers";


    if (!withActions) {
        this.opts['columns'].pop();
    }
}

/**
 * ===============
 * Department Table
 * ===============
 */

function departmentTable() { }

departmentTable.prototype = Object.create(table.prototype);
var alias_dept = table.prototype.init;

departmentTable.prototype.init = function (table, withActions = false, withButtons = false) {
    alias_dept.call(this, table, withButtons);

    this.opts.columns = [{
        title: "Department Code",
        data: "department_code"
    },
    {
        title: "Department Name",
        data: "department_name"
    },
    {
        title: "Actions",
        data: "id",
        defaultContent: '',
        render: function (data) {
            return '<a href="/departments/edit/' + data + '" class="btn-sm btn btn-success"> Edit Department </a>'
        }
    }

    ]

    this.opts.ajax.url = "/departments/getDepts";


    if (!withActions) {
        this.opts['columns'].pop();
    }
}


/**
 * ================
 * Deliveries Table
 * ================
 */

function deliveries() { }

deliveries.prototype = Object.create(table.prototype);

var alias_dr = table.prototype.init;

deliveries.prototype.init = function (table, withActions = false, withButtons = false) {
    alias_dr.call(this, table, withButtons);

    this.opts.columns = [
        {
            title: "Code",
            data: "transaction_code",
            defaultContent: '',
            render: function (data) {
                var arr = data.split('_');
                return Date.parse(arr[0]) + '_' + arr[1];
            }
        },
        {
            title: "Supplier",
            data: "supplier"
        },
        {
            title: "OR Number",
            data: "OR_NUM"
        },
        {
            title: "Processed By",
            data: "name"
        },
        {
            title: "Date",
            data: "created_at"
        },
        {
            title: "Actions",
            data: "transaction_code",
            defaultContent: '',
            render: function (data) {
                var arr = data.split('_');
                var construct = "\'" + (Date.parse(arr[0]) + '_' + arr[1]) + "\'";
                return '<button onclick="viewDR(' + construct + ')" class="btn-sm btn btn-success"> View Items </button>'
            }
        }
    ];

    this.opts.ajax.url = "/transactions/deliveries";


    if (!withActions) {
        this.opts['columns'].pop();
    }
}

function viewDR(id) {
    console.log('initiating sequence');
    httpAjax('GET', '/transactions/deliveries/' + id, {})
        .catch(e => {
            console.log(e);
        })
        .then(r => {
            $("#tbl-body").html(r);
            $("#viewModal").modal('show');
        })
}

/**
 * =======================
 * Inventory Table
 * ======================
 */
function inventory() { }

inventory.prototype = Object.create(table.prototype);

var bc = table.prototype.init;
inventory.prototype.init = function (table, withButtons = false, withActions = true) {
    bc.call(this, table, withButtons);
    this.opts.columns = [{
        title: "Actions",
        data: "id",
        defaultContent: '',
        render: function (data) {
            return '<a href="/Inventory/edit/' + data + '" class="btn btn-info btn-sm text-white">Edit this item</a>'
        }
    },
    {
        title: "Item Code",
        data: "item_code"
    },
    {
        title: "Item Name",
        data: "item_name"
    },
    {
        title: "Location",
        data: "location"
    },
    {
        title: "Package Type",
        data: "package_type",
        defaultContent: "",
        render: function (data) {
            return (data === 1 ? 'Full Packed' : 'Loose Items');
        }
    },
    {
        title: "Package Size",
        data: "package_size"
    },
    {
        title: "Package Quantity",
        data: "package_quantity"
    },
    {
        title: "Status",
        data: "status",
        defaultContent: "",
        render: function (data) {
            return (data === 1 ? 'Good' : 'Bad');
        }
    }
    ]

    this.opts.ajax.url = "/Inventory/getInventory";


    if (!withActions) {
        this.opts['columns'].shift();
    }

}

/**
 * ==========================
 * Create Item Inventory Table
 * =========================
 */

function itemInventoryTable() { }

itemInventoryTable.prototype = Object.create(table.prototype);

var ab = table.prototype.init;

itemInventoryTable.prototype.init = function (table, withButtons = false) {
    ab.call(this, table, withButtons);
    this.opts.columns = [
        {
            title: "Item Name",
            data: "item_name"
        },
        {
            title: "Item Category",
            data: "category_name"
        },
        {
            title: "Critical Quantity",
            data: "critical_stock"
        },
        {
            title: "Item Code",
            data: "code"
        },
    ]

    this.opts.ajax.url = "/item";
}

function gradeTable() { }

gradeTable.prototype = Object.create(table.prototype);

var prog = table.prototype.init;

gradeTable.prototype.init = function (table, withButtons = false) {
    prog.call(this, table, withButtons);

    this.opts.columns = [
        {
            title: "Subject Code",
            data: "SubjectCode"
        },
        {
            title: "Subject Title",
            data: "SubjectTitle"
        },
        {
            title: "Final",
            data: "Final"
        },
        {
            title: "Date Posted",
            data: "DatePosted"
        }
    ]


    this.opts.ajax.url = "/grades/getUserGrades";

}

