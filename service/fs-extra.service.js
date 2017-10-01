const fs = require('fs-extra');
function directoryExist(dirname){
    fs.pathExists(dirname).then(exist=>{
        if(exist){
            fs.remove(dirname).then(()=>{fs.ensureDir(dirname).then(console.log(`Suppression du dossier ${dirname}, création du dossier ${dirname}`))});
        }
        else{
            fs.ensureDir(dirname).then(console.log(`Dossier ${dirname} créé`));
        }
    }).catch(err=>console.log(err.message));
}
/*function directoryExist(dirname) {
    return new Promise((resolve, reject) => {
        return fs.pathExists(dirname).then(exist => {
            console.log(`Exist : ${exist}`);
            resolve(exist);
        }).catch(err => reject(err))
    })
}

function removeDirectory(exist, dirname) {
    if (exist) {
        return new Promise((resolve,reject)=>{
            return fs.remove(dirname).then(()=>{
                console.log(`Folder ${dirname} deleted`);
                resolve('ok');
            }).catch(err=>reject(err));
        });
    }
    else {
        return Promise.resolve();
    }
}
function createDirectory(dirname){
    return new Promise((resolve,reject)=>{
        return fs.mkdirs(dirname).then(()=>{
            console.log(`Dossier ${dirname} crée`);
            resolve();
        }).catch(err=>reject(err))
    })
}*/

/*function directoryExist(dirname){
    return fs.pathExists(dirname);
}
function removeDirectory(exist,dirname){
    if(exist){
        return fs.remove(dirname);
    }
    else{
        return Promise.resolve();
    }
}
function createDirectory(dirname){
    return fs.ensureDir(dirname);
}*/

module.exports = directoryExist;
// module.exports = {directoryExist, removeDirectory, createDirectory};