<template>
  <div class="container">
    <h1 class="title-dec">Meet-UI 与世界不同</h1>
    <h2 class="title-dep">Meet-UI 包含了大量的业务组件，让你减少不必要的开发。与众不同的风格，让你眼前一亮</h2>
    <Row :gutter="50">
        <Col :xs="2" :sm="4" :md="6" :lg="6">
            <Card>
              <div style="text-align:center">
                  <img src="/item1.png" width="100%">
                  <p class="text-color">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</p>
              </div>
            </Card>
        </Col>
        <Col :xs="2" :sm="4" :md="6" :lg="6">
            <Card>
              <div style="text-align:center">
                  <img src="/item2.png" width="100%">
                  <p>众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</p>
              </div>
            </Card>
        </Col>
        <Col :xs="2" :sm="4" :md="6" :lg="6">
            <Card>
              <div style="text-align:center">
                  <img src="/item3.png" width="100%">
                  <p>众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</p>
              </div>
            </Card>
        </Col>
        <Col :xs="2" :sm="4" :md="6" :lg="6">
            <Card>
              <div style="text-align:center">
                  <img src="/item4.png" width="100%">
                  <p>收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍</p>
              </div>
            </Card>
        </Col>
    </Row>
    <!-- <div class="img-home">
      <img src="/home-bg.png">
    </div> -->
  </div>
</template>

<script>
export default {
  layout: "home",
  components: {
    
  }
}
</script>
<style lang="less" scoped>
.container{
 padding-top: 6rem;
  .title-dec{
    text-align: center;
    font-weight: 400;
    color: #303133;
    font-size: 2rem;
  }
  .title-dep{
    text-align: center;
    color: #606266;
    font-size: 1.1rem;
    border: none;
    line-height: 1.7;
  }
  .img-home{
    text-align: center;
    img{
      width: 60%;
      margin-top: 2rem;
    }
  }
  .ext-color{
    font-size: 14px;
    color: #909399;
    padding: 0 25px;
    margin-bottom: 40px;
  }
}
</style>
