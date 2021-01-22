const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: 'LTAI4Fnoycg1JiFJr9kpBEVE',
    accessKeySecret: 'zDbSAbDak38fAUq5Mh4DtDmTGWJOnj',
    endpoint: 'https://iot.cn-shanghai.aliyuncs.com',
    apiVersion: '2018-01-20'
});

module.exports = {
    client: client
}