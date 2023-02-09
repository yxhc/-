<template>
    <div class="trave-map">
        <div id="main"></div>
    </div>
</template>
<script>
import geoJson from '@/assets/data.json'
import { travel } from '@/api/api'
export default {
    data() {
        return {}
    },
    created() {
        travel().then(res => {
            if (res.data.status === 200) {
                let { points, linesData } = res.data.data
                this.draw(points, linesData)
            }
        })
    },
    methods: {
        draw(points, linesData) {
            let myChart = this.$echarts.init(document.getElementById('main'))
            this.$echarts.registerMap('china', geoJson)//注册可用的地图，必须包括geo组件或map图表类型的时候才可以使用

            console.log(geoJson)
            let option = {
                backgroundColor: 'rgb(121,145,209)',
                geo: {
                    map: 'china',
                    aspectScale: 0.75,//scale地图长宽比
                    zoom: 1.1,
                    itemStyle: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#09132c'//0%处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#274d68'//100%处的颜色
                                }
                            ],
                            globalCoord: true
                        },
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 10,
                        shadowOffsetY: 11
                    },
                    regions: [{
                        name: '南海诸岛',
                        itemStyle: {
                            opacity: 0
                        }
                    }]
                },
                series: [
                    {//配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
                        type: 'map',
                        label: {
                            show: true,
                            textStyle: {
                                color: '#1DE9B6'
                            }
                        },
                        zoom: 1.1,
                        map: 'china',
                        itemStyle: {
                            backgroundColor: 'rgb(147,235,248)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgb(31,54,150)'//0%处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(89,128,142)'//100%处的颜色
                                    }
                                ],
                                globalCoord: true
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: 'rgb(46,229,206)',
                                borderWidth: 0.1,
                                label: {
                                    show: true,
                                }
                            }
                        }

                    },
                    //关于地图中散点图的配置
                    {
                        type: 'effectScatter',//散点图
                        coordinateSystem: 'geo',
                        showEffectOn: 'render',
                        symbolSize: 7,//散点大小
                        zlevel: 1,
                        data: points,
                        rippleEffect: {
                            period: 15,
                            scale: 4,
                            brushType: 'fill'
                        }
                    },
                    {//线路动画效果设置
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4,
                            Symbol: 'arrow',
                            symbolSize: 7
                        },
                        lineStyle: {
                            color: '#1DE9B6',
                            width: 1,
                            opacity: 0.1,
                            curveness: 0.3
                        },
                        data: linesData
                    }
                ]
            }
            myChart.setOption(option)
        }
    }
}

</script >
<style lang="scss">
.trave-map {
    width: 100%;
}

#main {
    width: 100%;
    height: 600px;
}
</style>