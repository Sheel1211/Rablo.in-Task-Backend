import express from "express";
import { Product } from "../../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(req.body);
    res.status(200).json({
      success: true,
      message: "Product Added Successfully",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: products,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message:"Product deleted successfully",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e,
    });
  }
};


export const featuredProducts = async (req, res) => {
    try {
      const products = await Product.find({Featured:true});
      res.status(200).json({
        success: true,
        message: products,
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e,
      });
    }
};


export const getProductsMaxPrice = async (req, res) => {
    try {
      const products = await Product.find({Price:{$lt:req.params.price}});
      res.status(200).json({
        success: true,
        message: products,
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e,
      });
    }
};
export const getProductsMinPrice = async (req, res) => {
    try {
      const products = await Product.find({Price:{$gt:req.params.price}});
      res.status(200).json({
        success: true,
        message: products,
      });
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e,
      });
    }
  };