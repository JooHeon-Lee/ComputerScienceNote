// 데이터베이스 연결 모듈 

const URL = 'mongodb://localhost:27017/LJH'
const createConnection = url => ({ "url" : url })

class DB {
    constructor(url) {
        if(!DB.instance) {
            DB.instance = createConnection(url)
        }
        return DB.instance
    }
    connect() {
        return this.instance
    }
}

const a = new DB(URL);
const b = new DB(URL);
console.log(a === b) // true

// 위와 같이 DB.instance 라는 하나의 인스턴스를 기반으로 a,b를 생성해서 DB연결에 관한 인스턴스 생성 비용을 아낄 수 있다.


//Node.js 에서 MongoDB 연결 할때 쓰는 모듈
Mongoose.prototype.connect = function(uri, options, callback) {
    const _mongoose = this instanceof Mongoose ? this : mongoose;
    const conn = _mongoose.connetion;

    return _mongoose._promiseOrCallback(callback, cb => {
        conn.openUri(uri, options, err => {
            if(err != null) {
                return cb(err);
            }
            return cb(null, _mongoose);
        });
    });
};