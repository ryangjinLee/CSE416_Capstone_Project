const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB 연결 정보 설정
const uri = 'mongodb://root:1234@localhost:27017';
const client = new MongoClient(uri);

// 데이터베이스와 컬렉션 설정
const dbName = 'cse416';
const collectionName = 'state';

// MongoDB 연결 및 데이터 가져오기
async function connectToMongo() {
    try {
        await client.connect();  // MongoDB 연결
        console.log('Connected to MongoDB');
        const db = client.db(dbName);  // 'cse416' 데이터베이스 선택
        const collection = db.collection(collectionName);  // 'state' 컬렉션 선택

        return collection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// API 엔드포인트 설정
app.get('/data', async (req, res) => {
    try {
        const collection = await connectToMongo();  // MongoDB 컬렉션 연결
        const result = await collection.findOne({ name: 'example' });  // 'example' 데이터를 찾음

        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Data not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
