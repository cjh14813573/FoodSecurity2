<template>
  <div id="graph-container-outer" ref="outer">
    <div id="graph-container" ref="inner"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts/core'
  import {
    TooltipComponent,
  } from 'echarts/components';
  import {
    TreeChart
  } from 'echarts/charts';
  import {
    CanvasRenderer
  } from 'echarts/renderers';
  echarts.use(
    [TooltipComponent, TreeChart, CanvasRenderer]
  );

  import CategoryRequest from '@/api/food-category.js'

  export default {
    data() {
      return {
        activeName: 'node',
        myChart: null,
        data: {
          name: "食品分类",
          children: []
        }
      }
    },
    components: {},
    methods: {
      getData(){
        CategoryRequest.getTree().then(response =>{
          this.data.children = response.data
          console.log(this.data)
          console.log(this.data.children)
        })
      },
      graphInit() {
        this.myChart = echarts.init(document.getElementById('graph-container'))

        var option;

        this.myChart.showLoading();

        var data;
        this.myChart.hideLoading();
        option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [{
            type: 'tree',

            name: 'tree1',

            data: [this.data],

            top: '5%',
            left: '10%',
            //bottom: '2%',
            //right: '15%',
            width: '80%',
            height: '90%',

            symbolSize: 7,

            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },

            emphasis: {
              focus: 'descendant'
            },
            initialTreeDepth:5,
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }]
        }

        CategoryRequest.getTree().then(response =>{
          this.data.children = response.data

          data = JSON.parse(JSON.stringify(this.data))
          this.myChart.setOption(option)
        })
        window.onresize = this.resize
        /*window.onresize = function() {
          //alert("on resize")
          var containerOuter = document.getElementById('graph-container-outer')
          var containerInner = document.getElementById('graph-container')
          chartssize(containerOuter, containerInner)
          myChart.resize()
        }*/
      },
      resize(){
        this.resizeContainer()
        this.myChart.resize()
      },
      resizeContainer(){
        var containerOuter = document.getElementById('graph-container-outer')
        var containerInner = document.getElementById('graph-container')
        this.chartssize(containerOuter, containerInner)
      },
      handleClick() {},
      chartssize(container, charts) {
        function getStyle(el, name) {
          if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
          } else {
            return el.currentStyle;
          }
        }
        var wi = getStyle(container, 'width').width;
        var hi = getStyle(container, 'height').height;
        charts.style.width = wi
        charts.style.height = hi
      }

    },
    mounted() {
        this.getData()
      this.resizeContainer()
      this.graphInit()
    }
  }
</script>

<style>
  #graph-container-outer {
    width: calc(95vw);
    height: calc(90vh - 50px);
  }
</style>
