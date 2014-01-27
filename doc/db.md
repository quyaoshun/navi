## 数据库文档设计


### 表示一个书单条目的文档

表 user:

```
{
  _id: ObjectId,
  name: String(unique),
  email: String(unique),
  password: String,
  createTime: Date(Date.now),
  updateTime: Date(Date.now)
}
```

表 user_books:

```
{
  _id: ObjectId,
  userId: ObjectId,
  bookId: ObjectId,
  addTime: Date(Date.now)
}
```

表book:

```
{
  _id: ObjectId,
  title: String,
  desc: String,
  author: String,
  press: String,
  releaseDate: Date,
  addTime: Date(Date.now),
  updateTime: Date(Date.now)
}
```
