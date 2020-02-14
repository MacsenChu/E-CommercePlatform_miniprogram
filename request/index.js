
// 同时发送异步代码得我次数
let ajaxTimes = 0;
export const request = (params) => {
    // 判断 url 中是否带有 /my/ 请求的是私有的路径 带上 header token
    let header = {...params.header};
    if (params.url.includes("/my/")) {
        // 拼接 header 带上 token
        header["Authorization"] = wx.getStorageSync("token");   
    }
    ajaxTimes++;
    // 显示加载中 效果
    wx.showLoading({
        title: "加载中",
        mask: true
    });

    // 定义公告的url
    const baseUrl = "https://api.zbztb.cn/api/public/v1"
    return new Promise((resolve, reject) => {
        return wx.request({
            ...params,
            header,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    // 关闭正在等待的图标
                wx.hideLoading();
                }
            }
        });
    })
}