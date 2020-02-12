export const request = (params) => {
    return new Promise((resolve, reject) => {
        return wx.request({
            ...params,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
        });
    })
}