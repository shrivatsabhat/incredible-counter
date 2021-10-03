'use-strict';
const Type = ['index', 'style'];

const PascalCalse = word =>
  word.replace(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());

/**
 * @function TemplateFile - Returns the folder location of handlebars
 * @param {string} type Type of template file
 * @returns {string} Path location
 */
const TemplateFile = type => `./__ploptemplate__/component-${type}.hbs`;

/**
 * @function Path - Return destination path location for type of file created
 * @param {string} name  Name of folder/file
 * @param {string} location Component type according to atomic structure design
 * @param {string} type Type of generate template file
 * @returns {string} Path location
 */
const Path = (name, location, type) => {
  const base = `./src/components`;
  if (type) {
    const path = `${base}/${location}/${name}`;

    switch (type) {
      case 'index':
        return `${path}/index.tsx`;

      case 'style':
        return `${path}/${name}.module.scss`;

      case 'stories':
        return `${path}/${name}.stories.tsx`;

      default:
        return path;
    }
  }
  return base;
};

/**
 * @function CreateTemplates - Array of Plop actions
 * @param {*} data Data of type plop Answers
 * @returns {{type: string;path: string;templateFile: string;}[]} Array of object of plop template
 */
const CreateTemplates = data =>
  Type.map(type => {
    return {
      type: 'add',
      path: Path(PascalCalse(data.name), data.location, type),
      templateFile: TemplateFile(type),
    };
  });

// Default
module.exports = function (plop) {
  // plop generator code
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name: ',
        validate: input => {
          if (!input) return `This is field is REQUIRED!!`;
          return true;
        },
      },
      {
        type: 'list',
        name: 'location',
        message: 'Choose component type..',
        choices: () => [
          { name: 'atoms', value: 'atoms' },
          { name: 'molecules', value: 'molecules' },
          { name: 'organisms', value: 'organisms' },
        ],
      },
    ], // array of inquirer prompts
    actions: data => CreateTemplates(data), // array of actions
  });
};
