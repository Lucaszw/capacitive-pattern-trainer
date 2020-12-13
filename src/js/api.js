import _ from "lodash";

let request = async (route, type, json) => {
    let options = {
        method: type,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (json) options.body = JSON.stringify(json || {});

    let r = await fetch(route, options);
    return await r.json();
}

export default {
    cards: {
        findAll: async () => {
            return await request('/api/cards', 'get');
        },
        create: async (name, numberOfTouches, allowedVariance) => {
            return await request('/api/cards', 'post', {
                name, numberOfTouches, allowedVariance
            });
        },
        update: async (cardId, updates) => {
            updates = _.pick(updates, ['name, numberOfTouches', 'allowedVariance']);
            return await request(`/api/cards/${cardId}`, 'patch', updates);
        },
        delete: async (cardId) => {
            return await request(`/api/cards/${cardId}`, 'delete');
        },

        find: async (cardId) => {
            return await request(`/api/cards/${cardId}`, 'get');
        },
        samples: (cardId) => {return {
            findAll: async () => {
                return await request(`/api/cards/${cardId}/samples`, 'get');
            },
            create: async (touches) => {
                touches = _.map(touches, (t) => {return {x: t.x, y: t.y, r: t.r}});
                return await request(`/api/cards/${cardId}/samples`, 'post', {touches});
            },
            delete: async (sampleId) => {
                return await request(`/api/cards/${cardId}/samples/${sampleId}`, 'delete');
            }
        }}
    }
}