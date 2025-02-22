const path = require('path');
const { CoreService } = require('@semapps/core');
const { pair, semapps, og, as } = require('@semapps/ontologies');
const CONFIG = require('../config/config');
const containers = require('../config/containers');

module.exports = {
  mixins: [CoreService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    baseDir: path.resolve(__dirname, '..'),
    triplestore: {
      url: CONFIG.SPARQL_ENDPOINT,
      user: CONFIG.JENA_USER,
      password: CONFIG.JENA_PASSWORD,
      mainDataset: CONFIG.MAIN_DATASET,
    },
    ontologies: [pair, semapps, og, as],
    containers,
    // Sub-services settings
    activitypub: {
      activitiesPath: "/activities"
    },
    api: {
      port: CONFIG.PORT,
    },
    ldp: false,
    void: {
      title: CONFIG.INSTANCE_NAME,
      description: CONFIG.INSTANCE_DESCRIPTION
    },
    webacl: {
      superAdmins: []
    },
    sparqlEndpoint: false,
  }
};
