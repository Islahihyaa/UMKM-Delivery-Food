import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        const result = await food.save();
        res.status(200).json({
            success:true, 
            message:"Food Added",
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Error adding food",
            error: error.message
        })
    }
};

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find();
        res.status(200).json({
            success:true, 
            data: foods
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Error get list food",
            error: error.message
        })
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})

        await foodModel.findByIdAndDelete(req.body.id)
        res.status(200).json({
            success:true, 
            message: "Food Removed"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error remove food",
            error: error.message
        })
    }
};

export {
    addFood, 
    listFood,
    removeFood
};