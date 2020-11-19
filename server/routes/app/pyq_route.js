const Router = require("koa-router");
const axios = require("axios");
const pyq = require("../../model/pyq");
const JWT = require('jsonwebtoken');

const router = new Router({ prefix: "/api/app" });

router.get('/pyq_infor',async(ctx)=>{
    ctx.verifyParams({
        token: 'string'
      });
      const result = JWT.verify(ctx.request.query.token, 'hello world'); 
      console.log(result);
      const infors = await pyq.find({openid:result.openid});
    //   console.log(infors);
      if(infors.length > 0){
        ctx.status = 200;
        ctx.body = {
            hasart: true,
            infors,
          message: '登录成功'
        }
      }else{
        //没有数据
        ctx.status = 200;
        ctx.body = {
            hasart: false,
          message: '没数据'
        }
      }
})


router.get('/add_pyq',async(ctx)=>{
    ctx.verifyParams({
        token: 'string',
    });
    const result = JWT.verify(ctx.request.query.token, 'hello world'); 
    console.log(result);
    console.log(ctx.request.query);
    await  new pyq({
        openid : result.openid,
        url : ctx.request.query.touxiang,
        name : ctx.request.query.name,
        text : ctx.request.query.text,
        imgs : ctx.request.query.imgs,
        time : ctx.request.query.time,
        like : ctx.request.query.like,
    }).save()
    .then(()=>{
        ctx.status = 200;
        ctx.body = {
          message: '插入成功'
        }
    });
})

module.exports = router;
