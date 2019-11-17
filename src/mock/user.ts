import { Random, mock } from 'mockjs'
let userList = []

for(let Idx = 0; Idx < 200; Idx++) {
  userList.push({
    id: mock('@natural'),
    name: Random.cname(),
    age: Random.natural(20, 90),
    birthday: Random.date('yyyy-mm-dd'),
    address: mock('@county(true)')
  })
}

const newId =()=>{
  return mock('@natural') 
}

export {
  userList,
  newId
}
