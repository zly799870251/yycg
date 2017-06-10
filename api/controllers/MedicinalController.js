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
  list:function(req, res) {
    // Medicinal.find({where:{
    //   name:'lucy'
    // },sort:'createdAt desc'}).exec(function(err, records) {
    //   return res.json(records);
    // })
    Medicinal.find({sort:'createdAt desc'}).exec(function (err, records) {
      return res.render('');
    });
  },

  create: function (req, res) {
    var user = {
      id: req.body.id, // id
      serialNumber: {type: 'string'}, // 流水号
      genericName: {type: 'string'}, // 通用名
      dosageForm: {type: 'string'}, // 剂型
      specification:{type:'string'}, // 规格
      conversionFactor:{type:'string'}, // 转换系数
      manuenterName:{type:'string'}, // 生产企业名称
      commodityName:{type:'string'}, // 商品名
      bidPrice:{type:'double'}, // 中标价
      company:{type:'string'}, // 单位
      gnamePhoneticAlphabet:{type:'string'}, // 通用名拼音
      productPhotos:{type:'string'}, // 产品照片（相对路径）
      approvalNumber:{type:'string'}, // 批准文号
      approvalValidityDate:{type:'datetime'}, // 批准文号有效期
      isImportedDrugs:{type:'int'}, // 是否进口药 1：是、0：否
      packingMaterial:{type:'string'}, // 包装材质
      packingCompany:{type:'string'}, // 包装单位
      latestRetailPrice:{type:'double'}, // 最新零售价
      retailPriceSource:{type:'string'}, // 零售价出处
      qualityLevel:{type:'string'}, // 质量层次 (存储数据字典，国家一类新药 国家科学进步奖 专利 原研、单独定价 优质优价 GMP)
      qualityLevelDescription:{type:'string'}, // 质量层次说明
      isDrugInspectionReport:{type:'int'}, // 有无药品检验报告 1：有、0：无
      drugInspectionReportNumber:{type:'string'}, // 药品检验报告编号
      drugInspectionReportValidityDate:{type:'datatime'}, // 药品检验报告有效期（年月日）
      productDescription:{type:'string'}, // 产品说明
      drugCategory:{type:'string'}, // 药品类别
      drugTradingStatus: {type: 'int'} // 药品交易状态 存储数据字典，1：正常(添加时默认)、2：取消交易
    };
    User.create(user).exec(function (err, records) {
      return res.view('myjade.jade',{user:user});
    });
  }

};

