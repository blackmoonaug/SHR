<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-lg-12">
        <img src="/images/404.png" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  beforeRouteLeave(to, from, next) {
    NGCS();
    next();
  }
};
</script>