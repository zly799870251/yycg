/**
 * MedicinalController
 *
 * @description :: Server-side logic for managing medicinals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = {

  // 查询药品列表
  list: function (req, res) {
    var currentPage = req.query.currentPage;
    var pageSize = req.query.pageSize;
    var record = MedicinalService.findAll(currentPage,pageSize);
    return res.render('medicinal/medicinalList',{list:record});
  },

  // 添加药品
  create: function (req, res) {
    var records = MedicinalService.create(req.body);
    res.render('medicinal/medicinalList', {records: records});
  },

  // 修改药品
  update: function (req, res) {
    MedicinalService.update(req.body);
  },

  // 删除药品
  remove: function (req, res) {

  }

};

