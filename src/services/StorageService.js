export default {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return entities;
}

function get(entityType, entityId) {
    const entities = query(entityType)
    const entity = entities.find(entity => entity.cityKey === entityId)
    return entity;
}

function post(entityType, newEntity) {
    let entities = query(entityType)
    entities.push(newEntity);
    _save(entityType, entities)
    return newEntity;
}

function postMany(entityType, newEntities) {
    let entities = query(entityType)
    entities.push(...newEntities);
    _save(entityType, entities)
    return entities;
}

function put(entityType, updatedEntity) {
    let entities = query(entityType)
    const idx = entities.findIndex(entity => entity.cityKey === updatedEntity.cityKey);
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity;
}

function remove(entityType, entityId) {
    let entities = query(entityType)
    entities = entities.filter(entity => entity.Key !== entityId);
    _save(entityType, entities)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}
