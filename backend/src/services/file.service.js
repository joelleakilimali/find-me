const File = require("../models/file.model");

module.exports = {
  addFile: async (path, key) => {
    const file = new File({ path: path, key: key });
    await file.save();
    return file;
  },
  deleteFile: async (id) => {
    return File.findByIdAndRemove(id);
  },
};
