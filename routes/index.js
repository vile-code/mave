const { Router } = require("express");
const router = Router();


//aqui quiero que pase un boton ver mas y me redireccione a esa routess
router.get("/AFtoyota", (req, res) => {
  res.render("vermas/AFtoyota");
});

router.get("/medica-tartagal", (req, res) => {
  res.render("vermas/medica-tartagal");
});


router.get("/champions", (req, res) => {
  res.render("vermas/champions");
});


router.get("/cr7", (req, res) => {
  res.render("vermas/cr7");
});


router.get("/julian-juventud", (req, res) => {
  res.render("vermas/julian-juventud");
});

router.get("/wichi-salta", (req, res) => {
  res.render("vermas/wichi-salta");
});

router.get("/mas", (req, res) => {
  res.render("pages/mas");
});

router.get("/more", (req, res) => {
  res.render("pages/more");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
