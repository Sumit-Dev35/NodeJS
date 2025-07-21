const taskModel = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const getTasks = await taskModel.find();
    res.status(200).json({
      message: "Success",
      data: getTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskModel.findById(id);
    if (!result) {
      return res.status(404).json({
        message: `No Item found with this ${id}`,
      });
    }
    res.status(200).json({
      messgae: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const result = await taskModel.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({
        message: `No task exist with ${id} id`,
      });
      return;
    }
    res.status(200).json({
      messag: "suceess",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
