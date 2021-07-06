<template>
  <div class="app-container">
    <div class="app-header">
      <h1>检测因子维护</h1>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    methods: {
    }
  }
</script>

<style scoped>
  .line {
    text-align: center;
  }

  .app-container {
    background-color: #EEEEEE;
    padding: 0px;
    height: calc(100vh - 56px);
    display: flex;
    flex-flow: column;
  }


  #table-container {
    background-color: #FFFFFF;
    position: relative;
    box-shadow: 0px 0px 10px #888888;
    flex: 1;

  }

  .el-col {
    height: 100%;
    box-shadow: 0px 0px 10px #888888;
    position: absolute;
    right: 0;
    border-radius: 6px;
    overflow: hidden;
  }

  #top {
    z-index: 1;
  }

  #second {
    z-index: 2;
  }

  #third {
    z-index: 3;
  }

  #fourth {
    z-index: 4;
  }

  #graphDialog {
    padding: 0;
  }

  .app-header h1 {
    float: left;
  }

  .app-header .el-button {
    float: right;
    margin-top: 15px;
  }
</style>
