<template>
  <div class="app-container">
    <div class="app-header">
      <h1>分类与因子关系维护</h1>
    </div>
    <el-card class="content-card">
      <el-form :inline="true" :model="categorySearchForm" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="categorySearchForm.top" placeholder="请选择大类">
            <el-option label="大类一" value="1"></el-option>
            <el-option label="大类二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="categorySearchForm.second" placeholder="请选择亚类">
            <el-option label="亚类一" value="1"></el-option>
            <el-option label="亚类二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="categorySearchForm.third" placeholder="请选择次亚类">
            <el-option label="次亚类一" value="1"></el-option>
            <el-option label="次亚类二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="categorySearchForm.fourth" placeholder="请选择细类">
            <el-option label="细类一" value="1"></el-option>
            <el-option label="细类二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="factorSearchForm" class="demo-form-inline">

        <el-form-item>
          <el-input v-model="factorSearchForm.name" placeholder="请输入检测项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="factorSearchForm.type" placeholder="请输入检测项目类型"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" style="width: 100%" border max-height="500">

        <el-table-column prop="topCategory" label="食品大类" width="100">
        </el-table-column>
        <el-table-column prop="secondCategory" label="食品亚类" width="100">
        </el-table-column>
        <el-table-column prop="thirdCategory" label="食品次亚类" width="100">
        </el-table-column>
        <el-table-column prop="fourthCategory" label="食品细类" width="100">
        </el-table-column>
        <el-table-column prop="name" label="项目名称" width="150">
        </el-table-column>
        <el-table-column prop="type" label="项目类型" width="150">
        </el-table-column>
        <el-table-column prop="rank" label="风险等级" width="150">
        </el-table-column>
        <el-table-column prop="function" label="保健食品功能" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="150">
        </el-table-column>
        <el-table-column prop="creator" label="创建人" width="150">
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
        categorySearchForm: {
          top: '',
          second: '',
          third: '',
          fourth: ''
        },
        factorSearchForm: {
          name: '',
          type: '',
        },
        tableData: [{
          topCategory: '粮食加工品',
          secondCategory: '小麦粉',
          thirdCategory: '小麦粉',
          fourthCategory: '通用小麦粉、专用小麦粉',
          name: '铅（以Pb计）',
          type: '',
          rank: '',
          function: '',
          status: '',
          creator: ''
        }, {
          topCategory: '粮食加工品',
          secondCategory: '小麦粉',
          thirdCategory: '小麦粉',
          fourthCategory: '通用小麦粉、专用小麦粉',
          name: '镉（以Cd计）',
          type: '',
          rank: '',
          function: '',
          status: '',
          creator: ''
        }, {
          topCategory: '粮食加工品',
          secondCategory: '小麦粉',
          thirdCategory: '小麦粉',
          fourthCategory: '通用小麦粉、专用小麦粉',
          name: '总汞（以Hg计）',
          type: '',
          rank: '',
          function: '',
          status: '',
          creator: ''
        }, {
          topCategory: '粮食加工品',
          secondCategory: '小麦粉',
          thirdCategory: '小麦粉',
          fourthCategory: '通用小麦粉、专用小麦粉',
          name: '总砷（以As计）',
          type: '',
          rank: '',
          function: '',
          status: '',
          creator: ''
        }, {
          topCategory: '粮食加工品',
          secondCategory: '小麦粉',
          thirdCategory: '小麦粉',
          fourthCategory: '通用小麦粉、专用小麦粉',
          name: '铬（以Cr计）',
          type: '',
          rank: '',
          function: '',
          status: '',
          creator: ''
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
