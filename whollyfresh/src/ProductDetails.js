import React, { useState, useEffect } from "react";
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useFetch from "./useFetch.js";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";