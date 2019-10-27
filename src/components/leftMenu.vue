<template>
    <div class="left-menu">
        <div class="title"><img src="../assets/logo.png" alt="" class="logo">好工地系统</div>
        <el-menu
            :default-active="activeIndex"
            background-color="#242A37"
            text-color="#fff"
            :router="true"
            :unique-opened='true'
            >
            <el-submenu v-for="(item, index) in menuList1" :key="index" :index="index.toString()" class="left-menu--submenu left-menu--submenu2">
                <template slot="title">
                    <span class="user-manage__button">{{item.parentName}}<i class="el-submenu__icon-arrow"></i></span>
                    <i class="el-icon-event el-icon-evented"></i>
                </template>
                <el-menu-item v-for="(childItem, childIndex) in item.child" :key="childItem.url" :index="childItem.url"><i class="el-icon-caret-right"></i>{{childItem.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-menu
            :default-active="activeIndex"
            background-color="#242A37"
            text-color="#fff"
            :router="true"
            :unique-opened='true'
            >
            <el-submenu v-for="(item, index) in menuList2" :key="index" :index="index.toString()" class="left-menu--submenu left-menu--submenu2">
                <template slot="title">
                    <span class="user-manage__button">{{item.parentName}}<i class="el-submenu__icon-arrow"></i></span>
                    <i class="el-icon-event el-icon-evented"></i>
                </template>
                <el-menu-item v-for="(childItem, childIndex) in item.child" :key="childItem.url" :index="childItem.url"><i class="el-icon-caret-right"></i>{{childItem.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import { getStore } from '@/utils/utils.js'
export default {
    data() {
        return {
            viewMenu: false,
            active: '1',
            minus: true,
            activeIndex: '',
            menuList1:[
                {
                    parentName: "企业管理", 
                    child: [{
                        name: "企业管理", url: "/businessManage"
                    }]
                },
                {
                    parentName: "设备管理", 
                    child: [{
                        name: "设备管理", url: "/equipmentManage"
                    }]
                },
                {
                    parentName: "账户管理", 
                    child: [{
                        name: "角色管理", url: "/roleManage",
                    },
                    {
                        name: "账户管理", url: "/userManage"
                    }]
                },
                {
                    parentName: "平台管理", 
                    child: [{
                        name: "平台管理", url: "/accountIndex"
                    }]
                },
            ],
            menuList2:[
                {
                    parentName: "账户首页", 
                    child: [{
                        name: "账户首页", url: "/accountIndex"
                    }]
                },
                {
                    parentName: "项目管理", 
                    child: [{
                        name: "项目管理", url: "/projectIndex"
                    }]
                },
                {
                    parentName: "员工管理", 
                    child: [{
                        name: "短信模板配置", url: "/accountIndex"
                    }]
                },
                {
                    parentName: "交底考试", 
                    child: [{
                        name: "短信模板配置", url: "/accountIndex"
                    }]
                },
                {
                    parentName: "考勤管理", 
                    child: [{
                        name: "短信模板配置", url: "/accountIndex"
                    }]
                },
                {
                    parentName: "财务中心", 
                    child: [{
                        name: "短信模板配置", url: "/accountIndex"
                    }]
                },
                {
                    parentName: "账户中心", 
                    child: [{
                        name: "短信模板配置", url: "/accountIndex"
                    }]
                }
            ]
        }
    },
    created() {
        
    },
    mounted() {
        this.viewMenu = JSON.parse(getStore('menuAdmin'))
        this.viewMenu ? this.active = '1' : this.$route.name == "mediationRoomList"||this.$route.name =="mediateRoom" ? this.active = '2-1' : this.active = '2-2'
    },
    methods: {
        handleOpen(key, keyPath) {
            if(key == 2) {
                this.minus = false
            } else {
                this.minus = true
            }
        },
        handleClose(key, keyPath) {
            if(key == 2) {
                this.minus = true
            }
        },
        manage1() {
            this.$router.push({
                path: `/userManagement/mediatorList`
            });
        },
        manage2() {
            this.$router.push({
                path: `/roleManage`
            });
        },
        manage3() {
            this.$router.push({
                path: `/userManage`
            });
        },
        manage4() {
            this.$router.push({
                path: `/videoMediateRoomList/demoprogram`
            });
        }
    }
}
</script>

<style lang="scss">
    .left-menu {
        height: 100%;
        background-color: #242A37;
        .title {
            display: flex;
            align-items: center;
            line-height: 64px;
            color: #fff;
            background-color: #303746;
            font-size: 18px;
            color:rgba(255,255,255,0.85);
            .logo {
                padding: 0 13px 0 20px;
                width: 32px;
                height: 32px;
            }
        }
        .el-menu {
            border: 0;
            .left-menu--submenu1.is-opened {
                .el-submenu__title {
                    background-color: #fff;
                    .el-icon-usered {
                        // background: url("../assets/userManagement/user_seled.png")
                    }
                    .user-manage__button {
                        color: #fff;
                        background-color: #1890FF;
                    }
                } 
            }
            .left-menu--submenu2.is-opened {
                .el-submenu__title {
                    background-color: #fff;
                    .el-icon-evented {
                        // background: url("../assets/userManagement/event_seled.png")
                    }
                    .user-manage__button {
                        color: #fff;
                        background-color: #1890FF;
                        .el-icon-plus, .el-icon-minus {
                            color: #fff;
                        }
                    }
                } 
            }
        }
        // .left-menu--submenu {
        //     margin-bottom: 10px;
        //     .user-manage__button {
        //         position: relative;
        //         width: 200px;
        //         height: 46px;
        //         font-size: 16px;
        //         border-radius: 23px;
        //         background-color: #f2f5f7;
        //         .el-icon-plus, .el-icon-minus {
        //             color: #666;
        //         }
        //     }
        //     .el-icon-user {
        //         position: absolute;
        //         left: 62px;
        //         top: 20px;
        //         width: 22px;
        //         height: 20px;
        //         background: url("../assets/userManagement/user_sel.png")
        //     }
        //     .el-icon-event {
        //         position: absolute;
        //         left: 62px;
        //         top: 20px;
        //         width: 20px;
        //         height: 20px;
        //         background: url("../assets/userManagement/event_sel.png")
        //     }
        //     .el-submenu__title {
        //         .el-icon-arrow-down {
        //             display: none;
        //         }
        //     }
        // }
        // .left-menu--submenu1 {
        //     .el-submenu__title:hover {
        //         background-color: #fff;
        //         .el-icon-usered {
        //             background: url("../assets/userManagement/user_seled.png")
        //         }
        //         .user-manage__button {
        //             color: #fff;
        //             background-color: #1890FF;
        //         }
        //     } 
        // }
        // .left-menu--submenu2 {
        //     font-size: 16px;
        //     .el-submenu__title:hover {
        //         background-color: #fff;
        //         .el-icon-evented {
        //             background: url("../assets/userManagement/event_seled.png")
        //         }
        //         .user-manage__button {
        //             color: #fff;
        //             background-color: #1890FF;
        //             .el-icon-plus, .el-icon-minus {
        //                 color: #fff;
        //             }
        //         }
        //     } 
        //     .el-icon-caret-right {
        //         margin-left: 18px;
        //     }
        // }
        .el-menu {
            border: none; 
        }
    }
</style>
