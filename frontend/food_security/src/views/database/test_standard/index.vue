<template>
  <div class="app-container">
    <div class="app-header">
      <h1>检测标准维护</h1>
    </div>
    <el-card class="content-card">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="标准类型:">
          <el-input v-model="searchForm.type" placeholder="请输入类型"></el-input>
        </el-form-item>
        <el-form-item label="标准号:">
          <el-input v-model="searchForm.standardNum" placeholder="请输入标准号"></el-input>
        </el-form-item>
        <el-form-item label="年代号:">
          <el-input v-model="searchForm.yearNum" placeholder="请输入年代号"></el-input>
        </el-form-item>
        <el-form-item label="标准名称:">
          <el-input v-model="searchForm.name" placeholder="请输入检测标准名称"></el-input>
        </el-form-item>
        <el-form-item label="标准全称:">
          <el-input v-model="searchForm.fullName" placeholder="请输入检测标准全称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-button type="primary" @click="openNewDialog">新增</el-button>

      <el-table :data="tableData" style="width: 100%" border max-height="500">
        <el-table-column fixed type="selection" width="55">
        </el-table-column>

        <el-table-column prop="type" label="类型" width="100">
        </el-table-column>
        <el-table-column prop="standardNum" label="标准号" width="180">
        </el-table-column>
        <el-table-column prop="yearNum" label="年代号" width="150">
        </el-table-column>
        <el-table-column prop="name" label="检测标准名称" width="300">
        </el-table-column>
        <el-table-column prop="fullName" label="检测标准全称" width="400">
        </el-table-column>
        <!--
        <el-table-column fixed="right" label="查看详情" width="200">
          <template slot-scope="scope">
            <el-button @click.native.prevent="showDetailDialog(scope.$index, tableData4)" type="text" size="small">
              查看
            </el-button>
          </template>
        </el-table-column>
        -->
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchForm: {
          user: '',
          region: ''
        },
        tableData: [{
          type: 'GB',
          standardNum: 'GB 5009.12-2017',
          yearNum: '2017',
          name: '食品安全国家标准 食品中铅的测定',
          fullName: 'GB 5009.12-2017 《食品安全国家标准 食品中铅的测定》'
        }, {
          type: 'GB',
          standardNum: 'GB 5009.12-2017',
          yearNum: '2017',
          name: '食品安全国家标准 食品中铅的测定',
          fullName: 'GB 5009.12-2017 《食品安全国家标准 食品中铅的测定》'
        }, {
          type: 'GB',
          standardNum: 'GB 5009.12-2017',
          yearNum: '2017',
          name: '食品安全国家标准 食品中铅的测定',
          fullName: 'GB 5009.12-2017 《食品安全国家标准 食品中铅的测定》'
        }, {
          type: 'GB',
          standardNum: 'GB 5009.12-2017',
          yearNum: '2017',
          name: '食品安全国家标准 食品中铅的测定',
          fullName: 'GB 5009.12-2017 《食品安全国家标准 食品中铅的测定》'
        }, {
          type: 'GB',
          standardNum: 'GB 5009.12-2017',
          yearNum: '2017',
          name: '食品安全国家标准 食品中铅的测定',
          fullName: 'GB 5009.12-2017 《食品安全国家标准 食品中铅的测定》'
        }, {
          type: 'GB',
          standardNum: 'GB 5009.12-2017',
          yearNum: '2017',
          name: '食品安全国家标准 食品中铅的测定',
          fullName: 'GB 5009.12-2017 《食品安全国家标准 食品中铅的测定》'
        }]
      }
    },
    components: {},
    methods: {
      openNewDialog() {
        alert("新增")
      },
      onSubmit() {
        console.log('submit!');
      },
      onReset() {
        console.log('reset!');
      },
      showDetailDialog(index, rows) {
        alert("查看详情")
      },
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

  .app-header h1 {
    float: left;
    margin-left: 10px;
  }

  .content-card {
    background-color: #FFFFFF;
    position: relative;
    box-shadow: 0px 0px 10px #888888;
    flex: 1;
    margin: 10px;
    border-radius: 8px;
    padding: 10px;
    overflow: scroll;
  }
</style>
