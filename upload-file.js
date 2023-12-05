const {Storage} = require("@google-cloud/storage");
const storage = new Storage({keyFilename: "./server-key.json"});

async function uploadFile(){
    await storage.bucket("see7indehouse").upload("./Events-Page-43.jpg");
    console.log("Uploaded bitch");
}

async function deleteFile(){
    await storage.bucket("see7indehouse").file("Events-Page-43.jpg").delete();
}

async function uploadFromMemory(content){
    await storage.bucket("see7indehouse").file("test-image.jpg").save(content);
}


module.exports = {uploadFile,deleteFile,uploadFromMemory};