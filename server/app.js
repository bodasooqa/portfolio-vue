const express = require('express');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
// const passport = require('passport');
// const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio', { useNewUrlParser: true })
//     .then(() => console.log('[OK] DB is connected'))
//     .catch(err => console.error(err));

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(session({
//     secret: process.env.SECRET_KEY || 'secret',
//     store: new FileStore(),
//     cookie: {
//         path: '/',
//         httpOnly: true,
//         maxAge: 60 * 60 * 1000
//     },
//     resave: false,
//     saveUninitialized: false
// }));

// require('./config/config.passport');
// app.use(passport.initialize());
// app.use(passport.session());

app.use(morgan('dev'));

// Routes
// app.use('/api/tasks', require('./server/routes/tasks'));
// app.use('/api/user', require('./server/routes/user'));

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/login', express.static(path.join(__dirname, 'admin')));

app.get('/', (req, res) => {
    res.end('Express');
});
// app.post('/login', (req, res, next) => {
//     passport.authenticate('local', function(err, user) {
//         if (err) return next(err);
//         if (!user) return res.send('Incorrect password or email');
//         req.logIn(user, function(err) {
//             if (err) return next(err);
//             return res.redirect('/admin');
//         });
//     })(req, res, next);
// });
// app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });
app.post('/sendmail', (req, res) => {
    const output = `
        <p>You have a new message from bodasooqa.ru:</p>
        <ul>
            <li>name: ${req.body.post.name}</li>
            <li>email: ${req.body.post.email}</li>
        </ul>
        <p>${req.body.post.message}</p>
    `;

    res.json({state: 'success'});

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: '"Bodasooqa 👻" <bodasooqa@gmail.com>',
        to: 'timlol9894@gmail.com',
        subject: `Bodasooqa | New message "${req.body.post.subject}"`,
        text: req.body.post.name,
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});

const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/');
    }
};

app.get('/admin', auth, (req, res) => {
    res.send('Admin')
});

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});