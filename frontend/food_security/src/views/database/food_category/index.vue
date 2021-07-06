<template>
  <div class="app-container">
    <div class="app-header">
      <h1>食品分类维护</h1>
      <el-button icon="el-icon-search" type="primary" @click="showKnowledgeGraph()">查看食品分类知识图谱</el-button>
    </div>
    <!--
    <el-button type="primary" @click="onSubmit">Create</el-button>
    -->
    <el-row id="table-container">
      <el-col :span="24" id="top">
        <TopTable @top-update="onTopUpdate" @show-second="onShowSecond"></TopTable>
      </el-col>

      <el-col :span="18" id="second" v-if="second.seen">
        <SecondTable ref="secondTable" :parentIdProp="second.parentId" @second-update="onSecondUpdate"
          @show-third="onShowThird"></SecondTable>
      </el-col>
      <el-col :span="12" id="third" v-if="third.seen">
        <ThirdTable ref="thirdTable" :parentIdProp="third.parentId" @third-update="onThirdUpdate"
          @show-fourth="onShowFourth"></ThirdTable>
      </el-col>
      <el-col :span="6" id="third" v-if="fourth.seen">
        <FourthTable ref="fourthTable" :parentIdProp="fourth.parentId" @fourth-update="onFourthUpdate">
        </FourthTable>
      </el-col>
    </el-row>

    <el-dialog title="食品分类知识图谱" fullscreen id="graphDialog" :append-to-body='true' :visible.sync="dialogGraphVisible">
      <Graph></Graph>
    </el-dialog>
  </div>
</template>

<script>
  import CategoryRequest from '@/api/food-category.js'
  import TopTable from './top'
  import SecondTable from './second'
  import ThirdTable from './third'
  import FourthTable from './fourth'
  import Graph from './graph'
  export default {
    data() {
      return {
        second: {
          seen: false,
          parentId: null
        },
        third: {
          seen: false,
          parentId: null
        },
        fourth: {
          seen: false,
          parentId: null
        },
        dialogGraphVisible: false
      }
    },
    components: {
      TopTable,
      SecondTable,
      ThirdTable,
      FourthTable,
      Graph
    },
    methods: {
      onTopUpdate() {
        this.closeSecond()
        this.closeThird()
        this.closeFourth()
      },
      onShowSecond(id) {
        this.closeSecond()
        this.closeThird()
        this.closeFourth()
        this.openSecond(id)
      },
      closeSecond() {
        this.second.parentId = null
        this.second.seen = false
      },
      closeThird() {
        this.third.parentId = null
        this.third.seen = false
      },
      closeFourth() {
        this.fourth.parentId = null
        this.fourth.seen = false
      },

      openSecond(parentId) {
        this.second.parentId = parentId
        this.second.seen = true
      },
      onSecondUpdate() {
        this.closeThird()
        this.closeFourth()
      },
      onShowThird(id) {
        //alert("on show third id:" + id)
        this.closeThird()
        this.closeFourth()
        this.openThird(id)
      },

      openThird(parentId) {
        //alert("on open third")
        this.third.parentId = parentId
        this.third.seen = true
      },
      onThirdUpdate() {
        //alert("second update")
        this.closeFourth()
      },
      onShowFourth(id) {
        //alert("on show fourth")
        this.closeFourth()
        this.openFourth(id)
      },
      openFourth(parentId) {
        this.fourth.parentId = parentId
        this.fourth.seen = true
      },
      onFourthUpdate() {
        //alert("second update")
        //this.closeFourth()
      },
      showKnowledgeGraph(){
        //alert("show knowledge graph")
        this.dialogGraphVisible = true
      }
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
  .app-header h1 {
    margin-left: 10px;
  }


</style>
