$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "ConsultaGoogle",
  "description": "",
  "id": "consultagoogle",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9795767500,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Volta as Aulas",
  "description": "",
  "id": "consultagoogle;volta-as-aulas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "que acesso o site do Google",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "pesquiso por \"Volta as Aulas\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "exibe no titulo da aba \"Volta as Aulas - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Google.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 2190129300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volta as Aulas",
      "offset": 14
    }
  ],
  "location": "Google.pesquiso_por(String)"
});
formatter.result({
  "duration": 3655932500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volta as Aulas - Pesquisa Google",
      "offset": 24
    }
  ],
  "location": "Google.exibe_no_titulo_da_aba(String)"
});
formatter.result({
  "duration": 17116300,
  "status": "passed"
});
formatter.after({
  "duration": 1894603300,
  "status": "passed"
});
});