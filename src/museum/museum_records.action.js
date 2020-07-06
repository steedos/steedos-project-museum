module.exports = {
  submit: function(){
    toastr.success("数据上报提交操作，待开发");
  },

  submitNation: function(){
    toastr.success("省局通过、提交国家局，待开发");
  },

  pass: function(){
    toastr.success("国家局通过，待开发");
  },

  returnMuseum: function(){
    toastr.success("退回修改数据，待开发");
  },

  submitVisible: function(){
    return true
  },

  submitNationVisible: function(){
    return true
  },

  passVisible: function(){
    return true
  },

  returnMuseumVisible: function(){
    return true
  }
}