import Table from './Table';
import NTable from './NTable';

export class ChargesTable extends NTable {

    constructor(table, withButtons, datalist = [], group_c, buttonAction = () => {}) {
        super();
        super.init_group(table, group_c, withButtons);

        this.opts.data = datalist;

        // this.opts['dom'] = 'Bfrtip';

        // this.opts['buttons'] = [{
        //     text: 'Refresh Grades',
        //     action: (e, dt, node, config) => {
        //         buttonAction();
        //     }
        // }];

        this.opts.columns = [{
                title: "Charge Type",
                data: "type"
            },
            {
                title: "Charge Name",
                data: "name"
            },
            {
                title: "Charge Cost",
                data: "cost"
            }
        ]

        //this.opts.ajax.url = "/api/grades";


        // if (!withActions) {
        //     this.opts['columns'].shift();
        // }

    }
}