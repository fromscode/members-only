import passport from 'passport';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';
import queries from '../db/queries.js';

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: Buffer.from(process.env.PUBLIC_KEY as string, 'base64url').toString(),
    algorithms: ["RS256" as const]
}, async (jwtPayload, done) => {
    if (!jwtPayload.sub || isNaN(jwtPayload.sub)) {
        return done(null, false, 'Invalid token');
    }

    const userId = +jwtPayload.sub;

    try {
        const user = await queries.getUserId(userId);
        if (user) return done(null, user);
    }
    catch (err) {
        return done(err, false);
    }

}),)