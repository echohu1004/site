<template>
    <div class="user-managedetail">
        <div class="header">
            <div>基本资料</div>
            <div class="right">
                <el-button type="primary">取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
        <div class="detail">
            <el-form ref="form" :model="form" label-width="150px">
                <div class="form1">
                    <h1>基本信息</h1>
                    <div class="detail1">
                        <el-form-item label="姓名：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号：">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                    </div>
                    <div class="detail2">
                        <el-form-item label="身份证号：">
                            <el-input v-model="form.IDcard"></el-input>
                        </el-form-item>
                        <el-form-item label="籍贯：">
                            <el-input v-model="form.native"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="form2">
                    <div class="add">
                        <h1>平台角色</h1>
                        <el-button type="primary">添加</el-button>
                    </div>
                    <div class="detail1">
                        <el-form-item label="角色类型：">
                            <el-input v-model="form.roletype"></el-input>
                        </el-form-item>
                        <el-form-item label="角色名称：">
                            <el-input v-model="form.rolename"></el-input>
                        </el-form-item>
                        <el-form-item label="所属企业：">
                            <el-input v-model="form.owned"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <el-table
            :data="tableData"
            style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
            <div class="add-table">
                <i class="el-icon-circle-plus-outline">新增</i>
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
            form: {
                name: '',
                phone: '',
                IDcard: '',
                native: '',
                roletype: '',
                rolename: '',
                owned: ''
            },
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
            }]
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
    .user-managedetail {
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 50px;
            line-height: 50px;
            padding: 0 30px;
            font-size: 16px;
            border-bottom: 1px solid rgba(233,233,233,1);
        }
        .detail {
            padding: 0 30px 50px;
            .form1 {
                h1 {
                    padding: 20px 0;
                    font-size: 16px;
                }
                .detail1, .detail2 {
                    display: flex;
                }
            }
            .form2 {
                .add {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h1 {
                        padding: 20px 0;
                        font-size: 16px;
                    }
                }
                .detail1 {
                    display: flex;
                }
            }
            .add-table {
                width:1072px;
                height:53px;
                text-align: center;
                line-height: 53px;
                margin: 50px auto;
                background:rgba(250,250,250,1);
            }
        }
    }
</style>
