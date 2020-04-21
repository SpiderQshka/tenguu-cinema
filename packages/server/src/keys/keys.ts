const TOKEN_SECRET: string = "MamaMia";
const DBNAME: string = "Main";
const DBTESTNAME: string = "Test";
const DBURL: string = `mongodb+srv://SpiderQshka:Prusov.2002@cluster0-w1bmm.mongodb.net/${DBNAME}`;
const DBTESTURL: string = `mongodb+srv://SpiderQshka:Prusov.2002@cluster0-w1bmm.mongodb.net/${DBTESTNAME}`;
const _IDREGEXP: RegExp = /^[0-9a-fA-F]{24}$/;
const PORT = process.env.PORT || 80;

export { TOKEN_SECRET, DBURL, DBTESTURL, _IDREGEXP, PORT };
