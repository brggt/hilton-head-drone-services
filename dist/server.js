"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server/index.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var __dirname = import_path.default.resolve();
var app = (0, import_express.default)();
var PORT = process.env.PORT || 3e3;
app.use(import_express.default.json());
app.use(import_express.default.static(import_path.default.join(__dirname, "../dist")));
app.post("/api/inquiries", (req, res) => {
  try {
    const { name, email, phone, propertyAddress, serviceType, budget, message } = req.body;
    if (!name || !email || !propertyAddress) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    console.log("Inquiry received:", { name, email, phone, propertyAddress, serviceType, budget, message });
    res.json({
      success: true,
      message: "Thank you for your inquiry! We will contact you soon."
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    res.status(500).json({ error: "Failed to process inquiry" });
  }
});
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
app.get("*", (req, res) => {
  res.sendFile(import_path.default.join(__dirname, "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
