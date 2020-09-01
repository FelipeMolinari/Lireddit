import { MikroORM } from "@mikro-orm/core";
// import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

export default async function db(){
  const orm = await MikroORM.init(mikroOrmConfig)
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, {title:"my first post here"})
  // await orm.em.persistAndFlush(post)
  // const posts = await orm.em.find(Post, {})
  // console.log(posts,"Lol");
  return orm;

}


