<template>
    <div class="project-index">
        <div class="project-header">
            <div class="bus-header--input">
                试题类型：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <div class="bus-header--input">
                题目名称：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <div class="bus-header--input">
                题目编号：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <el-button type="primary">搜 索</el-button>
        </div>
    <div class="title"> 
        <div class="editTitle">
            <div>
                <div class="project-header">
                <div class="toEdit">编辑试题</div>
                <div class="deleteIcon">删除图标</div>
                </div>
                <div class="type"> 试题类型  
                    <el-radio  class = "singleClick" v-model="radio" label="1">单选题</el-radio>
                    <el-radio v-model="radio" label="2">多选题</el-radio>
                </div>
                <div class="content">问题内容
                    <div>
                        <el-input
                            class="search-input"
                            v-model="businessValue"
                            placeholder=""
                            clearable>
                        </el-input>
                    </div>
                </div>
                <div class="analysis">问题解析
                    <div>
                        <el-input
                            class="search-input"
                            v-model="businessValue"
                            placeholder=""
                            clearable>
                        </el-input>
                <div class="project-header">
                    <div>选项1</div>
                    <template>
                    <el-radio-group v-model="radio">
                        <el-radio :label="1">正确答案</el-radio>
                    </el-radio-group>
                    </template>
                    <div class="delete_icon">删除图标</div>
                    </div>
                    <div>
                        <el-input
                            class="search-input"
                            v-model="businessValue"
                            placeholder=""
                            clearable>
                        </el-input>
                    </div>       
                
                <div class="project-header">
                    <div>选项2</div>
                    <template>
                    <el-radio-group v-model="radio">
                        <el-radio :label="2">正确答案</el-radio>
                    </el-radio-group>
                    </template>
                    <div class="delete_icon">删除图标</div>
                    </div>
                    <div>
                        <el-input
                            class="search-input"
                            v-model="businessValue"
                            placeholder=""
                            clearable>
                        </el-input>
                    </div>       
                
                <div class="project-header">
                    <div>选项3</div>
                    <template>
                    <el-radio-group v-model="radio">
                        <el-radio :label="3">正确答案</el-radio>
                    </el-radio-group>
                    </template>
                    <div class="delete_icon">删除图标</div>
                    </div>
                    <div>
                        <el-input
                            class="search-input"
                            v-model="businessValue"
                            placeholder=""
                            clearable>
                        </el-input>
                    </div>       
                
                <div class="project-header">
                     <el-button type="primary" icon="el-icon-plus"></el-button>
                    <div>添加选项</div>
                </div>
                    </div>
                </div>
            </div>
        </div>      
        <div class ="saveButton">
            <el-button type="primary">保存试题</el-button></div>
    </div>
        </div>

            

        

</template>

<script>
</script>

<style lang="scss">
    .project-index {
        padding: 24px 30px;
        .project-header {
            display: flex;
            .bus-header--input {
                margin-right: 24px;
                .el-input {
                    width: 224px;
                    .el-input__inner {
                        height: 32px;

                    }
                }
            }
        }
        .business-add {
            display: flex;
            padding: 20px 0;
        }
        .business-table {
            .table-title {
                display: flex;
                align-items: center;
                height: 40px;
                padding: 0 16px;
                background:rgba(230,247,255,1);
                border-radius:4px;
                border:1px solid rgba(186,231,255,1);
            }
        }
        .title {
            .editTitle {
                display: flex;
                width:  490px;
                height: 712px;
                border:1px solid rgba(0,0,0,0.77);
            }
        }
        .toEdit {
            .toEdit {
                align-items: center;
                display: flex;
                width:64px;
                height:22px;
                font-size:16px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(0,0,0,0.65);
                line-height:22px;
            }
        }
        .deleteIcon {
            .deleteIcon {
                width:15px;
                height:15px;
            }
        }
        .type {
            .type {
                width:64px;
                height:22px;
                font-size:16px;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(0,0,0,0.65);
                line-height:22px;
            }
        }
        .singleClick {
            .singleClick {
                width:96px;
                height:22px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(0,0,0,0.65);
                line-height:22px;
            }
        }
        .saveButton {
            .saveButton {
                display: flex;
                align-items: center;

            }
        }
    }
</style>
