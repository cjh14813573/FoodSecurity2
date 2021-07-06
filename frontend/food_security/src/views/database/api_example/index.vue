<template>
  <div class="app-container">
    <div class="app-header">
      <h1>API示例</h1>
    </div>
    <el-card class="content-card">
    <p>*注: API示例返回值中有条目的请求参数为（蛋白饮料，水，1）</p>
      <el-form :inline="true" :model="factorSearchForm" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="factorSearchForm.idOfFoodCategory" placeholder="请选择细类">
            <el-option v-for="category of categoryList" :key="category.id" :label="category.name" :value="category.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="factorSearchForm.keyWords" placeholder="请输入风险因子关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="factorSearchForm.pageNo" placeholder="请输入页码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>

      <div>
        <p>返回结果：</p>
        <pre>{{ result }}</pre>
      </div>
    </el-card>
  </div>
</template>

<script>
  import FactorRequest from '@/api/factor.js'
  import CategoryRequest from '@/api/food-category.js'
  export default {
    data() {
      return {
        factorSearchForm: {
          idOfFoodCategory: '',
          keyWords: '',
          pageNo: ''
        },
        result: '',
        categoryList: [],
      }
    },
    components: {},
    methods: {
      onSearch() {
        var searchData = {
          'idOfFoodCategory':''
        }
        FactorRequest.searchFactor(this.factorSearchForm).then(response => {
          this.result = JSON.stringify(response.data, null, 2)
        })
      },
      updateCategoryList(){
        CategoryRequest.getFourthList().then(response => {
          this.categoryList = response.data
        })
      }
    },
    mounted() {
      this.updateCategoryList()
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
