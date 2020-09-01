import { Post } from "./entities/Post";
import { __prod__ } from "../constants";
import {Options} from '@mikro-orm/core'
import path from 'path'

export default {
  migrations:{
    path: path.resolve(__dirname, "migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/, 
  },
  entities: [Post],
  dbName: "lireddit",
  type: 'postgresql',
  debug: !__prod__,
  user: "postgres",
  password: "kl223190a"
} as Options;