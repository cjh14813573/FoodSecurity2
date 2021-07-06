<template>
  <div class="app-container">
    <div class="app-header">
      <h1>检测因子维护</h1>
    </div>
    <el-card class="content-card">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" @click="openNewDialog" icon="el-icon-plus">新增</el-button>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchForm.name" placeholder="检测项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchForm.type" placeholder="检测项目类型"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchForm.standardName" placeholder="默认判定标准名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" icon="el-icon-search">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%" border max-height="500">
        <el-table-column fixed prop="name" label="检测项目名称" width="200">
        </el-table-column>
        <el-table-column prop="identifier" label="统计标识符" width="120">
        </el-table-column>
        <el-table-column prop="type" label="统计项目类型" width="200">
        </el-table-column>
        <el-table-column prop="standardName" label="默认判定标准名称" width="250">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="查看详情" width="200">
          <template slot-scope="scope">
            <el-button @click.native.prevent="showDetailDialog(scope.$index, tableData4)" type="text" size="small">
              查看
            </el-button>
          </template>
        </el-table-column>
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
          name: '储藏时间',
          identifier: '/',
          type: '品质指标',
          standardName: '/',
          status: '正常',
        }, {
          name: '外观等级',
          identifier: '/',
          type: '品质指标',
          standardName: 'NY/T 940-2006 番茄等级规格',
          status: '正常',
        },{
          name: '挥发性盐基氮(TVB-N)',
          identifier: '/',
          type: '品质指标',
          standardName: '食品安全国家标准 鲜（冻）畜、禽产品（GB 2707-2016）',
          status: '正常',
        },{
          name: '颜色b*',
          identifier: '/',
          type: '品质指标',
          standardName: '肉的食用品质客观评价方法（NY/T 2793-2015）',
          status: '正常',
        }]
      }
    },
    components: {},
    methods: {
      openNewDialog(){
        alert("新增")
      },
      onSubmit() {
        console.log('submit!');
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
