---
id: work_with_db
title: Работа с базами данных
---

В Node.js существуют различные библиотеки для работы с базами данных. Одной из самых популярных является MongoDB, которая предоставляет удобный интерфейс для работы с документами.

При работе с MongoDB в Node.js нужно использовать драйвер MongoDB. Например, можно использовать библиотеку mongoose, которая упрощает работу с MongoDB.

Сначала нужно установить драйвер MongoDB и подключить его к проекту. Затем можно создавать модели данных и сохранять их в базе данных.

Например, чтобы создать модель данных для пользователей, можно написать следующий код:

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true }
});

const User = mongoose.model('User', UserSchema);
Этот код создает модель данных User с полями name и email. Затем создается экземпляр модели User и сохраняется в базе данных с помощью метода save().

User.findOne({ name: 'John' }, (err, user) => {
  if (!user) {
    const newUser = { name: 'John', email: 'john@example.com' };
    User.create(newUser, (err, newUser) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Пользователь успешно создан');
      }
    });
  } else {
    user.email = 'john@example.com';
    user.save((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Email пользователя успешно изменен');
      }
    });
  }
});
Здесь сначала находится пользователь с именем John. Затем его email меняется на john@example.com.

