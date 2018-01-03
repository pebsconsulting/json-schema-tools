var mergeCfRecurse = require('./lib/mergeCfRecurse');
var ldo = require('./lib/ldo');

module.exports = {
  mergeCfRecurse: mergeCfRecurse.mergeCfRecurse,
  makeCfRecurseWalker: mergeCfRecurse.makeCfRecurseWalker,
  pruneDefinitions: mergeCfRecurse.pruneDefinitions,
  removeLinksAndDefs: mergeCfRecurse.removeLinksAndDefs,
  extractLdos: ldo.extractLdos,
  extractLdo: ldo.extractLdo,
  resolveUri: ldo.resolveUri,
  getCollapseAllOfCallback: allOf.getCollapseAllOfCallback,
  collapseSchemas: allOf.collapseSchemas,

  // TODO: These should probably be namespaced in some way
  //       as they do specific things with the keywords rather
  //       than being full implementations of the specs.
  DRAFT_04: allOf.DRAFT_04,
  DRAFT_04_HYPER: allOf.DRAFT_04_HYPER,
  CLOUDFLARE_DOCA: allOf.CLOUDFLARE_DOCA
};