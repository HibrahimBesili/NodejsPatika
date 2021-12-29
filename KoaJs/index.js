const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('/',(ctx) =>{
  ctx.body = 'Index Page'
 });

router.get('/about',(ctx) =>{
    ctx.body = 'About Page'
});

router.get('/contact',(ctx) =>{
  ctx.body = 'Contact Page'
 });

 
app.use(router.routes());

app.listen(3000);