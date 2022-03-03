const express = require("express");

const router = express.Router();
const courses = ["NodeJS", "ReactJS", "VueJS", "AdonisJS 5"];

router.get("/:index", (req, res) => {
  const { index } = req.params;

  courses[index]
    ? res.status(200).json({ course: courses[index] })
    : res.status(404).json({ error: "Course not found." });
});

router.get("/", (req, res) => {
  return res.status(200).json({ courses });
});

router.post("/", (req, res) => {
  const { name } = req.body;

  courses.push(name);

  return res.status(201).json({ message: "Course created." });
});

router.put("/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  if (courses[index]) {
    courses[index] = name;
    return res.status(200).json({ message: "Course updated." });
  }

  return res.status(404).json({ error: "Course not found." });
});

router.delete("/:index", (req, res) => {
  const { index } = req.params;

  if (courses[index]) {
    courses.splice(index, 1);
    return res.status(200).json({ message: "Course deleted." });
  }

  return res.status(404).json({ message: "Course not found." });
});

module.exports = router;
