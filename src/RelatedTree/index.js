/**
 * Created by jane on 10/03/2017.
 */
import React from 'react'
import {Tree, Modal, Button} from 'antd'
import Immutable from 'immutable'

const TreeNode = Tree.TreeNode
const deptTree = {
    "ID": "112",
    "Name": "全公司",
    "ParentID": "0",
    "StopFlag": "0",
    "Code": "001",
    "Children": [{
        "ID": "352",
        "Name": "后台开发部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "324",
            "Name": "开发部门A",
            "ParentID": "352",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "351",
                "Name": "开发部门A-01",
                "ParentID": "324",
                "StopFlag": "0",
                "Code": "",
                "Children": [{
                    "ID": "356",
                    "Name": "3413123",
                    "ParentID": "351",
                    "StopFlag": "0",
                    "Code": ""
                }, {"ID": "647", "Name": "测试河南", "ParentID": "351", "StopFlag": "0", "Code": ""}, {
                    "ID": "282",
                    "Name": "BUMEN",
                    "ParentID": "351",
                    "StopFlag": "0",
                    "Code": "gf"
                }]
            }, {"ID": "358", "Name": "3413123", "ParentID": "324", "StopFlag": "0", "Code": ""}, {
                "ID": "361",
                "Name": "2131313",
                "ParentID": "324",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "648", "Name": "测试江西", "ParentID": "324", "StopFlag": "0", "Code": ""}, {
                "ID": "394",
                "Name": "测试部",
                "ParentID": "324",
                "StopFlag": "0",
                "Code": "0001"
            }, {"ID": "343", "Name": "测试部", "ParentID": "324", "StopFlag": "0", "Code": "011"}, {
                "ID": "382",
                "Name": "22222",
                "ParentID": "324",
                "StopFlag": "1",
                "Code": ""
            }, {"ID": "380", "Name": "dfsffs", "ParentID": "324", "StopFlag": "1", "Code": "1"}]
        }]
    }, {
        "ID": "3847",
        "Name": "考勤测试部门",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "4004", "Name": "9999", "ParentID": "3847", "StopFlag": "0", "Code": ""}, {
            "ID": "4001",
            "Name": "111",
            "ParentID": "3847",
            "StopFlag": "0",
            "Code": "111"
        }, {"ID": "4003", "Name": "111", "ParentID": "3847", "StopFlag": "1", "Code": "111"}]
    }, {
        "ID": "3876",
        "Name": "测试bug",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "677",
            "Name": "一级部门5",
            "ParentID": "3876",
            "StopFlag": "0",
            "Code": "",
            "Children": [{"ID": "4002", "Name": "呃呃呃", "ParentID": "677", "StopFlag": "0", "Code": ""}]
        }]
    }, {"ID": "3889", "Name": "研发中心", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3890",
        "Name": "新增部门",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3891", "Name": "超客营销演示", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3892",
        "Name": "供应中心",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3893", "Name": "研发中心测试部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3894",
        "Name": "研发中心产品部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3895", "Name": "一车间", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3896",
        "Name": "二车间",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3897", "Name": "生产中心", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3899",
        "Name": "财务中心",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3900", "Name": "运营中心", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3901",
        "Name": "上海分公司",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3902", "Name": "项目基建部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3903",
        "Name": "财务部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3904", "Name": "开发一部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3905",
        "Name": "区域销售部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3906", "Name": "服务部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3907",
        "Name": "超客研发部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "3908",
            "Name": "超客研发一部",
            "ParentID": "3907",
            "StopFlag": "0",
            "Code": ""
        }, {"ID": "3909", "Name": "超客研发二部", "ParentID": "3907", "StopFlag": "0", "Code": ""}, {
            "ID": "3910",
            "Name": "超客研发三部",
            "ParentID": "3907",
            "StopFlag": "0",
            "Code": ""
        }]
    }, {"ID": "3911", "Name": "订单中心", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3912",
        "Name": "市场部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3913", "Name": "销售部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3914",
        "Name": "电子商务",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3915", "Name": "新增a", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3916",
        "Name": "新增b",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3917", "Name": "电子商务", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3918",
        "Name": "sunhl创建",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3919", "Name": "本地销售部", "ParentID": "3918", "StopFlag": "0", "Code": ""}]
    }, {"ID": "3920", "Name": "采购abcde部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3921",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3922", "Name": "U8项目组一组", "ParentID": "3921", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3923",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3924", "Name": "U8项目组一组", "ParentID": "3923", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3925",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3926", "Name": "U8项目组一组", "ParentID": "3925", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3927",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3928", "Name": "U8项目组一组", "ParentID": "3927", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3929",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3930", "Name": "U8项目组一组", "ParentID": "3929", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3931",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3932", "Name": "U8项目组一组", "ParentID": "3931", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3933",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3934", "Name": "U8项目组一组", "ParentID": "3933", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3935",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3936", "Name": "U8项目组一组", "ParentID": "3935", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3937",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3938", "Name": "U8项目组一组", "ParentID": "3937", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3939",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3940", "Name": "U8项目组一组", "ParentID": "3939", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3941",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3942", "Name": "U8项目组一组", "ParentID": "3941", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3943",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3944", "Name": "U8项目组一组", "ParentID": "3943", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "3945",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3946", "Name": "U8项目组一组", "ParentID": "3945", "StopFlag": "0", "Code": ""}]
    }, {"ID": "363", "Name": "qweqeqew", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3947",
        "Name": "研发测试U8项目组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3948", "Name": "U8项目组一组", "ParentID": "3947", "StopFlag": "0", "Code": ""}]
    }, {"ID": "3949", "Name": "仓储部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3950",
        "Name": "仓储部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3951", "Name": "仓储部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3952",
        "Name": "仓储部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {
        "ID": "3953",
        "Name": "超客营销",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "3954",
            "Name": "上海财务部",
            "ParentID": "3953",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3955",
                "Name": "财务一部",
                "ParentID": "3954",
                "StopFlag": "0",
                "Code": "",
                "Children": [{"ID": "3956", "Name": "财务办公室", "ParentID": "3955", "StopFlag": "0", "Code": ""}]
            }]
        }, {
            "ID": "3957",
            "Name": "上海市场部",
            "ParentID": "3953",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3958",
                "Name": "市场一部",
                "ParentID": "3957",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "3959", "Name": "市场二部", "ParentID": "3957", "StopFlag": "0", "Code": ""}]
        }, {
            "ID": "3960",
            "Name": "北京市场部",
            "ParentID": "3953",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3961",
                "Name": "市场一部",
                "ParentID": "3960",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "3962", "Name": "市场二部", "ParentID": "3960", "StopFlag": "0", "Code": ""}]
        }, {
            "ID": "3963",
            "Name": "北京财务部",
            "ParentID": "3953",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3964",
                "Name": "财务一部",
                "ParentID": "3963",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "3965", "Name": "财务二部", "ParentID": "3963", "StopFlag": "0", "Code": ""}]
        }]
    }, {"ID": "3966", "Name": "我是菠菜", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3967",
        "Name": "我是菠菜",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3968", "Name": "委外部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3969",
        "Name": "技术信息中心",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "3970",
            "Name": "北京技术部",
            "ParentID": "3969",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3971",
                "Name": "技术部研发中心",
                "ParentID": "3970",
                "StopFlag": "0",
                "Code": "",
                "Children": [{
                    "ID": "3972",
                    "Name": "产品研发一部啦啦啦啦啦啦啦啦啦啦啦啦啦",
                    "ParentID": "3971",
                    "StopFlag": "0",
                    "Code": ""
                }]
            }]
        }]
    }, {"ID": "3973", "Name": "设计部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3974",
        "Name": "质检部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "3975", "Name": "三车间", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3976",
        "Name": "行政部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {
        "ID": "3977",
        "Name": "云事业部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "3978",
            "Name": "研发中心",
            "ParentID": "3977",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3979",
                "Name": "U8项目测试组",
                "ParentID": "3978",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "3980", "Name": "客户公海测试组", "ParentID": "3978", "StopFlag": "0", "Code": ""}, {
                "ID": "3981",
                "Name": "轨迹测试组",
                "ParentID": "3978",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "3982", "Name": "任务测试组", "ParentID": "3978", "StopFlag": "0", "Code": ""}, {
                "ID": "3983",
                "Name": "简报测试组",
                "ParentID": "3978",
                "StopFlag": "0",
                "Code": ""
            }]
        }]
    }, {"ID": "3984", "Name": "财务二部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3985",
        "Name": "研发中心测试部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "3986", "Name": "U8项目测试组", "ParentID": "3985", "StopFlag": "0", "Code": ""}]
    }, {"ID": "3987", "Name": "云事业部", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3988",
        "Name": "爱上的说法都是高仿的第三方大哥",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {
        "ID": "3989",
        "Name": "整合部门一部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "3990",
            "Name": "整合测试部",
            "ParentID": "3989",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "3991",
                "Name": "整合U8测试部",
                "ParentID": "3990",
                "StopFlag": "0",
                "Code": "",
                "Children": [{
                    "ID": "3992",
                    "Name": "整我爱菠菜合U8测试一部一小组",
                    "ParentID": "3991",
                    "StopFlag": "0",
                    "Code": ""
                }]
            }]
        }]
    }, {"ID": "3993", "Name": "七夕U8项目组", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "3994",
        "Name": "七夕任务一组",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "673", "Name": "一级部门001", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "674",
        "Name": "一级部门002",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {"ID": "676", "Name": "一级部门4", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "4005",
        "Name": "任务研发部门",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "4006",
            "Name": "任务研发一部",
            "ParentID": "4005",
            "StopFlag": "0",
            "Code": ""
        }, {"ID": "4007", "Name": "任务测试二部", "ParentID": "4005", "StopFlag": "0", "Code": ""}]
    }, {"ID": "678", "Name": "一级部门006", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "679",
        "Name": "一级部门007",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": ""
    }, {
        "ID": "681",
        "Name": "1211",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{"ID": "682", "Name": "1211001", "ParentID": "681", "StopFlag": "0", "Code": ""}]
    }, {
        "ID": "703",
        "Name": "线索测试总部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "",
        "Children": [{
            "ID": "704",
            "Name": "华北区",
            "ParentID": "703",
            "StopFlag": "0",
            "Code": "",
            "Children": [{
                "ID": "706",
                "Name": "销售一部",
                "ParentID": "704",
                "StopFlag": "0",
                "Code": ""
            }, {"ID": "718", "Name": "销售二部", "ParentID": "704", "StopFlag": "0", "Code": ""}]
        }, {"ID": "705", "Name": "华南区", "ParentID": "703", "StopFlag": "0", "Code": ""}]
    }, {"ID": "714", "Name": "新部门", "ParentID": "112", "StopFlag": "0", "Code": ""}, {
        "ID": "281",
        "Name": "物流中心",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "00000000",
        "Children": [{
            "ID": "273",
            "Name": "财务部",
            "ParentID": "281",
            "StopFlag": "0",
            "Code": "010",
            "Children": [{"ID": "393", "Name": "大会计", "ParentID": "273", "StopFlag": "0", "Code": ""}, {
                "ID": "194",
                "Name": "we",
                "ParentID": "273",
                "StopFlag": "1",
                "Code": "",
                "Children": [{
                    "ID": "195",
                    "Name": "test0101",
                    "ParentID": "194",
                    "StopFlag": "1",
                    "Code": "",
                    "Children": [{
                        "ID": "198",
                        "Name": "test010101",
                        "ParentID": "195",
                        "StopFlag": "1",
                        "Code": ""
                    }]
                }, {"ID": "196", "Name": "test0101", "ParentID": "194", "StopFlag": "1", "Code": ""}, {
                    "ID": "197",
                    "Name": "test0102",
                    "ParentID": "194",
                    "StopFlag": "1",
                    "Code": ""
                }, {"ID": "278", "Name": "技术部", "ParentID": "194", "StopFlag": "1", "Code": "005"}, {
                    "ID": "211",
                    "Name": "21as",
                    "ParentID": "194",
                    "StopFlag": "1",
                    "Code": "11"
                }, {"ID": "202", "Name": "1434ee", "ParentID": "194", "StopFlag": "1", "Code": "e"}]
            }, {"ID": "274", "Name": "会计科", "ParentID": "273", "StopFlag": "1", "Code": "010"}]
        }]
    }, {
        "ID": "3852",
        "Name": "A华北销售大区",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "001",
        "Children": [{
            "ID": "3853",
            "Name": "销售一组",
            "ParentID": "3852",
            "StopFlag": "0",
            "Code": "0010"
        }, {"ID": "3854", "Name": "销售二组", "ParentID": "3852", "StopFlag": "0", "Code": "0011"}]
    }, {
        "ID": "269",
        "Name": "企划部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "001",
        "Children": [{"ID": "740", "Name": "测试业务", "ParentID": "269", "StopFlag": "0", "Code": ""}, {
            "ID": "271",
            "Name": "企划1部",
            "ParentID": "269",
            "StopFlag": "0",
            "Code": "0101"
        }, {"ID": "272", "Name": "企划1组第一分支", "ParentID": "269", "StopFlag": "1", "Code": "010101"}]
    }, {
        "ID": "283",
        "Name": "001999",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "001",
        "Children": [{"ID": "337", "Name": "www", "ParentID": "283", "StopFlag": "0", "Code": ""}]
    }, {"ID": "3995", "Name": "客户公海测试部门", "ParentID": "112", "StopFlag": "0", "Code": "001"}, {
        "ID": "707",
        "Name": "测试部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "099"
    }, {"ID": "709", "Name": "31测试部", "ParentID": "112", "StopFlag": "0", "Code": "099"}, {
        "ID": "715",
        "Name": "llll",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "1",
        "Children": [{"ID": "717", "Name": "eeeee", "ParentID": "715", "StopFlag": "0", "Code": ""}, {
            "ID": "116",
            "Name": "99999",
            "ParentID": "715",
            "StopFlag": "0",
            "Code": "1111111",
            "Children": [{"ID": "234", "Name": "pp", "ParentID": "116", "StopFlag": "0", "Code": ""}, {
                "ID": "135",
                "Name": "北京分部",
                "ParentID": "116",
                "StopFlag": "0",
                "Code": "111112"
            }, {"ID": "122", "Name": "测试部04", "ParentID": "116", "StopFlag": "0", "Code": "11112204"}, {
                "ID": "199",
                "Name": "商1部子部门01",
                "ParentID": "116",
                "StopFlag": "1",
                "Code": ""
            }]
        }, {"ID": "716", "Name": "oooo", "ParentID": "715", "StopFlag": "0", "Code": "2"}]
    }, {
        "ID": "711",
        "Name": "超客公司销售部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "100",
        "Children": [{
            "ID": "712",
            "Name": "销售一组",
            "ParentID": "711",
            "StopFlag": "0",
            "Code": "1001"
        }, {"ID": "713", "Name": "销售二组", "ParentID": "711", "StopFlag": "0", "Code": "1002"}]
    }, {
        "ID": "119",
        "Name": "研发部",
        "ParentID": "112",
        "StopFlag": "0",
        "Code": "11112222",
        "Children": [{"ID": "671", "Name": "UI交互组", "ParentID": "119", "StopFlag": "0", "Code": ""}, {
            "ID": "670",
            "Name": "前端开发",
            "ParentID": "119",
            "StopFlag": "0",
            "Code": "007"
        }, {"ID": "698", "Name": "考勤测试部门", "ParentID": "119", "StopFlag": "0", "Code": "03"}, {
            "ID": "699",
            "Name": "考勤点（迟到）",
            "ParentID": "119",
            "StopFlag": "0",
            "Code": "101"
        }, {"ID": "700", "Name": "考勤点（早退）", "ParentID": "119", "StopFlag": "0", "Code": "102"}, {
            "ID": "701",
            "Name": "考勤点（打卡不完整）",
            "ParentID": "119",
            "StopFlag": "0",
            "Code": "103"
        }, {"ID": "702", "Name": "考勤点（正常打卡）", "ParentID": "119", "StopFlag": "0", "Code": "104"}, {
            "ID": "710",
            "Name": "停用部门测试",
            "ParentID": "119",
            "StopFlag": "0",
            "Code": "11111"
        }, {"ID": "172", "Name": "移动测试部", "ParentID": "119", "StopFlag": "0", "Code": "1111333"}, {
            "ID": "120",
            "Name": "测试部",
            "ParentID": "119",
            "StopFlag": "1",
            "Code": "111122",
            "Children": [{
                "ID": "138",
                "Name": "护士部",
                "ParentID": "120",
                "StopFlag": "1",
                "Code": "",
                "Children": [{
                    "ID": "139",
                    "Name": "鉴证科2组",
                    "ParentID": "138",
                    "StopFlag": "1",
                    "Code": "234234",
                    "Children": [{
                        "ID": "168",
                        "Name": "鉴证科9组",
                        "ParentID": "139",
                        "StopFlag": "1",
                        "Code": "123123"
                    }, {"ID": "169", "Name": "鉴证科9组", "ParentID": "139", "StopFlag": "1", "Code": "123123"}]
                }]
            }, {"ID": "125", "Name": "测试部01", "ParentID": "120", "StopFlag": "1", "Code": "11112201"}, {
                "ID": "124",
                "Name": "测试部02",
                "ParentID": "120",
                "StopFlag": "1",
                "Code": "11112202"
            }, {"ID": "123", "Name": "测试部03", "ParentID": "120", "StopFlag": "1", "Code": "11112203"}, {
                "ID": "121",
                "Name": "测试部05",
                "ParentID": "120",
                "StopFlag": "1",
                "Code": "11112205"
            }]
        }, {"ID": "126", "Name": "研发部01", "ParentID": "119", "StopFlag": "1", "Code": "11112211"}, {
            "ID": "127",
            "Name": "研发部02",
            "ParentID": "119",
            "StopFlag": "1",
            "Code": "11112212"
        }, {"ID": "128", "Name": "研发部03", "ParentID": "119", "StopFlag": "1", "Code": "11112213"}, {
            "ID": "129",
            "Name": "研发部04",
            "ParentID": "119",
            "StopFlag": "1",
            "Code": "11112214"
        }]
    }, {
        "ID": "3898",
        "Name": "jane技术中心",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "",
        "Children": [{"ID": "4008", "Name": "001", "ParentID": "3898", "StopFlag": "1", "Code": ""}, {
            "ID": "4009",
            "Name": "002",
            "ParentID": "3898",
            "StopFlag": "1",
            "Code": ""
        }]
    }, {"ID": "354", "Name": "322", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "357",
        "Name": "3413123",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "359", "Name": "3413123", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "362",
        "Name": "2131313",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "364", "Name": "qweqeqew", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "365",
        "Name": "wqeqe",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "366", "Name": "wqeqe", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "367",
        "Name": "wqeqeq",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "368", "Name": "wqeqeq", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "381",
        "Name": "12313",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "389", "Name": "989", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "390",
        "Name": "89808",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "391", "Name": "898", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "392",
        "Name": "898",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "672", "Name": "一级部门", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "675",
        "Name": "一级部门3",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": ""
    }, {"ID": "203", "Name": "31", "ParentID": "112", "StopFlag": "1", "Code": ""}, {
        "ID": "395",
        "Name": "开发部",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "0002"
    }, {"ID": "276", "Name": "宣传部", "ParentID": "112", "StopFlag": "1", "Code": "009"}, {
        "ID": "301",
        "Name": "01",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "01"
    }, {"ID": "302", "Name": "01", "ParentID": "112", "StopFlag": "1", "Code": "01"}, {
        "ID": "270",
        "Name": "企划部",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "010"
    }, {"ID": "275", "Name": "人力部", "ParentID": "112", "StopFlag": "1", "Code": "010"}, {
        "ID": "277",
        "Name": "物资部",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "010"
    }, {"ID": "133", "Name": "行政部04", "ParentID": "112", "StopFlag": "1", "Code": "1111124"}, {
        "ID": "136",
        "Name": "海上上海分部4",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "111113"
    }, {"ID": "166", "Name": "后勤部22", "ParentID": "112", "StopFlag": "1", "Code": "11122234"}, {
        "ID": "137",
        "Name": "深圳 ",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "1222"
    }, {"ID": "708", "Name": "2016131", "ParentID": "112", "StopFlag": "1", "Code": "2016131"}, {
        "ID": "348",
        "Name": "324242442442",
        "ParentID": "112",
        "StopFlag": "1",
        "Code": "24242424"
    }],

}


const loopEsnTree = (data, path) => data.map(item => {

    let currentPath = path && path.concat(item.ID) || [item.ID]

    if (item.Children && item.Children.length) {

        return (<TreeNode key={item.ID} title={item.Name} data-path={currentPath}>
            {loopEsnTree(item.Children, currentPath)}
        </TreeNode>)
    }
    return <TreeNode key={item.ID} title={item.Name} data-path={currentPath}/>
})


const getChildrenKeysCollect = (data) => {
    let keysCollect = {}
    const generateKeysCollect = (_arr, _ancestors) => {
        _ancestors = _ancestors || []
        _arr.forEach(item => {
            keysCollect[item.ID] = [item.ID]
            _ancestors.forEach(ancestor => {
                keysCollect[ancestor].push(item.ID)
            })
            if (item.Children && item.Children.length) {
                generateKeysCollect(item.Children, _ancestors.concat(item.ID))
            }
        })
    }
    generateKeysCollect(data)
    return keysCollect
}


/**
 * 组织结构导入逻辑：
 *     1. check时自动关联上级
 *     2. 取消check时取消所有子级
 *
 */

class DoubleTree extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            checkedKeys: [],
            newDept: []
        }
    }

    onCheck = (checkedKeys, e) => {
        const {checked, node} = e
        const $$checkedKeys = Immutable.Set(this.state.checkedKeys)
        let newCheckedKeys
        if (checked) {
            //选中所有的父节点
            const $$parentIDs = Immutable.Set(node.props['data-path'])
            newCheckedKeys = $$checkedKeys.union($$parentIDs).toJS()

        } else {
            //取消所有的子节点
            const $$childIDs = Immutable.Set(this['ChildrenKeysCollect'][node.props.eventKey])
            newCheckedKeys = $$checkedKeys.subtract($$childIDs).toJS()
        }
        this.setState({
            checkedKeys: newCheckedKeys
        });

    }
    getCheckedTree = () => {
        const {checkedKeys} = this.state


        this.setState({
            newDept: getfilterTree(Immutable.fromJS([deptTree]).toJS())
        })


    }

    render() {
        this.ChildrenKeysCollect = getChildrenKeysCollect([deptTree])
        const {checkedKeys} = this.state


        const getfilterTree = data => data.filter(item => {

            if (checkedKeys.indexOf(item.ID) < 0) return false


            item.checked = true
            if (item.Children && item.Children.length) {
                item.Children = getfilterTree(item.Children)
            }
            return checkedKeys.indexOf(item.ID) > -1
        })

        let newDept

        if (checkedKeys.length){
            newDept = getfilterTree(Immutable.fromJS([deptTree]).toJS())
        }

        console.log(newDept)
        return (
            <div>
                <Tree
                    defaultExpandAll
                    checkedKeys={checkedKeys}
                    checkable
                    checkStrictly
                    onCheck={this.onCheck}
                >
                    {loopEsnTree([deptTree])}

                </Tree>




                {/*todo: 可以做优化*/}
                {checkedKeys.length ? (<Tree expandedKeys={checkedKeys}>
                        {loopEsnTree(newDept)}

                    </Tree>) : null}


            </div>
        );
    }
}

export default DoubleTree