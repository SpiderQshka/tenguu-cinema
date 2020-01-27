import mongoose from "mongoose";
import express from "express";

export class App {
  url: string;
  port: number;
  constructor(url: string, port: number) {
    this.url = url;
    this.port = port;
  }
}
