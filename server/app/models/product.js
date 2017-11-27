let mongoose=reqiure ('mongoose');
let Schema=mongoose.Schema;
let productSchema=new Schema({
    title:{type:String,required:true,minLength:11},
	image:{type:String,required:true},
	description:{type:String,required:true, maxLength:1000},
	price:{type:Number,required:true,min:0},
	quantity:{type:Number,required:true,min:0},
	category:{type:String,required:true},
	start_date:{type:Date,default:''},
	end_date:{type:Date,default:''},
	start_price:{type:Number,default:0},
	step:{type:Number,default:0},
	card_number:{type:Number,required:true,minLength:16,maxLength:16},
	card_month:{type:Number,required:true, min:0,max:12},
	card_year:{type:Number,required:true,min:2017 ,max:2026},
	card_cvc:{type:Number,required:true,minLength:3,maxLength:3},
	create_at:{type:Date,default:Date.Now}
});
module.exports= mongoose.model ('product', productSchema);