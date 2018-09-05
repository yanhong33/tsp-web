<template>
  <div class="content-header h50">
    <span class="content-title"><b>R&D Workbench</b></span>
    <span class="active"> 我的 </span>
    <span class=""> 项目 </span>
    <span class=""> 报表 </span>
  </div>
</template>

<script>
export default {
  name: 'ContentHeader'
}
</script>

<style>
  .content-header{
    background-color: bisque;
    padding-top: 10px;
    padding-bottom: 10px;
    vertical-align: center;
    border-bottom: 1px solid #dcdcdc;
    border-radius: 5px;

  }
  .content-title {
    font-size: 20px;
  }

  .content-header span {
    border-right: 1px solid #dcdcdc;
    width: 50px;
    font-size: 10px;
    padding: 10px;
    height: 50px;
  }
  .content-header span.active {
    font-weight: bolder;
  }
</style>
