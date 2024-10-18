import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'



//importing router from routes directory
import Homeroutes from './routes/UserRoutes.js'
import Authentication from './routes/Authentication.js'
import crudbook from './routes/crudbook.js'




const app = express()

app.set('view engine','ejs')
app.set('views',path.join(process.cwd(),'views'))
app.use(express.static(path.join(process.cwd(),'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use('/',Authentication)
app.use('/user',Homeroutes)
app.use('/crudbook',crudbook)

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
