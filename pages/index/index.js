// 0 引入用来发送请求的方法 一定要把路径补全
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime';
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    catesList: [],
    // 楼层数组
    floorList: []
  },
  // 页面开始加载 就会触发
  onLoad: function(options) {
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },

  // 获取轮播图数据
  async getSwiperList () {
    // 1 发送异步请求获取轮播图数据
    // var reqTask = wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     console.log(result);
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   }
    // });
    let { data: res } =  await request({url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata'});
    this.setData({
      swiperList: res.message
    });
  },

  // 获取导航数据
  async getCateList() {
    let { data: res } = await request({url: 'https://api.zbztb.cn/api/public/v1/home/catitems'});
    this.setData({
      catesList: res.message
    });
  },

  // 获取导航数据
  async getFloorList() {
    let { data: res } = await request({url: 'https://api.zbztb.cn/api/public/v1/home/floordata'});
    this.setData({
      floorList: res.message
    });
  }
});
  