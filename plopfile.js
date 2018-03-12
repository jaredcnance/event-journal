// https://github.com/amwmedia/plop

module.exports = function(plop) {
  plop.addHelper("cwd", p => process.cwd());

  plop.setGenerator("sfc", {
    description: "react stateless functional component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "proper-cased component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "{{cwd}}/{{componentName}}.tsx",
        templateFile: "plop_templates/sfc.hbs"
      }
    ]
  });

  plop.setGenerator("component", {
    description: "react class component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "proper-cased component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "{{cwd}}/{{componentName}}.tsx",
        templateFile: "plop_templates/reactClassComponent.hbs"
      }
    ]
  });
};
