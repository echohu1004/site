<template>
    <div class="role-limits">
        <div class="role-header">
            <div>权限基本信息</div>
            <el-button type="primary">编辑</el-button>
            <div>
                <el-button plain>取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>    
        </div>
        <div class="role-form">
            <el-form :model="smsForm" status-icon :rules="rules" ref="smsForm" label-width="100px">
                <el-form-item :prop="smsForm.a" label="角色名称：">
                    <el-input v-model="smsForm.a"></el-input>
                </el-form-item>
                <el-form-item :prop="smsForm.a" label="角色代码：">
                    <el-input v-model="smsForm.a"></el-input>
                </el-form-item>
                <el-form-item :prop="smsForm.a" label="角色类型：">
                    <el-input v-model="smsForm.a"></el-input>
                </el-form-item>
                <el-form-item :prop="smsForm.a" label="备注信息：">
                    <el-input v-model="smsForm.a"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <div>
                        <div>账户首页</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="公司首页" name="type"></el-checkbox>
                            <el-checkbox label="项目首页" name="type"></el-checkbox>
                            <el-checkbox label="专管员工首页" name="type"></el-checkbox>
                            <el-checkbox label="普通员工首页" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>
                        <div>项目管理</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="项目列表" name="type"></el-checkbox>
                            <el-checkbox label="班组管理" name="type"></el-checkbox>
                            <el-checkbox label="项目信息管理" name="type"></el-checkbox>
                            <el-checkbox label="访客管理" name="type"></el-checkbox>
                            <el-checkbox label="项目安全管理" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>
                        <div>班组管理</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="班组列表" name="type"></el-checkbox>
                            <el-checkbox label="班组信息管理" name="type"></el-checkbox>
                            <el-checkbox label="班组人员管理" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>
                        <div>合同管理</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="合同列表" name="type"></el-checkbox>
                            <el-checkbox label="发起签署" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>
                        <div>考勤管理</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="工作日管理" name="type"></el-checkbox>
                            <el-checkbox label="请假申请" name="type"></el-checkbox>
                            <el-checkbox label="考勤审批" name="type"></el-checkbox>
                            <el-checkbox label="考勤数据统计" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>
                        <div>交底考试管理</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="试题管理" name="type"></el-checkbox>
                            <el-checkbox label="试卷管理" name="type"></el-checkbox>
                            <el-checkbox label="考试管理" name="type"></el-checkbox>
                            <el-checkbox label="用户考试" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>
                        <div>资资管理</div>
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="考勤核对" name="type"></el-checkbox>
                            <el-checkbox label="工资核对" name="type"></el-checkbox>
                            <el-checkbox label="工资管理" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-form-item>
            </el-form>
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
            smsForm: {
                a: ''
            },
            rules: {

            },
            ruleForm: {
                type: ''
            }
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
    .role-limits {
        .role-header {
            display: flex;
            padding: 12px 32px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #E9E9E9;
        }
        .role-form {
            padding: 24px 0;
            .el-form {
                .el-input {
                    width: 224px;
                }
            }
        }
    }
</style>
