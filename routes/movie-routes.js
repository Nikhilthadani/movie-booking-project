import express from "express";
import {
  addMovie,
  getAllMovies,
  getMovieById,
} from "../controllers/movie-controller";
const movieRouter = express.Router();
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", addMovie);

export default movieRouter;
