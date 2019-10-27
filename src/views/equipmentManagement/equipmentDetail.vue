<template>
    <div class="equipment-detail">
        <div class="detail-header">
            <span>设备基本信息</span>
            <el-button type="primary">编辑</el-button>
            <div>
                <el-button plain>取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
        <div class="detail-form">
            <el-form :model="smsForm" status-icon :rules="rules" ref="smsForm" label-width="150px" class="smsConfig-ruleForm">
                <div class="form">
                    <el-form-item :prop="a" label="设备ID：">
                        <el-input v-model="a"></el-input>
                    </el-form-item>
                    <el-form-item :prop="b" label="设备唯一标识码：">
                        <el-input v-model="b"></el-input>
                    </el-form-item>
                </div>
                <div class="form">
                    <el-form-item :prop="c" label="设备别名：">
                        <el-input v-model="c"></el-input>
                    </el-form-item>
                    <el-form-item :prop="d" label="设备归属公司：">
                        <el-input v-model="d"></el-input>
                    </el-form-item>
                </div>
                <div class="form">
                    <el-form-item :prop="e" label="识别度：">
                        <el-input v-model="e"></el-input>
                    </el-form-item>
                    <el-form-item :prop="f" label="设备归属项目：">
                        <el-input v-model="f"></el-input>
                    </el-form-item>
                </div>
                <div class="form">
                    <el-form-item :prop="g" label="设备型号：">
                        <el-input v-model="g"></el-input>
                    </el-form-item>
                    <el-form-item :prop="h" label="设备接入时间：">
                        <el-input v-model="h"></el-input>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div class="detail-infobus">
            <h1>设备业务信息</h1>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="设备预留名单" name="first">
                    <el-table
                        class="table-site"
                        ref="multipleTable"
                        :header-cell-style="{background:'#FAFAFA',color:'#000000'}"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                       >
                        <el-table-column
                        label="预留图片"
                        width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="名单ID"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="姓名"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="备注信息"
                        >
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="读取数据记录" name="second">配置管理</el-tab-pane>
            </el-tabs>
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
            smsForm: {},
            rules: {},
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: '',
            g: '',
            h: '',
            activeName: 'second',
            tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }],
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style lang="scss">
    .equipment-detail {
        padding: 20px;
        background-color: #ffffff;
        .detail-header {
            display: flex;
            height: 50px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #E9E9E9;
        }
        .detail-form {
            padding: 24px 0;
            .el-form {
                .form {
                    display: flex;
                    .el-form-item {
                        margin-right: 90px;
                    }
                    .el-form-item:nth-child(1) {
                        .el-form-item__label {
                            width: 100px!important;
                        }
                        .el-form-item__content {
                            margin-left: 100px!important;
                        }
                    }
                }
                .el-form-item {
                    width: 35%;
                }
            }
        }
        .detail-infobus {
            h1 {
                padding: 15px 0;
            }
        }
    }
</style>
