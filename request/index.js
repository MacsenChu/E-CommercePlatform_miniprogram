
// 同时发送异步代码得我次数
let ajaxTimes = 0;
export const request = (params) => {
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