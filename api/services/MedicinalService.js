/**
 * Created by zhangly on 2017/6/11.
 */
module.exports = {

  // 查询所有
  findAll: function (currentPage, pageSize) {
    var skipPage = currentPage * pageSize;
    Medicinal.find({skip: skipPage, limit: pageSize, sort: 'createdAt desc'}).exec(function (err, records) {
      return records;
    });
  },

  // 根据ID查询
  findById: function (id) {
    Medicinal.find({where: {id: id}, sort: 'createdAt desc'}).exec(function (err, records) {
      if (err) sails.log(err);
      return records;
    });
  },

  // 添加
  create: function (modicinal) {
    Medicinal.create(modicinal).exec(function (err, records) {
      if (err) sails.log(err);
      return records;
    });
  },

  // 修改
  update: function (modicinal) {
    Medicinal.update(modicinal.id, modicinal).exec(function (err, records) {
      if (err) sails.log(err);
      return records;
    });
  },

  // 删除
  remove: function (id) {
    Medicinal.drop({where: {id: id}}).exec(function (err, records) {
      if (err) sails.log(err);
      return records();
    });
  }

}
