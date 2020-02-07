import passport from "passport";
import passportJWT from "passport-jwt";
import passportLocal from "passport-local";
import { models } from "../models/index";
import { TOKEN_SECRET } from "../keys/keys";
const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export default passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(username, password, done) {
      models.User.findOne({ email: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username." }); // Error User Options
        }
        if (!user.comparePasswords(password, user.password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromHeader("auth-token"),
      secretOrKey: TOKEN_SECRET
    },
    async (jwtPayload, done: Function): Promise<void> => {
      const user = await models.User.findById(jwtPayload._id);
      if (!user) done("User not found", null);
      done(null, user);
    }
  )
);
