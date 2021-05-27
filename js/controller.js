
let getAllBook=function(s){
	var d;
	$.ajax({
	           cache: false,
	           async: false,
	           type: "GET",
	           data: {  },
	           url: `http://localhost:8081/bookapi/getallbook`,
	           success: function (data) {
	               d = data;
	           }
	       });
	return d;					
}
function makebook(books){
	var bol;
	if(Object.prototype.toString.call(books) === '[object Object]'){
		if(books.outb){
			bol = '是';
		}else{
			bol = '否';
		}
		return [{bookid:books.bookid,name:books.name,outb:bol}];
	}
	var result = []
	for(book in books){
		if(books[book].outb){
			bol = '是';
		}else{
			bol = '否';
		}
		result.push({bookid:books[book].bookid,name:books[book].name,outb:bol});
	}
	return result;
}
// var select = {
//     data() {
//       return {
//         dialogVisible: false,
// 		options: [{
// 		          value: '选项1',
// 		          label: '书籍ID'
// 		        }, {
// 		          value: '选项2',
// 		          label: '书籍名'
// 		        }],
// 		value: '选项1',
// 		input: '',
//       };
//     },
//     methods: {
//       handleClose(done) {
// 		   done();
//       },
// 	  open() {
// 	    this.$alert('这是一段内容', '标题名称', {
// 	      confirmButtonText: '确定',
// 	      callback: action => {
// 	        this.$message({
// 	          type: 'info',
// 	          message: `action: ${ action }`
// 	        });
// 	      }
// 	    });
// 	  },
// 	  search(){
// 		  if(this.value='选项1'){
// 			  // var d;
// 			  // $.ajax({
// 			  //            cache: false,
// 			  //            async: false,
// 			  //            type: "GET",
// 			  //            data: {  },
// 			  //            url: `http://localhost:8081/bookapi/getbookbyid?bookid=${this.input}`,
// 			  //            success: function (data) {
// 			  //                d = data;
// 			  //            }
// 			  //        });
// 		  }else{
// 			  console.log(ok);
// 		  }
// 		  this.dialogVisible = false;
// 	  },
//     }
//   };
var main = {
methods: {
	handleClose(done) {
			   done();
	      },
	handleClose1(done) {
			   done();
	      },
		  search(){
			  if(this.value=='1'){
				  var d;
				  $.ajax({
				             cache: false,
				             async: false,
				             type: "GET",
				             data: {  },
				             url: `http://localhost:8081/bookapi/getbookbyid?bookid=${this.input}`,
				             success: function (data) {
				                 d = data;
				             }
				         });
				  
				  this.tableData=makebook(d);
			  }else if(this.value=='2'){
				  var d;
				  $.ajax({
				             cache: false,
				             async: false,
				             type: "GET",
				             data: {  },
				             url: `http://localhost:8081/bookapi/getbookbyname?name=${this.input}`,
				             success: function (data) {
				                 d = data;
				             }
				         });
				  
				  this.tableData=makebook(d);
				  
			  }
			  this.$message({
			            message: '书籍查询成功',
			            type: 'success'
			          })
			  this.dialogVisible = false;
		  },
      deleteRow(index, rows) {
		  var isok;
		$.ajax({
		           cache: false,
		           async: false,
		           type: "DELETE",
		           data: {  },
		           url: `http://localhost:8081/bookapi/deletbyid?bookid=${rows[index].bookid}`,
		           success: function (data) {
		               isok = data;
		           }
		       });
		if(isok == 1){
		  this.$message({
		            message: '书籍已删除',
		            type: 'success'
		          })
		}else if(isok == 0){
					this.$message.error('书籍删除失败')
		}
        rows.splice(index, 1);
      },
	  open() {
	    this.$alert('这是一段内容', '标题名称', {
	      confirmButtonText: '确定',
	      callback: action => {
	        this.$message({
	          type: 'info',
	          message: `action: ${ action }`
	        });
	      }
	    });
	  },
	  reset(){
		  this.tableData=makebook(getAllBook());
		  this.$message({
		            message: '书库状态以还原',
		            type: 'success'
		          })
	  },
	  changeoutb(index, rows){
		  var isok;
		  $.ajax({
		             cache: false,
		             async: false,
		             type: "POST",
		             data: {  },
		             url: `http://localhost:8081/bookapi/updateoutb?outb=${rows[index].outb}&bookid=${rows[index].bookid}`,
		             success: function (data) {
						isok = data;
		             }
		         });
		  if(rows[index].outb=="是"){
			  rows[index].outb="否"
		  }else if (rows[index].outb=="否"){
			  rows[index].outb="是"
		  }
		  if(isok == 1){
		    this.$message({
		              message: '书籍已归还（借出）',
		              type: 'success'
		            })
		  }else if(isok == 0){
			this.$message.error('借出状态更改错误')
		  }
	  },
	  insertnewbook(){
		var outb;
		if(this.value2){
			outb = "否"
		}else{
			outb = "是"
		}
		var isok;
		$.ajax({
		           cache: false,
		           async: false,
		           type: "POST",
		           data: {  },
		           url: `http://localhost:8081/bookapi/insertnewbook?bookid=${this.bookid}&name=${this.name}&outb=${outb}`,
		           success: function (data) {
								isok = data;
		           }
		       });
		this.tableData=makebook(getAllBook());
		this.dialogVisible1 = false;
		if(isok == 1){
		  this.$message({
		            message: '书籍已创建',
		            type: 'success'
		          })
		}else if(isok == 0){
					this.$message.error('书籍创建失败')
		}
	  }
    },
    data() {
      return {
		  value2:true,
		  bookid: '',
		  name: '',
		  dialogVisible1: false,
		  dialogVisible: false,
		  options: [{
		            value: '1',
		            label: '书籍ID'
		          }, {
		            value: '2',
		            label: '书籍名'
		          }],
		  value: '1',
		  input: '',
        tableData: makebook(getAllBook())
      }
    }
}


// var s = Vue.extend(select)
// new s().$mount('#select');
// var ins = Vue.extend(insert);
// new ins().$mount('#insert')
// var s = Vue.extend(search);
// new s().$mount('#search');
var Ctor = Vue.extend(main);
new Ctor().$mount('.all');
