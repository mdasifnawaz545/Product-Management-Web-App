import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
import productModel from "../models/productSchema";
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());


const create = async (req: any, res: any) => {
    console.log("Reached")
    // let token = jwt.verify(req.cookie.token, process.env.SECRET as string);
    // if (!token) {
    //     return res.json({
    //         message: "Unauthorized",
    //         status: 201
    //     })
    // }
    
    let { product } = req.body;
    
    const data = new productModel(product);
    await data.save();
    if (!data) {
        return res.json({
            message: "Some Error has been Occured",
            status: 404
        })
    }
    else {
        return res.json({
            message: "Data Saved",
            status: 200
        })
    }

}
const view = async (req: any, res: any) => {
    console.log("Reached view 1")
    const data = await productModel.find();
    console.log(data)
    return res.json( data );

}
const update = async (req: any, res: any) => {
    let token = jwt.verify(req.cookie.token, process.env.SECRET as string);
    if (!token) {
        return res.json({
            message: "Unauthorized",
            status: 201
        })
    }
    let { id, updatedProduct } = req.body();
    let data = await productModel.findByIdAndUpdate(id, updatedProduct);
    if (!data) {
        return res.json({
            message: "Some Error has been Occured",
            status: 404
        })
    }
    else {
        return res.json({
            message: "Data Saved",
            status: 200
        })
    }

}
const remove = async (req: any, res: any) => {
    // let token = jwt.verify(req.cookie.token, process.env.SECRET as string);
    // if (!token) {
    //     return res.json({
    //         message: "Unauthorized",
    //         status: 201
    //     })
    // }
    let { name } = req.body;
    let data = await productModel.findOneAndDelete({name});
    if (!data) {
        return res.json({
            message: "Some Error has been Occured",
            status: 404
        })
    }
    else {
        return res.json({
            message: "Data Saved",
            status: 200
        })
    }

}

const search = async (req: any, res: any) => {
    let { name } = req.body;
    let data = await productModel.findOne({name:name});
    if (!data) {
        return res.json({
            message: "Some Error has been Occured",
            status: 404
        })
    }
    else {
        return res.json(
            data
        )
    }

}

export { create, view, update, remove, search };
