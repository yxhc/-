<template>
    <div class="score-map">
        <div id="main"></div>
    </div>
</template>
<script>
// import chinaJson from 'echarts/map/json/china'
export default {
    data() {
        return {

        }
    },
    mounted() {
        let myChart = this.$echarts.init(document.getElementById('main'))
        this.$echarts.registerMap('china', chinaJson)

        //从这里开始借用网上代码
    }
}
</script>
<style lang="scss">
.score-map {
    width: 100%;
}

#main {
    width: 100%;
    height: 500px;
}
</style>