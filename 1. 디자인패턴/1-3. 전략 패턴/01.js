/**
 * 
 * passport 는 Node.js 에서 인증 모듈을 구현할 때 쓰는 미들웨어 라이브러리.
 * 
 * 여러 '전략'을 기반으로 인증할 수 있게 함.
 * 
 * 서비스내의 회원가입된 아이디와 비밀번호를 기반으로 인증하는 LocalStrategy 전략
 * 페이스북, 네이버 등 다른 서비스를 기반으로 인증하는        OAuth 전략 등을 지원
 */


//예제 '전략'만 바꿔서 인증 - passport 라이브러리 발췌.

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        username.findOne({ username : username }, function (err, user) {
            if (err) {return done(err); }
                if(!user) {
                    return done(null, false, {message : 'Incorrect username.'});
                }
                if(!user.validPassword(password)) {
                    return done(null, false, {message : 'Incorrect password.'});
                }
                return done(null, user);
        });
    }
));

// passport.use(new LocalStrategy (... 처럼 passport.use() 라는 메서드에 '전략'을 매개 변수로 넣어서 로직을 수행 한다.

