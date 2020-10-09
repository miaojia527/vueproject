<template>
  <div id="app">
    <div class="header p20 text-left box items-center fwhite">
      <div class="box2 f24 bold">花园云·多业务协同</div>
      <div class="box1 text-right pr20">
        <span class="f18">{{scene}}</span>

      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      scene: "场景",
      tabNav: "all"
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    TableChange(val){
      this.tabNav = val;
    }
  }
}
</script>

<style lang="less">
@mainColor: #388ee2;
#app {
  font-family: '兰亭黑简', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #fff;
}
.f36{
  font-size: 36px;
}
.f24{
  font-size: 24px;
}
.f18{
  font-size: 18px;
}
.f16{
  font-size: 16px;
}
.f14{
  font-size: 14px;
}
.f12{
  font-size: 12px;
}
.bold{
  font-weight: bold;
}
.white1{
  color: #efefef;
}
.white{
  color: #fff;
}
.blue{
  color: #2196f3;
}
.red{
  color: #f44336;
}
.pink{
  color: #e91e63;
}
.purple{
  color: #9c27b0;
}
.orange{
  color: #ff9800;
}
.green{
  color: #00c853;
}

.g-white{
  background-color: #fff;
}
.g-blue7{
  background-color: #1976d2;
}
.g-teal5{
  background-color: #1de9b6;
}
.g-purple{
  background-color: #673ab7;
}
.g-orange6{
  background-color: #fb8c00;
}
.g-yellow6{
  background-color: #fdd835;
}
.g-lblue{
  background-color: #0091ea;
}
.g-purple6{
  background-color: #8e24aa;
}
.g-indigo6{
  background-color: #3949ab;
}
.g-teal6{
  background-color: #00897b;
}
.g-amber6{
  background-color: #ffb300;
}
.g-gray{
  background-color: #dfe6e9;
}

.f-green{
  color: @mainColor;
}
.fwhite{
  color: #fff;
}

.mt10{
  margin-top: 10px;
}
.ml10{
  margin-left: 10px;
}
.mb10{
  margin-bottom: 10px;
}
.mr10{
  margin-right: 10px;
}
.pt5{
  padding-top: 5px;
}
.pl5{
  padding-left: 5px;
}
.pt10{
  padding-top: 10px;
}
.pl10{
  padding-left: 10px;
}
.pr10{
  padding-right: 10px;
}
.pb10{
  padding-bottom: 10px;
}
.p10{
  padding: 10px;
}
.pt20{
  padding-top: 20px;
}
.pl20{
  padding-left: 20px;
}
.pr20{
  padding-right: 20px;
}
.pb20{
  padding-bottom: 20px;
}
.p20{
  padding: 20px;
}
.pt30{
  padding-top: 30px;
}
.pb30{
  padding-bottom: 30px;
}
.pt40{
  padding-top: 40px;
}
.p40{
  padding: 40px;
}
.pb40{
  padding-bottom: 40px;
}
.pt80{
  padding-top: 80px;
}
.mt10{
  margin-top: 10px;
}
.ml10{
  margin-left: 10px;
}
.mr10{
  margin-right: 10px;
}
.mb10{
  margin-bottom: 10px;
}
.m10{
  margin: 10px;
}
.mt15{
  margin-top: 15px;
}
.mt20{
  margin-top: 20px;
}
.ml20{
  margin-left: 20px;
}
.mr20{
  margin-right: 20px;
}
.mb20{
  margin-bottom: 20px;
}
.m20{
  margin: 20px;
}
.mt30{
  margin-top: 30px;
}
.mt40{
  margin-top: 40px;
}
.m40{
  margin: 40px;
}
.mb40{
  margin-bottom: 40px;
}
.mt80{
  margin-top: 80px;
}
.idt2{
  text-indent: 40px;
}
.pt8{
  padding-top: 8px;
}
.lh1_5{
  line-height: 1.5;
}
.lh2{
  line-height: 2;
}
.lh4{
  line-height: 4;
}
.full{
  width: 100%;
  height: 100%;
}
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.header{
  background-color: @mainColor;
}
.box{
  display: flex;
  flex-direction: row;
  justify-content: flex-start
}
.items-center{
  align-items: center;
}
.box1{
  flex: 1;
}
.box2{
  flex: 2;
}
</style>
