<template>
    <div class="account-index">
        <div class="header">
            <div class="title">常用服务</div>
        </div>
        <div class="service-type">
            <div class="item">
                <img src="../../../assets/accountIndex/1.png" alt="">
                <span>请假申请</span>
            </div>
            <div class="item">
                <img src="../../../assets/accountIndex/2.png" alt="">
                <span>考勤核对</span>
            </div>
            <div class="item">
                <img src="../../../assets/accountIndex/3.png" alt="">
                <span>上传合同</span>
            </div>
            <div class="item">
                <img src="../../../assets/accountIndex/4.png" alt="">
                <span>工资核对</span>
            </div>
            <div class="item">
                <img src="../../../assets/accountIndex/5.png" alt="">
                <span>安全考试</span>
            </div>
        </div>
        <div class="data-center">
            <div class="data-title">
                <span>资料中心</span>
                <span>查看更多</span>
            </div>
            <div class="data-info">
                <div class="info1">关于中秋节放假的通知：中秋将近,经公司决定,现将 2019 年中秋节放假、调休时间安排如下: 9 月 10 日至 12 日放假 3 天公休</div>
                <div class="info2">施工安全注意手册1：施工现场安全生产管理（奖罚）条例 1、施工现场安全生产管理规定 为贯彻“安全第一，预防为主”和方针,保障职工的生命和国家财产的安全…</div>
            </div>
        </div>
        <div class="business-tracking">
            <div class="tracking-title">
                <span>业务跟踪</span>
                <div class="tracking-search">   
                    <el-input
                        placeholder="请输入"
                        prefix-icon="el-icon-search"
                        v-model="input2">
                    </el-input>
                    <el-button type="primary">搜索</el-button>
                </div>
            </div>
            <div class="table">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="序号"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="工单号"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="业务类型"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="进度"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="干系人"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="时间"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="data-report">
            <div class="title">数据报表</div>
            <div class="report">
                <div class="item">
                    <h1>20190510考勤简报</h1>
                    <table border="1">
                        <tr>
                            <th>Month</th>
                            <th>Savings</th>
                        </tr>
                        <tr>
                            <td>January</td>
                            <td>$100</td>
                        </tr>
                    </table>
                    <div class="bottom">
                        <span>同步于</span>
                        <span>刷新/10分钟</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            input2:'',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            box: {
                totalrows: 10,
                current: 1,
                Size: 10
            },
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    }
}
</script>

<style lang="scss">
    .account-index {
        padding: 0 30px;
        .header {
            .title {
                line-height: 50px;
                color: #000;
                font-size: 16px;
                border-bottom: 1px solid rgba(233,233,233,1);
            }
        }
        .service-type {
            display: flex;
            padding: 20px 0;
            .item {
                margin-right: 30px;
                img {
                    display: block;
                    width: 60px;
                    height: 60px;
                    margin: 0 auto;
                }
                span {
                    display: block;
                    text-align: center;
                    padding: 8px 0;
                }
            }
        }
        .data-center {
            margin-bottom: 40px;
            .data-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 50px;
                margin-bottom: 16px;
                color: #000;
                border-bottom: 1px solid rgba(233,233,233,1);
                span:nth-child(1) {
                    color: #000000;
                    font-size: 16px;
                }
                span:nth-child(2) {
                    color: #999999;
                }
            }
            .data-info {
                .info1 {
                    padding: 0 16px;
                    margin-bottom: 8px;
                    height:40px;
                    line-height: 40px;
                    background:rgba(230,247,255,1);
                    border-radius:4px;
                    border:1px solid rgba(186,231,255,1);
                }
                .info2 {
                    padding: 0 16px;
                    height:40px;
                    line-height: 40px;
                    background:rgba(255,243,233,1);
                    border-radius:4px;
                    border:1px solid rgba(255,210,175,1);
                }
            }
        }
        .business-tracking {
            .tracking-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 50px;
                margin-bottom: 16px;
                border-bottom: 1px solid rgba(233,233,233,1);
                span:nth-child(1) {
                    color: #000000;
                    font-size: 16px;
                }
                .tracking-search {
                    display: flex;
                    .el-input__inner {
                        height: 32px;
                    }
                }
            }
            .table {
                margin-top: 16px;
            }
        }
        .data-report {
            .title {
                line-height: 50px;
                color: #000;
                font-size: 16px;
                margin-bottom: 16px;
                border-bottom: 1px solid rgba(233,233,233,1);
            }
            .report {
                padding-bottom: 120px;
                .item {
                    box-sizing: border-box;
                    width:266px;
                    height:282px;
                    padding: 24px;
                    background:rgba(255,255,255,1);
                    border-radius:2px;
                    border:1px solid rgba(233,233,233,1);
                    h1 {
                        font-size: 20px;
                        color: #000;
                    }
                    .table {
                        color: #E9E9E9;
                        border:1px solid rgba(233,233,233,1);
                        .tr, .th {
                            width:109px;
                            padding: 20px;
                            height:24px;
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(233,233,233,1);
                        }
                    }
                    .bottom {
                        display: flex;
                        justify-content: space-between;
                        color: #000000;
                    }
                }
            }
        }
    }
</style>
