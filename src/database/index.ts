import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

export default async function db(){
  const orm = await MikroORM.init(mikroOrmConfig)
  return orm;
  const post = orm.em.create(Post, {title:"my first post here"})
  await orm.em.persistAndFlush(post)
  await orm.em.nativeInsert(Post, {title: "my first post 2"})

}


