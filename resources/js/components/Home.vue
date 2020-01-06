<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="container-fluid mt-3">
          <div class="card shadow-sm">
            <div class="navi text-white card-header shadow-sm">
              <i class="fas fa-chart-line"></i> Dashboard
            </div>
            <div class="card-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-6 col-md-3 mb-2">
                    <div class="card">
                      <div class="card-header bg-primary text-white">
                        <i class="fas fa-users"></i> Total User
                      </div>
                      <div class="card-body">
                        <h2 class="card-title text-center">5</h2>
                      </div>
                      <div class="card-footer">
                        <a href class="text-center">
                          More info
                          <i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3 mb-2">
                    <div class="card">
                      <div class="card-header bg-primary text-white">
                        <i class="fas fa-users"></i> Total User
                      </div>
                      <div class="card-body">
                        <h2 class="card-title text-center">5</h2>
                      </div>
                      <div class="card-footer">
                        <a href class="text-center">
                          More info
                          <i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3 mb-2">
                    <div class="card">
                      <div class="card-header bg-primary text-white">
                        <i class="fas fa-users"></i> Total User
                      </div>
                      <div class="card-body">
                        <h2 class="card-title text-center">5</h2>
                      </div>
                      <div class="card-footer">
                        <a href class="text-center">
                          More info
                          <i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3 mb-2">
                    <div class="card">
                      <div class="card-header bg-primary text-white">
                        <i class="fas fa-users"></i> Total User
                      </div>
                      <div class="card-body">
                        <h2 class="card-title text-center">5</h2>
                      </div>
                      <div class="card-footer">
                        <a href class="text-center">
                          More info
                          <i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_: []
    };
  },
  methods: {},
  mounted() {},

  beforeRouteLeave(to, from, next) {
    NGCS();
    next();
  }
};
</script>
