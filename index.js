const directoryExist = require('./service/fs-extra.service');
// const fsService = require('./service/fs-extra.service');
const dirname = './temp';
directoryExist(dirname);
// fsService.directoryExist(dirname).then(exist=>fsService.removeDirectory(exist,dirname).then(fsService.createDirectory(dirname))).catch(err=>console.log(err.message));