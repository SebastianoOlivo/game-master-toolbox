// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/jwt-simple/jwt-simple.d.ts
declare module "jwt-simple" {
  /**
   * Decode jwt
   * @param token
   * @param key
   * @param noVerify
   * @api public
   */
  export function decode(token:any, key:string, noVerify?:boolean):any;
  /**
   * Encode jwt
   * @param payload
   * @param key
   * @param algorithm default is HS256
   * @api public
   */
  export function encode(payload:any, key:string, algorithm?:string):string;
}