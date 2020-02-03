const TOKEN_SECRET: string = "MamaMia";
const DBNAME: string = "Main";
const DBURL: string = `mongodb+srv://SpiderQshka:Prusov.2002@cluster0-w1bmm.mongodb.net/${DBNAME}`;
const _IDREGEXP: RegExp = /^[0-9a-fA-F]{24}$/;
const PORT: number = 4000;

export { TOKEN_SECRET, DBURL, _IDREGEXP, PORT };
