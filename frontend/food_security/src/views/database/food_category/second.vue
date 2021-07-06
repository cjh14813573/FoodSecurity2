<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>食品亚类</span>
      <el-button type="text" class="newButton" @click="openNewDialog()">新增</el-button>
    </div>
    <el-table :data="categoryList" height="100%" empty-text="无" highlight-current-row
      @current-change="handleCurrentChange" :show-header="false">
      <el-table-column>

        <template slot-scope="scope">

          <span>{{ scope.row.name }}</span>
          <el-popover placement="top" width="150" v-model="popoverVisible[scope.$index]">
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="primary" @mouseenter.native="delayOpenPopover(scope.$index)"
                @mouseleave.native="delayClosePopover(scope.$index)"
                @click="closePopover(scope.$index);openEditDialog(scope.row)">编辑</el-button>

              <el-button size="mini" type="danger" @mouseenter.native="delayOpenPopover(scope.$index)"
                @mouseleave.native="delayClosePopover(scope.$index)"
                @click="closePopover(scope.$index);openDeleteDialog(scope.row)">删除</el-button>
            </div>

            <el-button slot="reference" icon="el-icon-more" size="mini" round class="categoryButton"
              @mouseenter.native="delayOpenPopover(scope.$index)" @mouseleave.native="delayClosePopover(scope.$index)"
              @click="stopProp($event);switchPopover(scope.$index)">
            </el-button>
          </el-popover>
        </template>
      </el-table-column>

      <!-- 新增对话框 -->
      <el-dialog title="新增亚类" :append-to-body='true' :visible.sync="dialogNewVisible">
        <el-form ref="newForm" :rules="rules" :model="newForm" label-position="right" label-width="80px">
          <el-form-item label="所属大类:">
            &nbsp;&nbsp;{{ parentNameData }}
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="newForm.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeNewDialog()">取 消</el-button>
          <el-button type="primary" @click="newAndCloseNewDialog()">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 编辑对话框 -->
      <el-dialog title="编辑亚类" :append-to-body='true' :visible.sync="dialogEditVisible">
        <el-form ref="editForm" :rules="rules" :model="editForm" label-position="right" label-width="80px">
          <el-form-item label="所属大类" prop="top.id">
            <el-select v-model="editForm.top.id" placeholder="请选择所属大类">
              <el-option v-for="top of topList" :key="top.id" :label="top.name" :value="top.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="id:">
            &nbsp;&nbsp;{{ editForm.this.id }}
          </el-form-item>
          <el-form-item label="名称" prop="this.name">
            <el-input v-model="editForm.this.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeEditDialog()">取 消</el-button>
          <el-button type="primary" @click="editAndCloseEditDialog()">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 删除对话框 -->
      <el-dialog title="注意" :append-to-body='true' :visible.sync="dialogDeleteVisible" width="30%">
        <span>该操作将同时级联删除子分类</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeDeleteDialog()">取 消</el-button>
          <el-button type="danger" @click="deleteAndCloseDialog()">删 除</el-button>
        </span>
      </el-dialog>
    </el-table>
  </el-card>

</template>

<script>
  import CategoryRequest from '@/api/food-category.js'
  import {
    Message
  } from 'element-ui'

  export default {
    data() {
      return {
        categoryList: [],
        popoverVisible: [],
        popoverInTimer: [],
        popoverOutTimer: [],
        dialogEditVisible: false,
        editForm: {
          this:{
            id:null,
            name: null,
            parent: null
          },
          top:{
            id:null,
            name:null,
          }
        },
        dialogNewVisible: false,
        newForm: {
          name: null,
          parent: null
        },
        rules: {
          name: [{
            required: true,
            message: '请输入亚类名称',
            trigger: 'blur'
          }],
          'this.name': [{
            required: true,
            message: '请输入亚类名称',
            trigger: 'blur'
          }],
          'top.id': [{
            required: true,
            message: '请选择所属分类',
            trigger: 'change',
            type: 'number'
          }]
        },
        dialogDeleteVisible: false,
        deleteForm: {
          id: null
        },
        parentNameData: null,
        parentIdData: null,
        topList: []
      }
    },
    props: {
      parentIdProp: Number
    },
    watch: {
      parentIdProp(newValue, oldValue) {
        this.parentIdData = newValue
        this.updateCategoryList()
      }
    },
    methods: {
      handleCurrentChange(val) {
        if (val != null) {
          this.currentRow = val;
          this.$emit('show-third', this.currentRow.id)
        }
      },
      updateCategoryList() {
        CategoryRequest.getSecondList(this.parentIdData).then(response => {
          this.categoryList = response.data
          this.$emit('second-update')
        })
      },
      openPopover(index) {
        this.popoverVisible.splice(index, 1, true)
      },
      closePopover(index) {
        this.popoverVisible.splice(index, 1, false)
      },
      switchPopover(index) {
        clearTimeout(this.popoverInTimer[index])
        clearTimeout(this.popoverOutTimer[index])
        if (this.popoverVisible[index] == false) {
          this.popoverInTimer[index] = setTimeout(() => {
            this.openPopover(index)
          }, 10)
        } else {
          this.popoverOutTimer[index] = setTimeout(() => {
            this.closePopover(index)
          }, 10)
        }
      },
      delayOpenPopover(index) {
        clearTimeout(this.popoverOutTimer[index])
        this.popoverInTimer[index] = setTimeout(() => {
          this.openPopover(index)
        }, 300)
      },
      delayClosePopover(index) {
        clearTimeout(this.popoverInTimer[index])
        this.popoverOutTimer[index] = setTimeout(() => {
          this.closePopover(index)
        }, 300)
      },
      stopProp(event) {
        event.stopPropagation()
      },

      getParentName() {
        CategoryRequest.getTop(this.parentIdData).then(response => {

          this.parentNameData = response.data.name
        })
      },

      openNewDialog() {
        this.getParentName()
        this.newForm.parent = this.parentIdData
        this.dialogNewVisible = true
      },
      closeNewDialog() {
        this.parentNameData = null
        this.newForm.parent = null
        this.newForm.name = null
        this.dialogNewVisible = false
      },
      newAndCloseNewDialog() {

        var validation = true
        this.$refs.newForm.validate((valid) => {
          if (!valid) {
            console.log('validation error');
            validation = false
            return false;
          }
        })
        if (!validation) {
          return
        }
        CategoryRequest.newSecond({
          name: this.newForm.name,
          parent: this.newForm.parent
        }).then(response => {
          Message({
            message: "成功新增食品亚类  名称：" + response.data.name,
            type: 'success',
            duration: 2 * 1000
          })
          this.updateCategoryList()
        })
        this.parentNameData = null
        this.newForm.name = null
        this.newForm.parent = null
        this.dialogNewVisible = false
      },
      updateTopList() {
        CategoryRequest.getTopList().then(response => {
          this.topList = response.data
        })
      },
      openEditDialog(row) {
        this.updateTopList()
        this.editForm.this.id = row.id
        this.editForm.this.name = row.name
        this.editForm.top.id = row.parent
        this.dialogEditVisible = true
      },
      closeEditDialog() {
        this.editForm.this.id = null
        this.editForm.this.name = null
        this.editForm.top.id = null
        this.dialogEditVisible = false
      },
      editAndCloseEditDialog() {
        var validation = true
        this.$refs.editForm.validate((valid) => {
          if (!valid) {
            console.log('validation error');
            validation = false
            return false;
          }
        })
        if (!validation) {
          return
        }

        CategoryRequest.editSecond({
          id: this.editForm.this.id,
          name: this.editForm.this.name,
          parent: this.editForm.top.id
        }).then(response => {
          Message({
            message: "食品亚类已更改：" + response.data.name,
            type: 'success',
            duration: 2 * 1000
          })
          this.updateCategoryList()
        })
        this.editForm.this.id = null
        this.editForm.this.name = null
        this.editForm.top.id = null
        this.dialogEditVisible = false
      },

      openDeleteDialog(row) {
        this.deleteForm.id = row.id
        this.dialogDeleteVisible = true
      },
      closeDeleteDialog() {
        this.deleteForm.id = null
        this.dialogDeleteVisible = false
      },
      deleteAndCloseDialog() {
        CategoryRequest.deleteSecond({
          id: this.deleteForm.id,
        }).then(response => {
          Message({
            message: "删除成功",
            type: 'success',
            duration: 2 * 1000
          })
          this.updateCategoryList()
        })
        this.deleteForm.id = null
        this.dialogDeleteVisible = false
      }
    },
    mounted() {
      this.parentIdData = this.parentIdProp
      this.updateCategoryList()
    }
  }
</script>

<style>
  .el-card {
    height: 100%;
  }

  .el-card__header {
    padding: 10px;
    font-size: large;
  }

  .el-card__body {
    height: 100%;
    padding: 0;
  }

  .el-table td {
    padding: 5px;
    border: none;
  }

  .el-table th {
    font-size: 17px;
    padding: 15px 0px;
  }

  .newButton {
    margin-left: 10px;
  }

  .categoryButton {
    margin-left: 5px;
    border: none;
  }
</style>
