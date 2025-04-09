import jwt from 'jsonwebtoken'
import userModel from '../models/userSchema';
import bcrypt from "bcrypt";
import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());


const verify = async (req: any, res: any) => {
    let token = jwt.verify(req.cookie.token, process.env.SECRET as string);
    return res.json(token)
}



const register = async (req: any, res: any) => {
    let { email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const user = new userModel({ email, password: hash });
            await user.save();

        })
    });
    let token = jwt.sign(email, process.env.SECRET as string);
    res.cookie("token", token);
    return res.json({
        message: "Account created",
        status: 501,
    })

}


const login = async (req: any, res: any) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.json({
        message: "Account not created",
        status: 501,
    })
    else {
        bcrypt.compare(password, user.password as string, (err, result) => {
            if (result) {
                let token = jwt.sign(email, process.env.SECRET as string);
                res.cookie("token", token);
                return res.json({ token });
            }
            else {
                return res.json({
                    message: "Password is not correct",
                    status: 501,
                })
            }
        })
    }

}


const logout = async (req: any, res: any) => {
    res.cookie("token", "");
    return res.json({
        message: "Logout Successfully",
        status: 200,
    })

}

export { register, login, logout,verify };