// https://graphviz.org/doc/info/lang.html
// https://github.com/anvaka/dotparser

export type Unknown = {
  [key: string]: unknown;
};

export type Graph = {
  type: "graph" | "digraph";
  id?: string;
  children?: Unknown[];
  strict?: boolean;
};

export type Subgraph = {
  type: "subgraph";
  id?: string;
  children?: Unknown[];
};

export type NodeStatement = {
  type: "node_stmt";
  node_id: { type: "node_id"; id: string };
  attr_list: Attr[];
};

export type EdgeStatement = {
  type: "edge_stmt";
  edge_list: Edge[];
  attr_list: Attr[];
};

export type AttrStatement = {
  type: "attr_stmt";
  target: "graph" | "node" | "edge";
  attr_list: Attr[];
};

export type Edge = { type: "node_id"; id: string };

export type Attr = { type: "attr"; id: string; eq: string };
