export class RangeError extends Error {}

function checkRange(value:number){
  if(value < 0){
    throw new RangeError('入力値は正数で入力してください')
  }
}

export function add(a:number,b:number){
  checkRange(a);
  checkRange(b);
  return a + b;
}
