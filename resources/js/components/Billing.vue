<template>
  <div class="row">
    <div class="col-lg-4 col-md-12">
      <div class="card">
        <div class="card-header navi text-white">Guest Information</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>Guest Transaction Number</label>
              <input type="text" class="form-control" />
            </div>
            <hr />
            <button class="form-control btn navi text-white btn-md">Search Transaction Number</button>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="card-header navi text-white">Charge Control</div>
        <div class="card-body">
          <form @submit="save($event)">
            <div class="form-group">
              <label>Charge Type</label>
              <select class="form-control" id="ctype">
                <option value="0">Meal Charge [POS]</option>
                <option value="1">Laundry Charge [House Keeping]</option>
                <option value="2">Property Charge [Assets]</option>
                <option value="3">Check in Charge [Front Office]</option>
              </select>
            </div>
            <div class="form-group">
              <label>Charge Name</label>
              <input type="text" class="form-control" id="cname" />
            </div>
            <div class="form-group">
              <label>Charge Cost</label>
              <input type="number" class="form-control" min="0" id="ccost" />
            </div>

            <hr />
            <button class="form-control btn navi text-white btn-md">Apply to Current Bill</button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-lg-8 col-md-12">
      <div class="card">
        <div class="card-header navi text-white">Charges</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-stripped" id="charges-tbl"></table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChargesTable } from "../utilities/Tables";
export default {
  data() {
    return {
      table_g: [],
      table_data: [],
      loadedTable: false
    };
  },
  methods: {
    save(e) {
      e.preventDefault();
      this.table_data.push({
        type: $('#ctype option:selected').text(),
        name: $('#cname').val(),
        cost: $('#ccost').val(),
        ctype_id: $('#ctype').val()
      });
      this.table_g.getTable().clear().rows.add(this.table_data).draw();
    }
  },
  mounted() {
    this.table_g = new ChargesTable("#charges-tbl", false, this.table_data, 0);

    this.table_g.load();
    this.loadedTable = true;
  }
};
</script>