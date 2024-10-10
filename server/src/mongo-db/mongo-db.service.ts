import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class MongoDBService implements OnModuleInit {
  private client: MongoClient;
  private db: Db;

  constructor() {
    // MongoDB 연결 설정
    const uri = 'mongodb://root:1234@localhost:27017';
    this.client = new MongoClient(uri);
  }

  async onModuleInit() {
    await this.client.connect();
    this.db = this.client.db('cse416');
    console.log('Connected to MongoDB');
  }

  async findOne(collectionName: string, query: any) {
    const collection = this.db.collection(collectionName);
    return collection.findOne(query);
  }

  // // 컬렉션에 문서 삽입
  // async insertOne(collectionName: string, document: any) {
  //   const collection = this.db.collection(collectionName);
  //   return collection.insertOne(document);
  // }
  //
  // 컬렉션에서 모든 문서 찾기
  async findAll(collectionName: string) {
    const collection = this.db.collection(collectionName);
    return collection.find().toArray();
  }
  //
  // // 서비스 종료 시 MongoDB 연결 해제
  // async onModuleDestroy() {
  //   await this.client.close();
  // }
}
