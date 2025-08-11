// Using Vite's import.meta.glob instead of require.context
const files = import.meta.glob('./*.js', { eager: true });
const modules = {};

function getCamelCaseName(name) {
  if (name.indexOf("-")) {
    const _tempName = name.toLowerCase().split("-");
    const l = _tempName.length;
    for (let i = 1; i < l; i++) {
      _tempName[i] =
        _tempName[i].substring(0, 1).toUpperCase() + _tempName[i].substring(1);
    }
    return _tempName.join("");
  } else {
    return name;
  }
}

Object.keys(files).forEach((key) => {
  if (key === "./index.js") return;
  const tmpKey = key.replace(/(\.\/|\.js)/g, "");
  const camelCaseName = getCamelCaseName(tmpKey);
  modules[camelCaseName] = files[key].default || files[key];
});

export default modules;
