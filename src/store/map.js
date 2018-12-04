import Node from "./models/node";
import Edge from "./models/edge";

class Map {
    constructor({ id }) {
        this.id = id;
        this.nodes = [];
        this.edges = [];
    }

    addNode({ id, label }) {
        this.nodes.push(new Node({ id, label }))
    }

    removeNode(id) {
        this.nodes = this.nodes.filter(node => node.id !== id);
    }

    addEdge({ from, to }) {
        this.edges.push(new Edge(from, to));
    }

    removeEdge(from, to) {
        this.edges = this.edges.filter(edge => edge.from !== from && edge.to !== to);
    }

    get visData() {
        return {
            edges: this.edges,
            nodes: this.nodes
        };
    }
}

export default Map;