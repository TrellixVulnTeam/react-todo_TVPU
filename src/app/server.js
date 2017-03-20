import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
//import NotFoundPage from './components/NotFoundPage';

const app = new Express();
const server =  new Server(app);
//set ejs template engine and templates path in express - ejs middleware
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//serve static files using express static
console.log(12122);
app.use(Express.static(path.join(__dirname,'static')));
//instead of writing multiple route defs we can define for universal route as below
app.get('*',(req,res)=>{
  console.log('get');
  //which is used to match routes agaisnst set of routes wtihout rendering the route, if match found call back is called
    match({routes,location:req.url},(err,redirectLocation,renderProps)=>{
          if(err){
            return res.status(500).send(err.message);
          }
          console.log(routes);
           // in case of redirect propagate the redirect to the browser
           //THIS CAN COME FROM <Redirect from="about/:id" to = "person/:id />"
           if(redirectLocation){
               return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
           }

           // generate the React markup for the current route
           //let means one time initiated var, has block scope
           let markup ;
           if(renderProps){
             markup = renderToString(<RouterContext {...renderProps} />)
           }/*else{
             markup = renderToString(<NotFoundPage />);
             res.status(404);
           }*/

            return res.render('index',{markup})
    });
});

const port  = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(3000,(err)=>{
  if(err){
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})
