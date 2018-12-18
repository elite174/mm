import Map from "./mindmap";

class Store {
    maps = {}

    addMap() {
        const mapId = Math.random();

        this.maps[mapId] = new Map(mapId);
    }

    removeMap(id) {
        delete this.maps[id];
    }

    getMap(id) {
        return this.maps[id]
    }
}

const STORE = new Store();

export default STORE;
